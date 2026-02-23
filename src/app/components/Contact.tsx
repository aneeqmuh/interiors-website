import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xvzbvojk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowSuccessPopup(true);
    } catch (error) {
      console.error(error);
      setSubmitError("We could not send your inquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C3E50] mb-6 tracking-[0.1em]">
            Let's Connect
          </h2>
          <p className="text-lg text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space into a sophisticated sanctuary? Begin your design journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[#DDD5C7]/30 p-10">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xvzbvojk"
              method="POST"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#2C3E50] mb-3 tracking-wide uppercase text-sm">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#2C3E50] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#2C3E50] mb-3 tracking-wide uppercase text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#2C3E50] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#2C3E50] mb-3 tracking-wide uppercase text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#2C3E50] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-[#2C3E50] mb-3 tracking-wide uppercase text-sm">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#2C3E50] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2C3E50] text-[#DDD5C7] px-10 py-4 text-sm hover:bg-[#1A2530] transition-all tracking-[0.15em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
              {submitError && (
                <p className="mt-4 text-sm text-[#9B2C2C]">{submitError}</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-serif text-[#2C3E50] mb-8 tracking-wide">
                Get In Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#2C3E50] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#DDD5C7]" />
                  </div>
                  <div>
                    <h4 className="text-[#2C3E50] mb-2 tracking-wide uppercase text-sm">Phone</h4>
                    <p className="text-[#2C3E50]/80 text-lg">+971 505095426</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#2C3E50] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#DDD5C7]" />
                  </div>
                  <div>
                    <h4 className="text-[#2C3E50] mb-2 tracking-wide uppercase text-sm">Email</h4>
                    <p className="text-[#2C3E50]/80 text-lg">Geminiusa21@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-[#1A2530]/45 backdrop-blur-[2px]"
            onClick={() => setShowSuccessPopup(false)}
          />
          <div className="relative w-full max-w-xl bg-[#E5DED1] border border-[#2C3E50]/20 shadow-2xl p-10 text-center">
            <div className="w-16 h-[2px] bg-[#2C3E50]/40 mx-auto mb-6" />
            <h3 className="text-4xl font-serif text-[#2C3E50] mb-4 tracking-wide">
              Inquiry Received
            </h3>
            <p className="text-[#2C3E50]/80 text-lg leading-relaxed mb-8">
              We will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="bg-[#2C3E50] text-[#DDD5C7] px-8 py-3 text-sm hover:bg-[#1A2530] transition-all tracking-[0.12em] uppercase"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
