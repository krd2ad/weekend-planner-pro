import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    groupSize: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", type: "", groupSize: "", destination: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3 bg-card border border-border text-foreground font-sans placeholder:text-muted-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
            <p className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Let's start planning</h1>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-sans font-semibold mb-2 text-foreground">Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-sans font-semibold mb-2 text-foreground">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-sans font-semibold mb-2 text-foreground">Inquiry Type *</label>
              <select name="type" required value={formData.type} onChange={handleChange} className={inputClass}>
                <option value="">Select an option</option>
                <option value="planning">Planning Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-sans font-semibold mb-2 text-foreground">Group Size</label>
                <input type="text" name="groupSize" value={formData.groupSize} onChange={handleChange} placeholder="e.g., 8-12 people" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-sans font-semibold mb-2 text-foreground">Preferred Destination</label>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Nashville, Miami" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-sans font-semibold mb-2 text-foreground">Tell Us More *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the bride, the vibe you're going for, dates you're considering, and anything else we should know..."
                className={inputClass + " resize-none"}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
