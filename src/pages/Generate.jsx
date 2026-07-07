import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Building2, Globe, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Card from '../components/ui/Card';
import AgentPipeline from '../components/agents/AgentPipeline';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/ui/Toast';
import { startupApi } from '../services/api';
import { agents, industries, countries } from '../data/dummyData';

const agentLogs = [
  'Parsing startup idea structure and identifying key domains...',
  'Scanning market size, growth trends, and regulatory landscape...',
  'Mapping competitive landscape and identifying positioning gaps...',
  'Analyzing brand identity opportunities and naming conventions...',
  'Building financial models and projecting revenue streams...',
  'Designing channel strategy and go-to-market timeline...',
  'Synthesizing findings into a polished pitch deck...',
];

export default function Generate() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const addToast = useToast();

  const [form, setForm] = useState({ idea: '', industry: '', country: '' });
  const [errors, setErrors] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(-1);
  const [completedAgents, setCompletedAgents] = useState([]);
  const [currentLog, setCurrentLog] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.idea.trim()) errs.idea = 'Startup idea is required';
    if (!form.industry) errs.industry = 'Please select an industry';
    if (!form.country) errs.country = 'Please select a country';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleGenerate = async () => {
    if (!validate()) return;

    setIsGenerating(true);
    setCurrentAgentIndex(0);
    setCompletedAgents([]);

    for (let i = 0; i < agents.length; i++) {
      setCurrentAgentIndex(i);
      setCurrentLog(agentLogs[i]);
      await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));
      setCompletedAgents(prev => [...prev, agents[i].id]);
    }

    try {
      const project = await startupApi.generate(form);
      dispatch({ type: 'FINISH_GENERATION', payload: project });
      addToast('Startup report generated successfully!', 'success');
      navigate(`/report/${project.id}`);
    } catch {
      addToast('Failed to generate report', 'error');
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!isGenerating ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">
                  Generate Your Startup Report
                </h1>
                <p className="text-surface-400">
                  Fill in the details below and let our AI agents analyze your idea.
                </p>
              </div>

              <Card className="p-8">
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-surface-300">
                      Startup Idea
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-surface-500">
                        <Lightbulb size={18} />
                      </div>
                      <textarea
                        placeholder="Describe your startup idea in detail..."
                        value={form.idea}
                        onChange={e => setForm({ ...form, idea: e.target.value })}
                        rows={4}
                        className={`w-full rounded-xl border bg-surface-900/50 px-4 py-2.5 pl-10 text-sm text-surface-100 placeholder:text-surface-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 resize-none ${errors.idea ? 'border-red-500/50' : 'border-surface-700'}`}
                      />
                    </div>
                    {errors.idea && <p className="text-xs text-red-400">{errors.idea}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Industry"
                      icon={Building2}
                      placeholder="Select industry"
                      options={industries}
                      value={form.industry}
                      onChange={e => setForm({ ...form, industry: e.target.value })}
                      error={errors.industry}
                    />
                    <Select
                      label="Country"
                      icon={Globe}
                      placeholder="Select country"
                      options={countries}
                      value={form.country}
                      onChange={e => setForm({ ...form, country: e.target.value })}
                      error={errors.country}
                    />
                  </div>
                  <Button
                    size="lg"
                    icon={Sparkles}
                    className="w-full mt-4"
                    onClick={handleGenerate}
                  >
                    Generate Validation Report
                  </Button>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-surface-50 mb-2">Analyzing Your Idea</h2>
              <p className="text-surface-400 mb-10">
                Seven specialized AI agents are working on your report...
              </p>

              <Card className="p-8">
                <AgentPipeline
                  currentAgentIndex={currentAgentIndex}
                  completedAgents={completedAgents}
                  currentLog={currentLog}
                />
              </Card>

              <div className="mt-8">
                <div className="w-full max-w-md mx-auto bg-surface-800 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-500 to-frost"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentAgentIndex + 1) / agents.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-sm text-surface-500 mt-2">
                  Agent {Math.min(currentAgentIndex + 1, agents.length)} of {agents.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
