import { useState } from "react";
import { Mail, Linkedin, Phone, Send, MapPin, ArrowUpRight, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "deviabitha@gmail.com", href: "mailto:deviabitha@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/devi-abitha-p-t", href: "https://www.linkedin.com/in/devi-abitha-p-t", external: true },
  { icon: Phone, label: "Phone", value: "+91-6382455092", href: "tel:+916382455092" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: undefined },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_4p6pedo",
        "template_vj1h2hd",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "wj899psQzH8PnxRPm"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setTimeout(() => setSent(false), 3000);
    } catch {
      toast({ title: "Failed to send", description: "Please try again or email directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-medium text-sm">Contact</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info side */}
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              const linkProps = item.href
                ? { href: item.href, ...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                : {};

              return (
                <Wrapper
                  key={item.label}
                  {...(linkProps as any)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors shrink-0">
                    <item.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium truncate">{item.value}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight size={14} className="text-muted-foreground ml-auto shrink-0 group-hover:text-primary transition-colors" />
                  )}
                </Wrapper>
              );
            })}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-card rounded-2xl border border-border/50 p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
            >
              {sending ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle size={16} /> Sent!</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
