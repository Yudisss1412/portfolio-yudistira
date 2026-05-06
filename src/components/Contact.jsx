import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { name: 'GitHub', url: contact.github, icon: '🐙' },
    { name: 'LinkedIn', url: contact.linkedin, icon: '💼' },
    { name: 'Twitter', url: contact.twitter, icon: '🐦' },
    { name: 'Email', url: `mailto:${contact.email}`, icon: '📧' },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-4"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted mb-12"
        >
          Have a project in mind? Let's create something amazing together!
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-dark/50 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-2">{link.icon}</div>
              <div className="font-medium text-dark dark:text-light">{link.name}</div>
            </a>
          ))}
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Say Hello 👋
          </a>
        </motion.div>
      </div>
    </section>
  );
}
