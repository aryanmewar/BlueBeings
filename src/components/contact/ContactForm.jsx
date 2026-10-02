import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import Button from '@/components/common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '3D / WebGL Experience',
    budget: '$25k - $50k',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    '3D / WebGL Experience',
    'Brand Identity & Systems',
    'Full Web Development',
    'Cinematic Motion / CGI',
    'Social Campaign Art',
  ];

  const budgetRanges = [
    '< $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k+',
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
        projectType: '3D / WebGL Experience',
        budget: '$25k - $50k',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-16 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-3xl font-extrabold uppercase text-slate-100">
              TRANSMISSION RECEIVED
            </h3>
            <p className="text-slate-400 max-w-md mx-auto text-base font-light">
              Thank you for reaching out. Our executive creative team will review your project brief and respond within 24 hours.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest pt-4 block mx-auto underline"
            >
              SEND ANOTHER MESSAGE
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                  YOUR NAME <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className={`w-full bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                  } rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm`}
                />
                {errors.name && (
                  <p className="font-mono text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                  EMAIL ADDRESS <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className={`w-full bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                  } rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm`}
                />
                {errors.email && (
                  <p className="font-mono text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                COMPANY / ORGANISATION
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Aether Dynamics"
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
              />
            </div>

            {/* Project Type Select */}
            <div className="space-y-3">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                PROJECT TYPE
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`font-mono text-xs px-4 py-2 rounded-full border transition-all ${
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

            {/* Budget Range Select */}
            <div className="space-y-3">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                ESTIMATED BUDGET (USD)
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: range })}
                    className={`font-mono text-xs px-4 py-2 rounded-full border transition-all ${
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
            <div className="space-y-2">
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider">
                PROJECT BRIEF & VISION <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your objectives, timeline, and key requirements..."
                className={`w-full bg-white/5 border ${
                  errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                } rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-none`}
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
              size="lg"
              disabled={isSubmitting}
              className="w-full text-center justify-center py-4"
            >
              {isSubmitting ? 'TRANSMITTING BRIEF...' : 'INITIATE PROJECT CONVERSATION'}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
