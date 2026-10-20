"use client";

import { useState } from "react";

const API_URL = "https://api.qselnetwork.com/api/beta/signup";

const inputClass =
  "w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-qsel-highlight";

export default function TesterSignupForm({ source }: { source: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          device,
          platform: "android",
          product: "quantum-follis",
          source,
          companyWebsite,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("done");
        setMessage(data.message || "You're on the list.");
      } else {
        setStatus("error");
        setMessage(data.error || "Signup failed, please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not reach the signup service. Please try again in a minute.");
    }
  };

  if (status === "done") {
    return (
      <div className="glass-card p-8 text-center">
        <p className="text-white text-lg font-semibold mb-2">{message}</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Use the Google account that is signed in to the Play Store on your Android phone.
          We add testers in batches and email the invite to that address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass-card p-8 text-left">
      <label htmlFor="tester-name" className="block text-sm text-slate-400 mb-2">
        Name
      </label>
      <input
        id="tester-name"
        type="text"
        required
        minLength={2}
        maxLength={80}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className={`${inputClass} mb-4`}
      />

      <label htmlFor="tester-email" className="block text-sm text-slate-400 mb-2">
        Google account email (the one on your Android phone)
      </label>
      <input
        id="tester-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@gmail.com"
        className={`${inputClass} mb-4`}
      />

      <label htmlFor="tester-device" className="block text-sm text-slate-400 mb-2">
        Android device
      </label>
      <input
        id="tester-device"
        type="text"
        required
        minLength={2}
        maxLength={80}
        value={device}
        onChange={(e) => setDevice(e.target.value)}
        placeholder="Pixel 8"
        className={inputClass}
      />

      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        value={companyWebsite}
        onChange={(e) => setCompanyWebsite(e.target.value)}
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-6 py-3 px-8 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a test spot"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400 mt-3">{message}</p>
      )}
      <p className="text-xs text-slate-500 mt-4 leading-relaxed">
        We use this only to add you to the Google Play closed test. Questions:{" "}
        <a href="mailto:contact@qselenterprise.com" className="text-qsel-highlight">
          contact@qselenterprise.com
        </a>
      </p>
    </form>
  );
}
