import { Code2, Rocket, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Modern Technologies",
      description: "We use cutting-edge frameworks and tools to build fast, scalable applications.",
    },
    {
      icon: Rocket,
      title: "Performance First",
      description: "Optimized for speed and efficiency, ensuring the best user experience.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with you throughout the entire development process.",
    },
    {
      icon: Zap,
      title: "Quick Delivery",
      description: "Rapid development cycles without compromising on quality or functionality.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Ezzy Webs</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We're a team of passionate developers and designers dedicated to creating
            exceptional web experiences that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:bg-card/70 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            At Ezzy Webs, we believe that every business deserves a powerful online presence.
            Our team combines technical expertise with creative design to deliver solutions
            that not only look great but also drive real results.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Whether you're a startup looking to make your mark or an established business
            ready to scale, we have the skills and experience to bring your vision to life.
            Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
