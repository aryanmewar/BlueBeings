import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website Design',
    budget: '₹15,000 - ₹35,000',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Website Design',
    'Logo Design & Branding',
    'Graphic & Visual Design',
    'Video Editing & Motion',
    'Social Media Management',
    'Wedding & Event Video',
  ];

  const budgetRanges = [
    '< ₹15,000',
    '₹15,000 - ₹35,000',
    '₹35,000 - ₹75,000',
    '₹75,000+',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide brief project details';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Website Design',
        budget: '₹15,000 - ₹35,000',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="relative glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12 space-y-5"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-extrabold uppercase text-slate-100">
              MESSAGE RECEIVED
            </h3>
            <p className="text-slate-400 max-w-md mx-auto text-sm font-light">
              Thank you for reaching out. Our team will review your project requirements and connect with you on WhatsApp / Email within 24 hours.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest pt-3 block mx-auto underline"
            >
              SEND ANOTHER MESSAGE
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                  YOUR NAME <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                  } rounded-xl px-3.5 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm`}
                />
                {errors.name && (
                  <p className="font-mono text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                  EMAIL ADDRESS <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@example.com"
                  className={`w-full bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                  } rounded-xl px-3.5 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm`}
                />
                {errors.email && (
                  <p className="font-mono text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Company / Brand */}
            <div className="space-y-1.5">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                BRAND / COMPANY NAME
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. My Brand / Studio"
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
              />
            </div>

            {/* Project Type Select */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                REQUIRED SERVICE
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                      formData.projectType === type
                        ? 'bg-cyan-400 text-black font-semibold border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-cyan-400/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range Select (INR / ₹) */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                ESTIMATED BUDGET (INR / ₹)
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: range })}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                      formData.budget === range
                        ? 'bg-cyan-400 text-black font-semibold border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-cyan-400/50'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                PROJECT DETAILS & REQUIREMENTS <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe what you are looking to build or design..."
                className={`w-full bg-white/5 border ${
                  errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                } rounded-xl px-3.5 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-none`}
              />
              {errors.message && (
                <p className="font-mono text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="w-full text-center justify-center py-3.5"
            >
              {isSubmitting ? 'SENDING INQUIRY...' : 'SUBMIT PROJECT BRIEF'}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
