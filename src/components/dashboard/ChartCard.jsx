function ChartCard({ title, subtitle, bars = [], type = 'bar' }) {
  if (type === 'line') {
    const max = Math.max(...bars.map((item) => item.value))

    return (
      <section className="panel chart-card">
        <div className="panel-header">
          <h3>{title}</h3>
          <span className="panel-meta">{subtitle}</span>
        </div>
        <div className="line-chart" aria-label={title}>
          {bars.map((item) => (
            <div key={item.label} className="line-point-wrap">
              <div className="line-point">
                <div className="line-point-value" style={{ height: `${(item.value / max) * 100}%` }} />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="panel chart-card">
      <div className="panel-header">
        <h3>{title}</h3>
        <span className="panel-meta">{subtitle}</span>
      </div>
      <div className="donut-wrap" aria-label={title}>
        {bars.map((item) => (
          <div key={item.label} className="legend-item">
            <span className="legend-dot" style={{ background: item.fill }} />
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChartCard
