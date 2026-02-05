import { GlassMorphCard } from '@/components/GlassMorphCard';
import { ShoppingCart, CreditCard, Mic, Shield, CheckCircle2 } from 'lucide-react';

export function CheckoutScreen() {
  const cartItems = [
    {
      id: '1',
      name: 'Paracetamol 650mg',
      quantity: 2,
      price: 4.99,
      emoji: '💊'
    },
    {
      id: '2',
      name: 'Smart Bluetooth BP Monitor',
      quantity: 1,
      price: 49.99,
      emoji: '🩺'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pb-32">
      <div className="max-w-5xl mx-auto px-6 pt-16 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Secure Checkout</h1>
          <p className="text-xl text-gray-300">
            Review your order and complete payment
          </p>
        </div>

        {/* Order Summary */}
        <GlassMorphCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <ShoppingCart size={28} className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Order Summary</h2>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{item.emoji}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-base text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between text-lg text-gray-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-300">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-white pt-4 border-t border-white/10">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </GlassMorphCard>

        {/* Voice Confirmation */}
        <GlassMorphCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mic size={28} className="text-teal-400" />
              <h2 className="text-2xl font-bold text-white">Voice Confirmation</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Confirm your order using voice authentication for faster, safer checkout.
            </p>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-teal-500/50">
              Confirm with Voice
            </button>
          </div>
        </GlassMorphCard>

        {/* Payment Method */}
        <GlassMorphCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <CreditCard size={28} className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Payment Method</h2>
            </div>

            {/* Card Details */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300 block">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-300 block">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-300 block">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-lg placeholder:text-gray-500 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassMorphCard>

        {/* Complete Order Button */}
        <button className="w-full py-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-indigo-500/50">
          Complete Order - ${total.toFixed(2)}
        </button>

        {/* Security Badge */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <Shield size={20} className="text-teal-400" />
            <span className="text-base">Banking-level encryption</span>
            <CheckCircle2 size={20} className="text-teal-400" />
            <span className="text-base">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
