"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialState = { name: "", email: "", password: "" };

export default function AuthForm() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

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

      setStatus(data.message);
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(163,230,53,0.16),rgba(255,255,255,0.04))] p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Member Access</p>
        <h2 className="mt-5 text-4xl font-semibold text-white">Train smarter with your own account.</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
          Manage your membership, track your next session, and keep your coaching journey organized in one place.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-black/30 p-1">
          {["login", "signup"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                mode === item ? "bg-lime-400 text-black" : "text-white/65"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {mode === "signup" && (
            <Field label="Full Name" name="name" value={form.name} setForm={setForm} placeholder="Enter your name" />
          )}
          <Field
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            setForm={setForm}
            placeholder="Enter your email"
          />
          <Field
            label="Password"
            name="password"
            type="password"
            value={form.password}
            setForm={setForm}
            placeholder="Minimum 6 characters"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300 disabled:opacity-60"
        >
          {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
        </button>

        {status && <p className="mt-4 text-sm text-white/70">{status}</p>}
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", value, setForm, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setForm((current) => ({ ...current, [name]: event.target.value }))}
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
        required
      />
    </label>
  );
}
