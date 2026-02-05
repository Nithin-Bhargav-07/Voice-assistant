import { GlassMorphCard } from '@/components/GlassMorphCard';
import { Users, Bell, AlertCircle, Package, TrendingUp, Phone } from 'lucide-react';

export function CaregiverScreen() {
  const recentOrders = [
    { id: '1', item: 'Paracetamol 650mg', date: '2 days ago', status: 'Delivered' },
    { id: '2', item: 'Metformin 500mg', date: '5 days ago', status: 'Delivered' },
    { id: '3', item: 'Smart BP Monitor', date: '1 week ago', status: 'Delivered' }
  ];

  const alerts = [
    { id: '1', type: 'info', message: 'Medicine refill due in 3 days', priority: 'normal' },
    { id: '2', type: 'warning', message: 'Unusual spending pattern detected', priority: 'medium' }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pb-32">
      <div className="max-w-5xl mx-auto px-6 pt-16 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <Users size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white">Caregiver Dashboard</h1>
          <p className="text-xl text-gray-300">
            Monitor health and support with confidence
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassMorphCard hover className="p-6">
            <button className="w-full text-left space-y-4">
              <div className="flex items-center justify-between">
                <Phone size={32} className="text-teal-400" />
                <div className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30">
                  <span className="text-sm text-teal-300 font-medium">Active</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Remote Assist</h3>
                <p className="text-lg text-gray-300">Help them place an order remotely</p>
              </div>
            </button>
          </GlassMorphCard>

          <GlassMorphCard hover className="p-6">
            <button className="w-full text-left space-y-4">
              <div className="flex items-center justify-between">
                <Bell size={32} className="text-indigo-400" />
                <div className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30">
                  <span className="text-sm text-rose-300 font-medium">2 New</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Alerts & Notifications</h3>
                <p className="text-lg text-gray-300">Review important updates</p>
              </div>
            </button>
          </GlassMorphCard>
        </div>

        {/* Alerts Section */}
        <GlassMorphCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <AlertCircle size={28} className="text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Active Alerts</h2>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-5 rounded-xl border ${
                    alert.priority === 'medium'
                      ? 'bg-amber-500/10 border-amber-400/30'
                      : 'bg-indigo-500/10 border-indigo-400/30'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <AlertCircle
                        size={24}
                        className={alert.priority === 'medium' ? 'text-amber-400' : 'text-indigo-400'}
                      />
                      <div>
                        <p className="text-lg text-white font-medium">{alert.message}</p>
                        <p className="text-sm text-gray-400 mt-1">
                          Priority: {alert.priority}
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassMorphCard>

        {/* Recent Orders */}
        <GlassMorphCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <Package size={28} className="text-teal-400" />
              <h2 className="text-2xl font-bold text-white">Recent Orders</h2>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{order.item}</h3>
                    <p className="text-base text-gray-400 mt-1">{order.date}</p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30">
                    <span className="text-sm text-teal-300 font-medium">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassMorphCard>

        {/* Health Insights */}
        <GlassMorphCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <TrendingUp size={28} className="text-violet-400" />
              <h2 className="text-2xl font-bold text-white">Health Insights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-white">12</p>
                <p className="text-base text-gray-400">Medicines Taken</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-white">95%</p>
                <p className="text-base text-gray-400">Adherence Rate</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-white">3</p>
                <p className="text-base text-gray-400">Missed Doses</p>
              </div>
            </div>
          </div>
        </GlassMorphCard>

        {/* Support Note */}
        <div className="text-center text-gray-400 text-base">
          <p>Supporting with care, respecting independence.</p>
        </div>
      </div>
    </div>
  );
}
