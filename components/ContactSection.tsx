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
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-6xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
              Get In Touch
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-5 sm:mb-6 md:mb-8">
              Have a project in mind or want to discuss opportunities? Drop me a
              message and I&apos;ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors"
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
                  className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors"
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
                className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors"
                required
                disabled={isSubmitting}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                rows={5}
                className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-xl border-2 border-[var(--border-color)] focus:border-[var(--accent-color)] outline-none transition-colors resize-none"
                required
                disabled={isSubmitting}
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-[var(--accent-color)] text-[var(--button-text)] rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div
            className="p-5 sm:p-6 md:p-8 lg:p-10 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl"
            style={{ border: "2px solid var(--sidebar-border)" }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Contact Info
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 md:mb-10">
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello. I&apos;m always excited to connect with fellow
              developers and potential clients.
            </p>

            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
              <div className="p-2.5 sm:p-3 md:p-4 bg-[var(--bg-hover)] rounded-full flex-shrink-0">
                <MapPin
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--accent-color)]"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                  Our Location
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)]">
                  Mysore, Karnataka
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)]">
                  India, 570001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
              <div className="p-2.5 sm:p-3 md:p-4 bg-[var(--bg-hover)] rounded-full flex-shrink-0">
                <Phone
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--accent-color)]"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                  Phone Number
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)]">
                  +91 8746937048
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 md:p-4 bg-[var(--bg-hover)] rounded-full flex-shrink-0">
                <Mail
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--accent-color)]"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                  Email Address
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] break-all">
                  mahimaaamurali@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification - Bottom Left Position */}
      {toast.show && (
        <div className="fixed right-4 sm:right-6 lg:right bottom-4 sm:bottom-6 z-50 animate-slide-up max-w-[calc(100vw-2rem)] sm:max-w-md">
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] backdrop-blur-sm">
            {toast.type === "success" ? (
              <CheckCircle
                size={20}
                className="sm:w-6 sm:h-6 flex-shrink-0 text-[var(--accent-color)]"
              />
            ) : (
              <AlertCircle
                size={20}
                className="sm:w-6 sm:h-6 flex-shrink-0 text-red-500"
              />
            )}
            <p className="text-xs sm:text-sm md:text-base font-medium text-[var(--text-primary)]">
              {toast.message}
            </p>
            <button
              onClick={() => setToast({ ...toast, show: false })}
              className="ml-1 sm:ml-2 hover:opacity-70 transition-opacity text-[var(--text-secondary)] flex-shrink-0"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
