"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("/api/contact", form);
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="bg-white/30 border border-black rounded-lg p-6 md:p-8 max-w-2xl w-full space-y-4 mt-10 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-900 mb-1 font-medium">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-black bg-white/50 p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-900 mb-1 font-medium">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-black bg-white/50 p-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-900 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-black bg-white/50 p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-900 mb-1 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-black bg-white/50 p-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-900 mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
            className="w-full rounded-md border border-black bg-white/50 p-2 focus:outline-none"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-white/70 border border-black rounded-md px-6 py-2 text-gray-900 font-semibold shadow-sm hover:bg-white hover:cursor-pointer transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-green-600 text-sm text-right">Message sent!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm text-right">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
  );
}
