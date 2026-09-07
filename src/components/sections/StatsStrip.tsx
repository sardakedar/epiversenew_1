import CountUp from '@/components/ui/CountUp';

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat-item">
            <CountUp target={16} />
            <div className="stat-lbl">Platform modules</div>
          </div>
          <div className="stat-item"><div className="stat-num">99.9%</div><div className="stat-lbl">Uptime SLA</div></div>
          <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-lbl">India support</div></div>
          <div className="stat-item"><div className="stat-num">&lt;2 hrs</div><div className="stat-lbl">Avg. onboarding</div></div>
        </div>
      </div>
    </div>
  );
}
