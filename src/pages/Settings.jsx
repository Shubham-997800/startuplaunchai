import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, Moon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'region', label: 'Region', icon: Globe },
];

export default function Settings() {
  const addToast = useToast();
  const [activeSection, setActiveSection] = useState('profile');

  const handleSave = () => {
    addToast('Settings saved successfully', 'success');
  };

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-50 mb-1">Settings</h1>
          <p className="text-surface-400 mb-8">Manage your account preferences</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-56 shrink-0">
            <Card className="p-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    activeSection === section.id
                      ? 'bg-brand-600/20 text-brand-400 border border-brand-500/20'
                      : 'text-surface-400 hover:text-surface-200 hover:bg-surface-800/50'
                  }`}
                >
                  <section.icon size={16} />
                  {section.label}
                </button>
              ))}
            </Card>
          </div>

          <div className="flex-1">
            <Card>
              {activeSection === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-surface-50">Profile</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-surface-300 mb-1.5">Full Name</label>
                      <input className="w-full rounded-xl border border-surface-700 bg-surface-900/50 px-4 py-2.5 text-sm text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50" defaultValue="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-surface-300 mb-1.5">Email</label>
                      <input className="w-full rounded-xl border border-surface-700 bg-surface-900/50 px-4 py-2.5 text-sm text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50" defaultValue="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-1.5">Bio</label>
                    <textarea className="w-full rounded-xl border border-surface-700 bg-surface-900/50 px-4 py-2.5 text-sm text-surface-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none" rows={3} defaultValue="Startup enthusiast and AI researcher." />
                  </div>
                  <Button onClick={handleSave}>Save Changes</Button>
                </div>
              )}

              {activeSection === 'appearance' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-surface-50">Appearance</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-surface-800/30 border border-surface-800/50">
                      <div className="flex items-center gap-3">
                        <Moon size={18} className="text-surface-400" />
                        <div>
                          <p className="text-sm font-medium text-surface-50">Dark Mode</p>
                          <p className="text-xs text-surface-400">Currently using dark theme</p>
                        </div>
                      </div>
                      <div className="w-10 h-6 rounded-full bg-brand-600 relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {(activeSection === 'notifications' || activeSection === 'security' || activeSection === 'region') && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-surface-50 capitalize">{activeSection}</h2>
                  <p className="text-sm text-surface-400">This section is coming soon.</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
