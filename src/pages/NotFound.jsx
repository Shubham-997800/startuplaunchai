import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Rocket } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex p-4 rounded-2xl bg-surface-800/50 border border-surface-700/50 mb-6">
            <Search size={48} className="text-surface-500" />
          </div>
          <h1 className="text-6xl font-bold text-surface-50 mb-2">404</h1>
          <p className="text-xl font-semibold text-surface-200 mb-2">Page not found</p>
          <p className="text-sm text-surface-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/">
              <Button variant="secondary" icon={Home}>Go Home</Button>
            </Link>
            <Link to="/generate">
              <Button icon={Rocket}>Generate Startup</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
