import { useState } from "react";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "email",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          contact_method: formData.contactMethod,
        },
      ]);

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactMethod: "email",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Build Something Great</h3>
            <p className="text-foreground/70 mb-8">
              Whether you have a project in mind or just want to learn more about our
              services, we'd love to hear from you. Fill out the form and we'll respond
              as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-foreground/70">hello@ezzywebs.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-foreground/70">+254 728 135 200</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-foreground/70 hover:text-primary"
                    onClick={() => window.open("https://wa.me/254728135200", "_blank")}
                  >
                    <FaWhatsapp className="w-8 h-8 text-green-500" />
                    Chat with us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Preferred Contact Method</Label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, contactMethod: value })
                  }
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-method" />
                    <Label htmlFor="email-method">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp-method" />
                    <Label htmlFor="whatsapp-method">WhatsApp</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
