"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", checkIn: "", checkOut: "", message: "" });

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800">
        Thanks, your enquiry is in. We&apos;ll get back to you within a day with availability and next steps.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="border border-slate-300 rounded-lg px-4 py-2"
          placeholder="Full name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <input
          className="border border-slate-300 rounded-lg px-4 py-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <div>
          <label className="text-sm text-slate-500">Check-in</label>
          <input
            type="date"
            className="border border-slate-300 rounded-lg px-4 py-2 w-full"
            value={form.checkIn}
            onChange={(e) => update("checkIn", e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-slate-500">Check-out</label>
          <input
            type="date"
            className="border border-slate-300 rounded-lg px-4 py-2 w-full"
            value={form.checkOut}
            onChange={(e) => update("checkOut", e.target.value)}
          />
        </div>
      </div>
      <textarea
        className="border border-slate-300 rounded-lg px-4 py-2 w-full"
        placeholder="Message"
        rows={4}
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800"
      >
        Send enquiry
      </button>
    </div>
  );
}