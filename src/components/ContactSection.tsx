import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — hook up to a backend or email service
    alert("Thanks for your message! (This is a placeholder — connect to your backend.)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-primary relative halftone" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display inline-block bg-card text-card-foreground px-6 py-2 comic-border-thick comic-shadow rotate-[-1deg]">
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-card comic-border-thick comic-shadow-lg p-8 space-y-5"
          >
            <div>
              <label className="font-display text-lg text-card-foreground block mb-1">NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full comic-border p-3 font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="font-display text-lg text-card-foreground block mb-1">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full comic-border p-3 font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-display text-lg text-card-foreground block mb-1">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full comic-border p-3 font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground comic-border-thick comic-shadow px-6 py-4 font-display text-xl flex items-center justify-center gap-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Send className="w-5 h-5" />
              SEND MESSAGE
            </button>
          </motion.form>

          {/* Contact info side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="speech-bubble bg-card max-w-sm">
              <p className="font-body text-card-foreground text-lg italic">
                "Let's create the next generation of interactive experiences."
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 bg-card comic-border comic-shadow-sm p-4 font-body text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors group"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">your.email@example.com</span>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card comic-border comic-shadow-sm p-4 font-body text-card-foreground hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-semibold">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card comic-border comic-shadow-sm p-4 font-body text-card-foreground hover:bg-foreground hover:text-background transition-colors group"
              >
                <Github className="w-6 h-6" />
                <span className="font-semibold">GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
