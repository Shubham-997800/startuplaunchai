import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import { useApp } from '../../context/AppContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/generate', label: 'Generate' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/history', label: 'History' },
];

export default function Navbar() {
  const location = useLocation();
  const { state, toggleTheme } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-brand-600 to-frost">
              <Rocket size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold text-surface-50 group-hover:text-gradient transition-all">
              StartupLaunch AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                  location.pathname === link.to
                    ? 'text-surface-50'
                    : 'text-surface-400 hover:text-surface-200'
                }`}
              >
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute inset-0 rounded-xl bg-surface-800/80 border border-surface-600/50"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-surface-800 text-surface-400 hover:text-surface-200 transition-all cursor-pointer"
              title={`Switch to ${state.theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {state.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/generate">
              <Button size="sm" icon={Rocket}>New Startup</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-surface-800 text-surface-400 hover:text-surface-200 transition-all cursor-pointer"
            >
              {state.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-2 rounded-xl hover:bg-surface-800 text-surface-400 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-surface-700/50 px-4 py-4 space-y-2"
        >
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-surface-800 text-surface-50'
                  : 'text-surface-400 hover:text-surface-200 hover:bg-surface-800/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/generate" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-2" size="sm">New Startup</Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
