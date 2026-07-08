"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, CheckCircle, AlertCircle, Dumbbell, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/toast";

const initialForm = { name: "", email: "", password: "" };
const initialErrors = { name: "", email: "", password: "" };

function validateField(name, value, mode) {
  if (name === "name" && mode === "signup" && value.length < 2) return "Name must be at least 2 characters";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
  if (name === "password" && value.length < 6) return "Password must be at least 6 characters";
  return "";
}

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return Math.min(score, 5);
}

export default function AuthForm() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const { addToast } = useToast();

  function handleChange(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value, mode) }));
    }
  }

  function handleBlur(name, value) {
    setErrors((current) => ({ ...current, [name]: validateField(name, value, mode) }));
  }

  function validateForm() {
    const newErrors = {};
    if (mode === "signup") newErrors.name = validateField("name", form.name, mode);
    newErrors.email = validateField("email", form.email, mode);
    newErrors.password = validateField("password", form.password, mode);
    const filtered = {};
    for (const key in newErrors) {
      if (newErrors[key]) filtered[key] = newErrors[key];
    }
    setErrors((current) => ({ ...current, ...filtered }));
    return Object.keys(filtered).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
    const payload = mode === "login" ? { email: form.email, password: form.password } : form;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
      }

      addToast(data.message, "success");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  const passwordStrength = getPasswordStrength(form.password);
  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-lime-400",
    "bg-green-400"
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center min-h-[600px]">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(163,230,53,0.16),rgba(255,255,255,0.04))] p-8 sm:p-10 h-full flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative">
          <div className="inline-flex rounded-2xl bg-lime-500/10 border border-lime-400/20 p-3 mb-6">
            <Dumbbell size={24} className="text-lime-300" />
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Member Access</p>
          <h2 className="mt-5 text-4xl font-semibold text-white leading-[1.15]">
            Train smarter<br />with your own account.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Manage your membership, track your next session, and keep your coaching journey organized in one place.
          </p>
          <div className="mt-8 space-y-3">
            {["Track your fitness progress", "Book training sessions", "Manage membership plans"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-lime-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.06),transparent_60%)] pointer-events-none" />

        <div className="relative">
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-black/30 p-1">
            {["login", "signup"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => { setMode(item); setErrors(initialErrors); }}
                className={`rounded-full px-5 py-2 text-sm capitalize font-medium transition-all duration-300 ${
                  mode === item
                    ? "bg-lime-400 text-black shadow-[0_4px_16px_rgba(163,230,53,0.3)]"
                    : "text-white/65 hover:text-white/90"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            {mode === "signup" && (
              <Field
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                placeholder="Enter your name"
                icon={Sparkles}
              />
            )}
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="Enter your email"
            />
            <div>
              <Field
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                placeholder="Minimum 6 characters"
              >
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </Field>

              {form.password.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i < passwordStrength ? strengthColors[passwordStrength - 1] : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs ${passwordStrength >= 4 ? "text-lime-300" : "text-white/50"}`}>
                    {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : ""}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 accent-lime-400"
              />
              <span className="text-sm text-white/60">Remember me</span>
            </label>
            <button type="button" className="text-sm text-orange-300/70 hover:text-orange-300 transition">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_8px_32px_rgba(163,230,53,0.25)] disabled:opacity-60 disabled:hover:shadow-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {mode === "login" ? "Signing in..." : "Creating account..."}
              </>
            ) : mode === "login" ? (
              <>
                Login
                <AlertCircle size={14} className="hidden sm:block" />
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, onBlur, error, placeholder, icon: Icon, children }) {
  const hasError = !!error;

  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
            <Icon size={16} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={(e) => onBlur(name, e.target.value)}
          className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none transition-all duration-200 bg-black/40 ${
            hasError
              ? "border-red-400/40 focus:border-red-400/60"
              : "border-white/10 focus:border-lime-300/40"
          } ${Icon ? "pl-11" : ""}`}
          required
        />
        {children}
      </div>
      {hasError && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </label>
  );
}
