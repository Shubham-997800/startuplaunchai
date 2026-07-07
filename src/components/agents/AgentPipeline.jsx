import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { agents } from '../../data/dummyData';
import * as Icons from 'lucide-react';

function AgentIcon({ iconName, className }) {
  const Icon = Icons[iconName];
  return Icon ? <Icon className={className} /> : null;
}

export default function AgentPipeline({ currentAgentIndex, completedAgents, currentLog }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {agents.map((agent, index) => {
          const isCompleted = completedAgents.includes(agent.id);
          const isCurrent = index === currentAgentIndex;
          const isPending = index > currentAgentIndex;

          return (
            <div key={agent.id} className="flex items-center gap-2">
              {index > 0 && (
                <div className={`h-px w-8 transition-colors duration-500 ${
                  isCompleted ? 'bg-gradient-to-r from-brand-500 to-frost' : 'bg-surface-700'
                }`} />
              )}
              <motion.div
                className={`relative flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-500 ${
                  isCompleted
                    ? 'border-emerald-500/30 bg-emerald-500/10'
                    : isCurrent
                      ? 'border-brand-500/50 bg-brand-500/10 shadow-lg shadow-brand-500/10'
                      : 'border-surface-800 bg-surface-900/50'
                }`}
                animate={isCurrent ? { scale: [1, 1.05, 1] } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {isCompleted ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : isCurrent ? (
                  <Loader2 size={16} className="animate-spin text-brand-400" />
                ) : (
                  <AgentIcon iconName={agent.icon} className="w-4 h-4 text-surface-500" />
                )}
                <span className={`text-xs font-medium ${
                  isCompleted ? 'text-emerald-300' :
                  isCurrent ? 'text-brand-300' :
                  'text-surface-500'
                }`}>
                  {agent.name}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {currentLog && (
          <motion.div
            key={currentLog}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center"
          >
            <p className="text-sm text-surface-400">
              <span className="text-brand-400 font-medium">
                {agents[currentAgentIndex]?.name}:
              </span>{' '}
              {currentLog}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
