const STATS = [
  { num: '50+',  label: 'Products Shipped' },
  { num: '98%',  label: 'Client Retention' },
  { num: '10TB+',label: 'Data Processed Daily' },
  { num: '12+',  label: 'Industries Served' },
  { num: '4x',   label: 'Avg Efficiency Gain' },
  { num: '24/7', label: 'System Uptime SLA' },
];

const doubled = [...STATS, ...STATS];

export default function StatsTicker() {
  return (
    <div className="border-t border-b border-border bg-[#0a0a0a] overflow-hidden">
      <div
        className="flex"
        style={{ animation: 'ticker 30s linear infinite', width: 'max-content' }}
      >
        {doubled.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-12 py-5 border-r border-border shrink-0"
          >
            <span className="font-outfit text-2xl font-black tracking-tight text-[#89C441]">
              {s.num}
            </span>
            <span className="font-outfit text-sm text-white/40">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
