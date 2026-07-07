import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, Rocket, TrendingUp, Filter } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Skeleton from '../components/ui/Skeleton';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { startupApi } from '../services/api';
import { useToast } from '../components/ui/Toast';

const scoreColor = (score) => {
  if (score >= 80) return 'green';
  if (score >= 60) return 'amber';
  return 'red';
};

export default function History() {
  const addToast = useToast();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function load() {
      try {
        const data = await startupApi.getHistory();
        setHistory(data);
      } catch {
        addToast('Failed to load history', 'error');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = history.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.industry.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ||
      (filter === 'high' && item.score >= 80) ||
      (filter === 'medium' && item.score >= 60 && item.score < 80) ||
      (filter === 'low' && item.score < 60);
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-12 w-full" />
          {[1, 2, 3].map(i => <Skeleton key={i} className="h-24 w-full" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-surface-50">Startup History</h1>
            <p className="text-surface-400 mt-1">View all your previously generated reports</p>
          </div>
          <Link to="/generate">
            <Button size="sm" icon={Rocket}>New Startup</Button>
          </Link>
        </motion.div>

        <Card className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search startups..."
                icon={Search}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {['all', 'high', 'medium', 'low'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    filter === f
                      ? 'bg-brand-600 text-white'
                      : 'bg-surface-800 text-surface-400 hover:text-surface-200'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'high' ? 'High (80+)' : f === 'medium' ? 'Med (60-79)' : 'Low (<60)'}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {filtered.length === 0 ? (
          <Card className="text-center py-16">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-2xl bg-surface-800/50">
                <Search size={32} className="text-surface-500" />
              </div>
              <h3 className="text-lg font-semibold text-surface-50">No startups found</h3>
              <p className="text-sm text-surface-400 max-w-sm">
                {search ? 'Try a different search term.' : 'Generate your first startup report to see it here.'}
              </p>
              {!search && (
                <Link to="/generate">
                  <Button size="sm" icon={Rocket}>Generate Your First Report</Button>
                </Link>
              )}
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/report/${item.id}`}>
                  <Card
                    hover
                    className="flex items-center gap-4 p-4 sm:p-6"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-600/20 to-frost/20 border border-brand-500/20">
                      <Rocket size={20} className="text-brand-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-base font-semibold text-surface-50 truncate">{item.name}</h3>
                        <Badge color={scoreColor(item.score)}>{item.score}</Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-surface-500">
                        <span>{item.industry}</span>
                        <span className="w-1 h-1 rounded-full bg-surface-600" />
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {item.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-surface-600" />
                        <span className={item.status === 'completed' ? 'text-emerald-400' : 'text-red-400'}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-surface-500 shrink-0 group-hover:text-surface-300 transition-colors" />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
