import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaBullhorn, FaBookOpen, FaVideo, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Inquiry',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Harap isi semua kolom input!' });
      return;
    }
    // Simulate API call
    setStatus({ type: 'success', message: 'Pesan Anda berhasil dikirim!' });
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'New Project Inquiry', message: '' });
      setStatus({ type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-black text-text-primary leading-tight">
          Let's Build <span className="text-accent gradient-text">Something Great</span>
        </h1>
        <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
          Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or partnerships.
        </p>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Contact Information & Visual Card) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Contact Information */}
          <div className="bg-bg-secondary border border-border rounded-3xl p-8 space-y-6 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-black text-text-primary">Contact Information</h2>

            <div className="space-y-4">
              {/* Email Link block */}
              <a 
                href="mailto:dwianggara1412@gmail.com" 
                className="flex items-center gap-4 p-4 bg-bg-primary/50 hover:bg-bg-primary border border-border/60 hover:border-accent/40 rounded-2xl transition-all group"
              >
                <div className="p-3.5 bg-accent-soft text-accent rounded-full border border-accent/15 group-hover:scale-105 transition-transform">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Email Me</p>
                  <p className="text-sm sm:text-base font-bold text-text-primary group-hover:text-accent transition-colors">dwianggara1412@gmail.com</p>
                </div>
              </a>

              {/* Location block */}
              <div 
                className="flex items-center gap-4 p-4 bg-bg-primary/50 border border-border/60 rounded-2xl"
              >
                <div className="p-3.5 bg-slate-500/10 text-slate-500 rounded-full border border-slate-500/10">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm sm:text-base font-bold text-text-primary">Banyuwangi, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Follow My Work section */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Follow My Work</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="p-3 bg-bg-primary hover:bg-accent-soft text-text-secondary hover:text-accent border border-border rounded-xl transition-all hover:-translate-y-0.5"
                  aria-label="Speaker"
                >
                  <FaBullhorn className="text-base" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-bg-primary hover:bg-accent-soft text-text-secondary hover:text-accent border border-border rounded-xl transition-all hover:-translate-y-0.5"
                  aria-label="Journal"
                >
                  <FaBookOpen className="text-base" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-bg-primary hover:bg-accent-soft text-text-secondary hover:text-accent border border-border rounded-xl transition-all hover:-translate-y-0.5"
                  aria-label="Media"
                >
                  <FaVideo className="text-base" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Visual Card (Image + Overlay text) */}
          <div className="relative rounded-3xl overflow-hidden border border-border aspect-[16/10] lg:aspect-[4/3] bg-slate-100 shadow-xs group">
            <img 
              src="./laptop-desk-sunset.png" 
              alt="Laptop at Sunset" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            {/* Subtle dark gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed drop-shadow-sm">
                Always available for global remote collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Send a Message Form Card) */}
        <div className="lg:col-span-7">
          <div className="bg-bg-secondary border border-border rounded-3xl p-8 space-y-6 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-black text-text-primary">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-text-secondary">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Email Address Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-text-secondary">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Subject Select Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-text-secondary">Subject</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="New Project Inquiry">New Project Inquiry</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Freelance Project">Freelance Project</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-muted">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-text-secondary">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-bold ${
                  status.type === 'success' 
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/15' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/15'
                }`}>
                  {status.message}
                </div>
              )}

              {/* Send Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base"
                >
                  <span>SEND MESSAGE</span>
                  <FaPaperPlane className="text-xs sm:text-sm" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
