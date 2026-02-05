import { Eye, EyeOff, Shield, Lock } from 'lucide-react';
import { GlassMorphCard } from '@/components/GlassMorphCard';
import { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
  onSwitchToRegister: () => void;
}

export function LoginScreen({ onLogin, onSwitchToRegister }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Illustration/Info */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Your Health,
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Voice First.
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              AI-powered pharmacy designed for safety, independence, and peace of mind.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                <Shield size={24} className="text-teal-400" />
              </div>
              <span className="text-lg text-gray-300">HIPAA Compliant & Encrypted</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                <Lock size={24} className="text-indigo-400" />
              </div>
              <span className="text-lg text-gray-300">Your Health Data is Protected</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <GlassMorphCard className="p-10">
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-bold text-white">Secure Login</h2>
              <p className="text-lg text-gray-400">Welcome back to your health companion</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email/Phone Input */}
              <div className="space-y-3">
                <label className="text-base font-medium text-gray-300 block">
                  Email or Phone
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email or phone"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="space-y-3">
                <label className="text-base font-medium text-gray-300 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-indigo-500/50"
              >
                Secure Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-400 bg-transparent">or</span>
              </div>
            </div>

            {/* Register Link */}
            <button
              onClick={onSwitchToRegister}
              className="w-full py-4 rounded-xl border-2 border-white/10 hover:border-white/20 text-white font-medium text-lg transition-all duration-300 hover:bg-white/5"
            >
              Create Account
            </button>

            {/* Security Badge */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                <Shield size={16} className="text-teal-400" />
                <span>Voice biometric ready · HIPAA-grade security</span>
              </p>
            </div>
          </div>
        </GlassMorphCard>
      </div>
    </div>
  );
}
