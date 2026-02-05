import { Eye, EyeOff, Shield, CheckCircle2 } from 'lucide-react';
import { GlassMorphCard } from '@/components/GlassMorphCard';
import { useState } from 'react';

interface RegisterScreenProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

export function RegisterScreen({ onRegister, onSwitchToLogin }: RegisterScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCaregiver, setIsCaregiver] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Info */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Join the Future of
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Healthcare.
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Start your journey to safer, smarter medication management.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-teal-400" />
              <span className="text-lg text-gray-300">Voice-first ordering</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-teal-400" />
              <span className="text-lg text-gray-300">AI safety verification</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-teal-400" />
              <span className="text-lg text-gray-300">Caregiver connection</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-teal-400" />
              <span className="text-lg text-gray-300">Real-time health tracking</span>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <GlassMorphCard className="p-10">
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-bold text-white">Create Account</h2>
              <p className="text-lg text-gray-400">Encrypted. Private. Protected.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300 block">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300 block">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Create a secure password"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Caregiver Toggle */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <input
                  type="checkbox"
                  id="caregiver"
                  checked={isCaregiver}
                  onChange={(e) => setIsCaregiver(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0"
                />
                <label htmlFor="caregiver" className="text-base text-gray-300 cursor-pointer">
                  Register as Caregiver
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-teal-500/50"
              >
                Create Secure Account
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-2">
              <button
                onClick={onSwitchToLogin}
                className="text-base text-gray-400 hover:text-white transition-colors"
              >
                Already have an account? <span className="text-indigo-400 font-medium">Login</span>
              </button>
            </div>

            {/* Security Info */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                <Shield size={16} className="text-teal-400" />
                <span>Encrypted · Private · Protected</span>
              </p>
            </div>
          </div>
        </GlassMorphCard>
      </div>
    </div>
  );
}
