import { useMemo, useState } from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import KpiCard from '../components/dashboard/KpiCard'
import SummaryPanel from '../components/dashboard/SummaryPanel'
import ChartCard from '../components/dashboard/ChartCard'
import AssetPanel from '../components/dashboard/AssetPanel'
import HealthCard from '../components/dashboard/HealthCard'
import StatusBadge from '../components/common/StatusBadge'
import SeverityBadge from '../components/common/SeverityBadge'
import {
  kpis,
  severityData,
  riskFindings,
  topAreas,
  riskTrend,
  elevatedIssues,
  assetInventory,
  deviceTypes,
  vendorDistribution,
  protocolDistribution,
  timeline,
  sensorHealth,
  dashboardFilters,
} from '../data/dashboardData'

function Dashboard({ onNavigate, selectedPathId, setSelectedPathId }) {
  const [site, setSite] = useState('North Plant')
  const [timeRange, setTimeRange] = useState('24h')
  const [search, setSearch] = useState('')

  const visibleFindings = useMemo(() => {
    const query = search.toLowerCase()
    return riskFindings.filter((item) => {
      if (!query) return true
      return `${item.title} ${item.owner} ${item.zone}`.toLowerCase().includes(query)
    })
  }, [search])

  const visibleKpis = useMemo(() => {
    const query = search.toLowerCase()
    return kpis.filter((item) => {
      if (!query) return true
      return item.label.toLowerCase().includes(query)
    })
  }, [search])

  return (
    <div className="app-shell">
      <Sidebar active="Dashboard" />
      <main className="main-panel">
        <Header
          site={site}
          timeRange={timeRange}
          onSiteChange={setSite}
          onTimeRangeChange={setTimeRange}
          search={search}
          onSearchChange={setSearch}
        />

        <div className="dashboard-page">
          <div className="dashboard-topbar">
            <div>
              <p className="eyebrow">Security posture overview</p>
              <h1>Industrial environment monitoring</h1>
            </div>
            <div className="toolbar-actions">
              <StatusBadge label="Monitoring active" tone="healthy" detail="Environment monitored normally" />
            </div>
          </div>

          <section className="kpi-grid" aria-label="Key security metrics">
            {visibleKpis.map((kpi) => (
              <KpiCard
                key={kpi.id}
                label={kpi.label}
                value={kpi.value}
                delta={kpi.delta}
                description={kpi.description}
                status={kpi.status}
                clickable={kpi.clickable}
                onClick={() => {
                  if (kpi.id === 'paths') onNavigate('attack')
                }}
              />
            ))}
          </section>

          <section className="middle-grid">
            <ChartCard title="Severity distribution" subtitle="Current findings" bars={severityData} />

            <section className="panel">
              <div className="panel-header">
                <h3>Major unresolved risks</h3>
              </div>
              <div className="panel-body compact-list">
                {visibleFindings.slice(0, 4).map((item) => (
                  <div key={item.title} className="summary-row">
                    <div>
                      <div className="summary-title">{item.title}</div>
                      <div className="summary-meta">{item.zone} • {item.owner}</div>
                    </div>
                    <div className="summary-side">
                      <SeverityBadge label={item.severity} tone={item.severity.toLowerCase()} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="content-grid">
            <SummaryPanel title="Top affected areas" items={topAreas} type="bars" />
            <ChartCard title="Risk trend" subtitle="Last 8 months" bars={riskTrend} type="line" />
            <section className="panel">
              <div className="panel-header">
                <h3>Recently elevated issues</h3>
              </div>
              <div className="panel-body compact-list">
                {elevatedIssues.map((item) => (
                  <div key={item.issue} className="summary-row">
                    <div>
                      <div className="summary-title">{item.issue}</div>
                    </div>
                    <div className="summary-side vertical">
                      <SeverityBadge label={item.severity} tone={item.severity.toLowerCase()} />
                      <span className="time-label">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="lower-grid">
            <AssetPanel title="Asset visibility" items={assetInventory} />

            <section className="panel stacked-panel">
              <div className="panel-header">
                <h3>Device type distribution</h3>
              </div>
              <div className="stacked-list">
                {deviceTypes.map((item) => (
                  <div key={item.label} className="stacked-row">
                    <span>{item.label}</span>
                    <div className="bar-wrap">
                      <div className="bar-fill" style={{ width: `${item.value}%` }} />
                    </div>
                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel stacked-panel">
              <div className="panel-header">
                <h3>Vendor distribution</h3>
              </div>
              <div className="stacked-list">
                {vendorDistribution.map((item) => (
                  <div key={item.label} className="stacked-row">
                    <span>{item.label}</span>
                    <div className="bar-wrap">
                      <div className="bar-fill alt" style={{ width: `${item.value}%` }} />
                    </div>
                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel stacked-panel">
              <div className="panel-header">
                <h3>Protocol distribution</h3>
              </div>
              <div className="stacked-list">
                {protocolDistribution.map((item) => (
                  <div key={item.label} className="stacked-row">
                    <span>{item.label}</span>
                    <div className="bar-wrap">
                      <div className="bar-fill neutral" style={{ width: `${item.value}%` }} />
                    </div>
                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="two-column-grid">
            <section className="panel">
              <div className="panel-header">
                <h3>Attack-path preview</h3>
                <button type="button" className="primary-button" onClick={() => onNavigate('attack')}>
                  View Attack Paths
                </button>
              </div>
              <div className="attack-preview">
                <div className="path-steps">
                  <span>Internet</span>
                  <span className="arrow">↓</span>
                  <span>Remote Gateway</span>
                  <span className="arrow">↓</span>
                  <span>Engineering PC</span>
                  <span className="arrow">↓</span>
                  <span>PLC</span>
                  <span className="arrow">↓</span>
                  <span>Critical Production Server</span>
                </div>
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <h3>Network / topology insight</h3>
              </div>
              <div className="topology-box">
                {['Internet', 'DMZ', 'Operations', 'Production', 'Utilities'].map((label, index) => (
                  <div key={label} className={`zone-bubble zone-${index + 1}`}>
                    {label}
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="bottom-grid">
            <section className="panel">
              <div className="panel-header">
                <h3>Recent change timeline</h3>
              </div>
              <div className="timeline">
                {timeline.map((entry) => (
                  <div key={`${entry.time}-${entry.type}`} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-time">{entry.time}</div>
                    <div className="timeline-content">
                      <div className="timeline-type">{entry.type}</div>
                      <div className="timeline-detail">{entry.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <HealthCard title="Platform / sensor health" items={sensorHealth} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
