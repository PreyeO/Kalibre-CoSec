import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero text-[#1E2A38] gap-2 px-[80px] flex flex-col items-center text-center mt-[50px] justify-center">
      {/* Animated "Coming Soon" text */}
      <motion.h1
        className="font-bold text-8xl leading-[1.3] bg-gradient-to-r from-[#1E2A38] via-[#0077B6] to-[#00A896] bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Coming Soon!
      </motion.h1>

      <p className="w-[500px] text-lg font-normal text-[#1E2A38]">
        We're making corporate governance, ESG, and compliance simpler for
        businesses, startups, and investors.
      </p>

      {/* New question for smoother message flow */}
      <p className="mt-4 text-lg font-medium text-[#1E2A38]">
        Want to be the first to know when we launch?
      </p>

      {/* Animated Signup Form */}
      <motion.form
        className="mt-4 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Input Field with Focus Animation */}
        <motion.input
          type="email"
          placeholder="Enter your email"
          required
          className="px-4 py-3 w-64 border rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none"
          whileFocus={{ scale: 1.05 }}
        />

        {/* Button with Hover and Click Effects */}
        <motion.button
          type="submit"
          className="cursor-pointer px-6 py-3 bg-[#1E2A38] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#C4A15A]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Notified
        </motion.button>
      </motion.form>

      {/* Contact & Socials */}
      <div className="mt-8 text-[#1E2A38] flex flex-col items-center">
        <p>
          📩 For inquiries, reach us at{" "}
          <a
            href="mailto:info@kalibrecosec.org"
            className="text-[#0077B6] font-semibold"
          >
            info@kalibrecosec.org
          </a>
        </p>
        <p className="mt-2">
          Follow us on:
          <a
            href="https://linkedin.com/company/kalibreco"
            className="ml-2 text-[#0077B6] font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
