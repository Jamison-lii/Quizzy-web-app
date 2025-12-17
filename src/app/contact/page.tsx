"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  User,
  PenLine,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* STATUS */}
      {status === "success" && (
        <div className="fixed top-6 right-6 bg-green-50 text-green-700 px-4 py-3 rounded-lg flex gap-2 shadow">
          <CheckCircle size={18} />
          Message sent successfully
        </div>
      )}

      {status === "error" && (
        <div className="fixed top-6 right-6 bg-red-50 text-red-700 px-4 py-3 rounded-lg flex gap-2 shadow">
          <AlertCircle size={18} />
          {error}
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* LEFT */}
      <section>
  <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
    Get in Touch
  </h1>
  <p className="text-lg sm:text-xl text-gray-700 max-w-lg mb-10 leading-relaxed">
    Questions, partnerships, or support? Reach out and we’ll get back to
    you shortly.
  </p>

  <div className="space-y-5 text-base sm:text-lg">
    <div className="flex items-center gap-3">
      <Mail className="text-indigo-600" size={20} />
      info@landmarkmetropolitanuniversity.com
    </div>

    <div className="flex items-center gap-3">
      <Phone className="text-indigo-600" size={20} />
      +237 672 339 570
    </div>

    <div className="flex items-center gap-3">
      <MapPin className="text-indigo-600" size={20} />
      Malingo Street, Molyko Buea
    </div>
  </div>

  <div className="flex gap-4 mt-8">
    <SocialIcon Icon={Facebook} />
    <SocialIcon Icon={Twitter} />
    <SocialIcon Icon={Instagram} />
  </div>
</section>


        {/* RIGHT FORM */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              icon={User}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              label="Email"
              icon={Mail}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Subject"
              icon={PenLine}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <Textarea
              label="Message"
              icon={MessageSquare}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              disabled={status === "submitting"}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Input({ label, icon: Icon, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative mt-1">
        <Icon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-600"
        />
        <input
          {...props}
          className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>
    </div>
  );
}

function Textarea({ label, icon: Icon, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative mt-1">
        <Icon size={18} className="absolute left-3 top-3 text-indigo-600" />
        <textarea
          {...props}
          className="w-full pl-10 pr-3 py-2 h-28 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
        />
      </div>
    </div>
  );
}

function SocialIcon({ Icon }: any) {
  return (
    <div className="p-2 rounded-full bg-gray-100 hover:bg-indigo-100 transition cursor-pointer">
      <Icon size={18} className="text-indigo-600" />
    </div>
  );
}
