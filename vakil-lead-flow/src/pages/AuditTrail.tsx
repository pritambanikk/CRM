import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, ScrollText } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const AuditTrail = () => {
  const navigate = useNavigate();
  const { activityLogs } = useCRM();
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState<string>('all');

  const actionTypes = useMemo(() => {
    const types = new Set(activityLogs.map(l => l.action));
    return Array.from(types).sort();
  }, [activityLogs]);

  const filtered = useMemo(() => {
    return [...activityLogs]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .filter(log => {
        if (filterBy !== 'all' && log.action !== filterBy) return false;
        if (search) {
          const q = search.toLowerCase();
          const searchable = [log.action, log.details, log.created_by, log.entity_id].join(' ').toLowerCase();
          if (!searchable.includes(q)) return false;
        }
        return true;
      });
  }, [activityLogs, search, filterBy]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-4 space-y-2.5">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-display font-bold text-lg">Audit Trail</h1>
            <p className="text-xs text-muted-foreground">{filtered.length} entries</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 rounded-xl text-sm"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-0.5 -mx-1 px-1 no-scrollbar">
          <button
            onClick={() => setFilterBy('all')}
            className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
              filterBy === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            All
          </button>
          {actionTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilterBy(type)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                filterBy === type ? 'bg-primary text-primary-foreground' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto">
        {filtered.length > 0 ? (
          <div className="space-y-0">
            {filtered.map((log, i) => (
              <div key={log.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  {i < filtered.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-xs font-semibold">{log.action}</p>
                    <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">{log.entity_id}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{log.details}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {log.created_by} • {formatDistanceToNow(new Date(log.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground py-8">No logs found</p>
        )}
      </div>
    </div>
  );
};

export default AuditTrail;
