import { useMemo, useState } from 'react'
import { attackPaths, graphControls } from '../data/attackPathData'
import SeverityBadge from '../components/common/SeverityBadge'
import StatusBadge from '../components/common/StatusBadge'

function AttackPath({ selectedPathId, setSelectedPathId }) {
  const [search, setSearch] = useState('')
  const [severityFilter, setSeverityFilter] = useState('All')
  const [confidenceFilter, setConfidenceFilter] = useState(0)
  const [expanded, setExpanded] = useState(true)

  const filteredPaths = useMemo(() => {
    return attackPaths.filter((path) => {
      const matchesSearch = !search || path.name.toLowerCase().includes(search.toLowerCase())
      const matchesSeverity = severityFilter === 'All' || path.severity === severityFilter
      const matchesConfidence = path.confidence >= confidenceFilter
      return matchesSearch && matchesSeverity && matchesConfidence
    })
  }, [search, severityFilter, confidenceFilter])

  const activePath = filteredPaths.find((path) => path.id === selectedPathId) || filteredPaths[0] || attackPaths[0]

  const handleSelectPath = (pathId) => setSelectedPathId(pathId)

  return (
    <div className="app-shell attack-shell">
      <aside className="attack-sidebar">
        <div className="side-heading">
          <h2>Attack Path Map</h2>
          <button type="button" className="ghost-button" onClick={() => setExpanded((value) => !value)}>
            {expanded ? 'Collapse' : 'Expand'}
          </button>
        </div>

        <div className="filter-stack">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search path or asset"
            className="graph-search"
          />

          <div className="inline-filters">
            <label>
              <span>Severity</span>
              <select value={severityFilter} onChange={(event) => setSeverityFilter(event.target.value)}>
                <option>All</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
              </select>
            </label>

            <label>
              <span>Confidence</span>
              <input
                type="range"
                min="0"
                max="100"
                value={confidenceFilter}
                onChange={(event) => setConfidenceFilter(Number(event.target.value))}
              />
            </label>
          </div>
        </div>

        <div className="graph-list">
          {filteredPaths.map((path) => (
            <button
              key={path.id}
              type="button"
              className={`path-card ${activePath.id === path.id ? 'selected' : ''}`}
              onClick={() => handleSelectPath(path.id)}
            >
              <div className="path-header">
                <strong>{path.name}</strong>
                <SeverityBadge label={path.severity} tone={path.severity.toLowerCase()} />
              </div>
              <div className="path-meta">{path.site} • {path.zone}</div>
              <div className="path-meta">Confidence {path.confidence}%</div>
            </button>
          ))}
        </div>

        <div className="graph-control-list">
          {graphControls.map((control) => (
            <button key={control} type="button" className="graph-control">
              {control}
            </button>
          ))}
        </div>
      </aside>

      <main className="graph-panel">
        <div className="graph-toolbar">
          <div className="toolbar-group">
            <button type="button" className="primary-button">Zoom +</button>
            <button type="button" className="primary-button">Zoom -</button>
            <button type="button" className="ghost-button">Fit to view</button>
          </div>
          <div className="toolbar-group">
            <StatusBadge label="Critical path highlighted" tone="risk" detail="Selected path emphasized" />
          </div>
        </div>

        <div className="graph-surface" aria-label="Attack path graph">
          <div className="path-visual">
            {activePath.nodes.map((node, index) => (
              <div
                key={node.id}
                className={`graph-node ${node.role.toLowerCase()}`}
                style={{ left: `${node.x}px`, top: `${node.y}px` }}
                onClick={() => setSelectedPathId(activePath.id)}
                role="button"
                tabIndex={0}
                aria-label={`${node.label} ${node.type}`}
              >
                <div className="node-role">{node.role}</div>
                <div className="node-label">{node.label}</div>
                <div className="node-meta">{node.criticality} • {node.zone}</div>
              </div>
            ))}

            {activePath.edges.map((edge) => {
              const from = activePath.nodes.find((node) => node.id === edge.from)
              const to = activePath.nodes.find((node) => node.id === edge.to)

              return (
                <div
                  key={`${edge.from}-${edge.to}`}
                  className="graph-edge"
                  style={{
                    left: `${Math.min(from.x, to.x) + 40}px`,
                    top: `${Math.min(from.y, to.y) + 20}px`,
                    width: `${Math.abs(to.x - from.x) + 20}px`,
                    height: `${Math.abs(to.y - from.y) + 20}px`,
                  }}
                >
                  <span>{edge.protocol}</span>
                  <small>{edge.risk}</small>
                </div>
              )
            })}
          </div>
        </div>

        <aside className="investigation-panel" aria-label="Investigation panel">
          <div className="panel-header">
            <h3>Investigation panel</h3>
            <button type="button" className="ghost-button">Close</button>
          </div>

          <div className="panel-body">
            <div className="investigation-section">
              <h4>Asset</h4>
              <p>{activePath.nodes[2]?.label || 'Engineering PC-22'}</p>
            </div>
            <div className="investigation-section">
              <h4>Why it matters</h4>
              <p>{activePath.summary}</p>
            </div>
            <div className="investigation-section">
              <h4>Evidence</h4>
              <ul>
                {activePath.evidence.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="investigation-section">
              <h4>Recommended investigation</h4>
              <p>{activePath.recommendation}</p>
            </div>
            <button type="button" className="primary-button action-button">Apply recommended action</button>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default AttackPath
