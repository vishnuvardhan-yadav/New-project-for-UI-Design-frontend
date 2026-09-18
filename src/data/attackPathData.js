export const attackPaths = [
  {
    id: 'path-1',
    name: 'Internet Gateway → Engineering PC → SCADA Server → PLC-104',
    severity: 'Critical',
    confidence: 92,
    site: 'North Plant',
    zone: 'Production',
    nodes: [
      { id: 'source-1', label: 'Internet Gateway', type: 'Source', role: 'Source', x: 80, y: 210, criticality: 'High', zone: 'Internet', state: 'Online', risk: 'High', size: 'large', color: 'orange' },
      { id: 'pivot-1', label: 'Engineering PC-22', type: 'Engineering Workstation', role: 'Pivot', x: 250, y: 120, criticality: 'High', zone: 'Operations', state: 'Online', risk: 'High', size: 'medium', color: 'orange' },
      { id: 'pivot-2', label: 'SCADA Server', type: 'SCADA Server', role: 'Pivot', x: 430, y: 210, criticality: 'Critical', zone: 'Production', state: 'Online', risk: 'Critical', size: 'medium', color: 'red' },
      { id: 'target-1', label: 'PLC-104', type: 'PLC', role: 'Target', x: 615, y: 120, criticality: 'Critical', zone: 'Packaging', state: 'Online', risk: 'Critical', size: 'large', color: 'red' },
    ],
    edges: [
      { from: 'source-1', to: 'pivot-1', label: 'Remote access / RDP', protocol: 'RDP', risk: 'Suspicious', confidence: 96 },
      { from: 'pivot-1', to: 'pivot-2', label: 'Lateral movement', protocol: 'SMB', risk: 'Likely', confidence: 92 },
      { from: 'pivot-2', to: 'target-1', label: 'Plant control command', protocol: 'Modbus TCP', risk: 'Critical', confidence: 89 },
    ],
    summary: 'A remote entry point reaches engineering and then operation-critical assets.',
    evidence: ['Remote service relationship', 'Suspicious communication', 'Related high-severity finding'],
    recommendation: 'Investigate communication with PLC-104 and restrict remote access paths.'
  },
  {
    id: 'path-2',
    name: 'Site Gateway → HMI → Packaging PLC → Safety Controller',
    severity: 'High',
    confidence: 87,
    site: 'South Plant',
    zone: 'Utilities',
    nodes: [
      { id: 'source-2', label: 'Site Gateway', type: 'Remote Gateway', role: 'Source', x: 90, y: 300, criticality: 'Medium', zone: 'DMZ', state: 'Online', risk: 'Medium', size: 'medium', color: 'orange' },
      { id: 'pivot-3', label: 'HMI-19', type: 'HMI', role: 'Pivot', x: 270, y: 330, criticality: 'High', zone: 'Operations', state: 'Online', risk: 'High', size: 'medium', color: 'orange' },
      { id: 'pivot-4', label: 'Packaging PLC', type: 'PLC', role: 'Pivot', x: 460, y: 260, criticality: 'Critical', zone: 'Packaging', state: 'Online', risk: 'High', size: 'medium', color: 'red' },
      { id: 'target-2', label: 'Safety Controller', type: 'Safety Controller', role: 'Target', x: 620, y: 340, criticality: 'Critical', zone: 'Utilities', state: 'Online', risk: 'Critical', size: 'large', color: 'red' },
    ],
    edges: [
      { from: 'source-2', to: 'pivot-3', label: 'Remote operator session', protocol: 'RDP', risk: 'Moderate', confidence: 82 },
      { from: 'pivot-3', to: 'pivot-4', label: 'Control system handoff', protocol: 'EtherNet/IP', risk: 'High', confidence: 88 },
      { from: 'pivot-4', to: 'target-2', label: 'Safety PLC command', protocol: 'Profinet', risk: 'Critical', confidence: 84 },
    ],
    summary: 'Equipment and safety controllers are reachable from a remote site gateway through human-machine interfaces.',
    evidence: ['Remote session observed', 'Control protocol handoff', 'Safety boundary weakening'],
    recommendation: 'Review HMI exposure and restrict safety controller reachability.'
  },
  {
    id: 'path-3',
    name: 'Historian → SCADA Server → Water Intake PLC → Valve Rack',
    severity: 'Medium',
    confidence: 75,
    site: 'Utilities campus',
    zone: 'Water Intake',
    nodes: [
      { id: 'source-3', label: 'Historian', type: 'Historian', role: 'Source', x: 80, y: 170, criticality: 'Medium', zone: 'Utilities', state: 'Online', risk: 'Medium', size: 'medium', color: 'orange' },
      { id: 'pivot-5', label: 'SCADA Server-4', type: 'SCADA Server', role: 'Pivot', x: 260, y: 250, criticality: 'High', zone: 'Water Intake', state: 'Degraded', risk: 'High', size: 'medium', color: 'orange' },
      { id: 'pivot-6', label: 'Water Intake PLC', type: 'PLC', role: 'Pivot', x: 470, y: 170, criticality: 'Critical', zone: 'Water Intake', state: 'Online', risk: 'High', size: 'medium', color: 'red' },
      { id: 'target-3', label: 'Valve Rack', type: 'RTU', role: 'Target', x: 660, y: 260, criticality: 'High', zone: 'Water Intake', state: 'Online', risk: 'High', size: 'large', color: 'orange' },
    ],
    edges: [
      { from: 'source-3', to: 'pivot-5', label: 'Data replication', protocol: 'OPC UA', risk: 'Moderate', confidence: 74 },
      { from: 'pivot-5', to: 'pivot-6', label: 'Control read/write', protocol: 'Modbus TCP', risk: 'High', confidence: 79 },
      { from: 'pivot-6', to: 'target-3', label: 'Valve control', protocol: 'DNP3', risk: 'High', confidence: 72 },
    ],
    summary: 'Data replication and control communications indicate a path from historian data into process control.',
    evidence: ['Cross-zone data replication', 'Modbus use with de-prioritised controls', 'Valve rack communication pattern'],
    recommendation: 'Validate historian access controls and reduce direct PLC reachability from historical data systems.'
  },
]

export const graphControls = [
  'Zoom', 'Pan', 'Fit to view', 'Search within graph', 'Severity filter', 'Confidence filter', 'Site filter', 'Zone filter', 'Source filter', 'Target filter', 'Single-path view', 'Multi-path view', 'Collapse/expand groups', 'Highlight selected path', 'Highlight critical path', 'Show reachable assets', 'Show blast radius', 'Compare paths', 'Legend', 'Mini-map',
]
