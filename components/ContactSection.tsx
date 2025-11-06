"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, X, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type, message: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fetch credentials from environment variables
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS credentials are not configured");
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        time: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        }),
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      showToast(
        "success",
        "Message sent successfully! I'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast(
        "error",
        "Failed to send message. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-6xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8">
              Have a project in mind or want to discuss opportunities? Drop me a
              message and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors"
                required
                disabled={isSubmitting}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                rows={6}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors resize-none"
                required
                disabled={isSubmitting}
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base bg-[var(--accent-color)] text-[var(--button-text)] rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          {/* Right Column - Contact Form */}
          <div
            className="p-6 sm:p-8 lg:p-10 bg-[var(--bg-secondary)] rounded-2xl sm:rounded-3xl shadow-2xl"
            style={{ border: "2px solid var(--sidebar-border)" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Contact Info
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 sm:mb-10">
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello. I'm always excited to connect with fellow
              developers and potential clients.
            </p>

            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-[var(--bg-hover)] rounded-full flex-shrink-0">
                <MapPin
                  size={20}
                  className="sm:w-6 sm:h-6 text-[var(--accent-color)]"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  Our Location
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                  Mysore, Karnataka
                </p>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                  India, 570001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-[var(--bg-hover)] rounded-full flex-shrink-0">
                <Phone
                  size={20}
                  className="sm:w-6 sm:h-6 text-[var(--accent-color)]"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  Phone Number
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                  +91 8746937048
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-[var(--bg-hover)] rounded-full flex-shrink-0">
                <Mail
                  size={20}
                  className="sm:w-6 sm:h-6 text-[var(--accent-color)]"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  Email Address
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] break-all">
                  mahimaaamurali@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification - Left Side */}
      {toast.show && (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 animate-slide-in">
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] backdrop-blur-sm">
            {toast.type === "success" ? (
              <CheckCircle
                size={24}
                className="flex-shrink-0 text-[var(--accent-color)]"
              />
            ) : (
              <AlertCircle size={24} className="flex-shrink-0 text-red-500" />
            )}
            <p className="text-sm sm:text-base font-medium max-w-xs text-[var(--text-primary)]">
              {toast.message}
            </p>
            <button
              onClick={() => setToast({ ...toast, show: false })}
              className="ml-2 hover:opacity-70 transition-opacity text-[var(--text-secondary)]"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
