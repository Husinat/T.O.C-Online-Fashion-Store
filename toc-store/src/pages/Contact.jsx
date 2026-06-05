// ─────────────────────────────────────────────
//  Contact Page – TOC The Ola Collection
// ─────────────────────────────────────────────
import { useState } from 'react';
import { SectionLabel, Button } from '../components/UI';
import { sendEmail } from '../utils/sendEmail';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      await sendEmail(form);

      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Email error:', error);
      alert('Message failed to send. Try again.');
    }
    finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-toc-linen">
      {/* Header */}
      <div className="pt-28 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionLabel>Get in touch</SectionLabel>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-toc-charcoal">Contact</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="font-sans text-xs tracking-widests uppercase text-toc-gold mb-4">
                Customer Care
              </p>
              <p className="font-sans text-sm text-toc-taupe leading-relaxed">
                We aim to respond within 24 hours on business days. For urgent enquiries, please reach us directly.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'huswatolamide@gmail.com' },
                { label: 'WhatsApp', value: '+234 70 39 54 19 12' },
                { label: 'Hours', value: 'Mon – Fri, 9am – 6pm WAT' },
                { label: 'Location', value: 'Lagos, Nigeria' },
              ].map(({ label, value }) => (
                <div key={label} className="border-b border-toc-sand pb-4">
                  <p className="font-sans text-[9px] tracking-widests uppercase text-toc-gold mb-1">
                    {label}
                  </p>
                  <p className="font-sans text-sm text-toc-charcoal">{value}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="font-sans text-xs tracking-widests uppercase text-toc-gold mb-4">
                Follow us
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-toc-taupe hover:text-toc-charcoal transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-toc-gold text-xs">→</span>
                  Instagram
                </a>

                <a
                  href="https://x.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-toc-taupe hover:text-toc-charcoal transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-toc-gold text-xs">→</span>
                  Twitter / X
                </a>

                <a
                  href="https://wa.me/2347039541912?text=Hello%20TOC%20%E2%9C%A8%0A%0AI%20just%20visited%20your%20website%20and%20I'm%20interested%20in%20placing%20an%20order.%20I'd%20love%20to%20get%20more%20information%20about%20your%20products%20and%20availability.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-toc-taupe hover:text-toc-charcoal transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-toc-gold text-xs">→</span>
                  WhatsApp
                </a>

                <a
                  href="https://tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-toc-taupe hover:text-toc-charcoal transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-toc-gold text-xs">→</span>
                  TikTok
                </a>
              </div>



            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center gap-6">
                <div className="w-16 h-16 border border-toc-gold flex items-center justify-center">
                  <span className="text-toc-gold text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-toc-charcoal mb-2">Message sent</h3>
                  <p className="font-sans text-sm text-toc-taupe">
                    Thank you for reaching out. We will be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block font-sans text-[10px] tracking-widests uppercase text-toc-taupe mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full px-4 py-3.5 bg-toc-cream border border-toc-sand font-sans text-sm text-toc-charcoal placeholder-toc-clay focus:outline-none focus:border-toc-taupe transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-widests uppercase text-toc-taupe mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-toc-cream border border-toc-sand font-sans text-sm text-toc-charcoal focus:outline-none focus:border-toc-taupe transition-colors">
                    <option value="">Select a topic</option>
                    <option>Order Enquiry</option>
                    <option>Product Question</option>
                    <option>Returns & Exchanges</option>
                    <option>Wholesale / Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-widests uppercase text-toc-taupe mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 bg-toc-cream border border-toc-sand font-sans text-sm text-toc-charcoal placeholder-toc-clay focus:outline-none focus:border-toc-taupe transition-colors resize-none"
                  />
                </div>

                <Button type="submit"size="lg"fullWidth disabled={sending}>
                {sending ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
