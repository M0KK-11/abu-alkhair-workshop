"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

const WHATSAPP_NUMBER = "0956685641"; // نفس الرقم المستخدم بالفوتر

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { error } = await supabase.from("messages").insert({
      name: form.name,
      phone: form.phone,
      message: form.message,
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("sent");
      setForm({ name: "", phone: "", message: "" });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2>تواصل معنا</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="اكتب رسالتك..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "جارِ الإرسال..." : "إرسال الرسالة"}
          </button>
        </form>

        {status === "sent" && <p style={{ textAlign: "center", marginTop: 16 }}>تم إرسال رسالتك بنجاح، رح نتواصل معك قريباً!</p>}
        {status === "error" && <p style={{ textAlign: "center", marginTop: 16, color: "red" }}>صار خطأ، حاول مرة ثانية أو تواصل معنا مباشرة عبر واتساب.</p>}

        <p style={{ textAlign: "center", marginTop: 30 }}>
          أو تواصل مباشرة عبر واتساب:{" "}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
            اضغط هون
          </a>
        </p>
      </div>
    </section>
  );
}
