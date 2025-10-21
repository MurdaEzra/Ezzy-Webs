import { useEffect, useState } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular: boolean;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data) {
        setServices(data);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-foreground/60">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All plans include
            responsive design, modern technologies, and dedicated support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-effect rounded-2xl p-8 relative ${
                service.popular
                  ? "border-2 border-primary shadow-xl shadow-primary/20 scale-105"
                  : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gradient">
                    Ksh.{service.price}
                  </span>
                  <span className="text-foreground/60">/ project</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  service.popular
                    ? "bg-gradient-to-r from-primary to-secondary"
                    : "bg-primary/10 hover:bg-primary/20 text-foreground"
                }`}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
