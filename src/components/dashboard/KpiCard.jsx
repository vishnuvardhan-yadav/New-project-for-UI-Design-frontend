import StatusBadge from '../common/StatusBadge'

function KpiCard({ label, value, delta, description, status = 'info', onClick, clickable = false }) {
  return (
    <button
      type="button"
      className={`kpi-card ${clickable ? 'clickable' : ''}`}
      onClick={onClick}
      aria-label={`${label}: ${value}`}
    >
      <div className="kpi-header">
        <span className="kpi-label">{label}</span>
        <StatusBadge label={status === 'healthy' ? 'Healthy' : status === 'risk' ? 'Needs review' : 'Info'} tone={status} detail={description} />
      </div>
      <div className="kpi-value-row">
        <strong className="kpi-value">{value}</strong>
        <span className="kpi-delta">{delta}</span>
      </div>
      <div className="kpi-description">{description}</div>
    </button>
  )
}

export default KpiCard
