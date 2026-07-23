"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2, CheckCircle, AlertCircle, Dumbbell, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

const DEMO_EMAIL = "demo@pulseforge.com";
const DEMO_PASSWORD = "Demo@123";

const initialForm = { name: "", email: "", password: "" };
const initialErrors = { name: "", email: "", password: "" };

function validateField(name, value, mode) {
  if (name === "name" && mode === "signup" && value.length < 2) return "Name must be at least 2 characters";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
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
  const [copied, setCopied] = useState(null);
  const router = useRouter();
  const { addToast } = useToast();

  function handleChange(name, value) {
    setForm((c) => ({ ...c, [name]: value }));
    if (errors[name]) {
      setErrors((c) => ({ ...c, [name]: validateField(name, value, mode) }));
    }
  }

  function handleBlur(name, value) {
    setErrors((c) => ({ ...c, [name]: validateField(name, value, mode) }));
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
    setErrors((c) => ({ ...c, ...filtered }));
    return Object.keys(filtered).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
    const payload = mode === "login" ? { email: form.email, password: form.password } : form;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Authentication failed.");
      addToast(data.message, "success");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  function fillDemoCredentials() {
    setForm((c) => ({ ...c, email: DEMO_EMAIL, password: DEMO_PASSWORD }));
    setErrors(initialErrors);
  }

  function copyToClipboard(text, field) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(field);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  const passwordStrength = getPasswordStrength(form.password);
  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-emerald-400"];

  return (
    <div className="grid gap-8 lg:grid-cols-2 items-start min-h-[500px]">
      {/* Left side - info */}
      <div className="hidden lg:flex flex-col justify-center h-full px-6">
        <div className="rounded-xl bg-red-600/10 border border-red-500/20 p-3 w-fit mb-6">
          <Dumbbell size={22} className="text-red-400" />
        </div>
        <h2 className="text-3xl font-bold text-white leading-tight">
          Your fitness journey<br />starts with one step.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/40 max-w-sm">
          Track workouts, book sessions, and manage your membership from one place.
        </p>
        <div className="mt-8 space-y-3">
          {["Track your fitness progress", "Book training sessions", "Manage membership plans"].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-white/50">
              <CheckCircle size={15} className="text-red-500/70 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - form */}
      <div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.08] bg-[#111] p-6 sm:p-8">
          <div className="lg:hidden flex items-center gap-2.5 mb-6">
            <div className="rounded-lg bg-red-600/10 border border-red-500/20 p-2">
              <Dumbbell size={18} className="text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Welcome back</h2>
          </div>

          <div className="mb-6 inline-flex rounded-lg border border-white/[0.08] bg-black/40 p-1">
            {["login", "signup"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => { setMode(item); setErrors(initialErrors); }}
                className={`rounded-md px-5 py-2 text-sm font-medium capitalize transition ${
                  mode === item
                    ? "bg-red-600 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {item === "login" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {mode === "signup" && (
              <Field
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                placeholder="Your name"
              />
            )}
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="you@email.com"
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
                placeholder="Min 6 characters"
              >
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </Field>

              {form.password.length > 0 && (
                <div className="mt-2.5 space-y-1.5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all ${
                          i < passwordStrength ? strengthColors[passwordStrength - 1] : "bg-white/[0.06]"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs ${passwordStrength >= 4 ? "text-emerald-400" : "text-white/40"}`}>
                    {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : ""}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-black/40 accent-red-600" />
              <span className="text-sm text-white/40">Remember me</span>
            </label>
            <button type="button" className="text-sm text-white/40 hover:text-white/70 transition">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 active:bg-red-800 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {mode === "login" ? "Signing in..." : "Creating account..."}
              </>
            ) : mode === "login" ? "Sign In" : "Create Account"}
          </button>

          <p className="mt-6 text-center text-sm text-white/30">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setErrors(initialErrors); }}
              className="text-red-400 hover:text-red-300 transition"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </form>

        {/* Demo Credentials Box */}
        {mode === "login" && (
          <div className="mt-4 rounded-2xl border border-dashed border-red-500/20 bg-red-600/[0.04] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Demo Login Credentials
              </span>
            </div>
            <p className="text-xs text-white/40 mb-3">
              Use these credentials to sign in. First time? Click &quot;Create Demo Account&quot; to register.
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-black/40 border border-white/[0.06] px-3 py-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/30 block">Email</span>
                  <span className="text-sm text-white/70 font-mono">{DEMO_EMAIL}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(DEMO_EMAIL, "email")}
                  className="text-white/30 hover:text-white/60 transition"
                >
                  {copied === "email" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-black/40 border border-white/[0.06] px-3 py-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/30 block">Password</span>
                  <span className="text-sm text-white/70 font-mono">{DEMO_PASSWORD}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(DEMO_PASSWORD, "password")}
                  className="text-white/30 hover:text-white/60 transition"
                >
                  {copied === "password" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 sm:flex-row">
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="flex-1 rounded-lg border border-red-500/20 bg-red-600/10 px-4 py-2 text-xs font-medium text-red-400 transition hover:bg-red-600/20"
              >
                Auto-fill credentials
              </button>
              <button
                type="button"
                onClick={async () => {
                  setLoading(true);
                  try {
                    const res = await fetch("/api/auth/seed", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name: "Demo User", email: DEMO_EMAIL, password: DEMO_PASSWORD })
                    });
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.message);
                    addToast(data.message, "success");
                    fillDemoCredentials();
                  } catch (error) {
                    addToast(error.message, "error");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-red-700"
              >
                Create Demo Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, onBlur, error, placeholder, children }) {
  const hasError = !!error;

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-white/60">{label}</span>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={(e) => onBlur(name, e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-white outline-none transition bg-black/40 placeholder:text-white/20 ${
            hasError
              ? "border-red-500/40 focus:border-red-500/60"
              : "border-white/[0.08] focus:border-red-500/30"
          }`}
          required
        />
        {children}
      </div>
      {hasError && (
        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </label>
  );
}
