function AssetPanel({ title, items }) {
  return (
    <section className="panel asset-panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="asset-grid">
        {items.map((item) => (
          <div key={item.label} className="asset-stat">
            <div className="asset-stat-value">{item.value}</div>
            <div className="asset-stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AssetPanel
