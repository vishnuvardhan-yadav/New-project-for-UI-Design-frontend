export const kpis = [
  { id: 'posture', label: 'Overall Security Posture', value: '86/100', delta: '+4.2%', status: 'healthy', description: 'Environment monitored normally', clickable: true },
  { id: 'assets', label: 'Total Assets', value: '2,486', delta: '+31', status: 'info', description: 'Inventory current', clickable: true },
  { id: 'active', label: 'Active Assets', value: '2,318', delta: '+42', status: 'healthy', description: 'Monitored and online', clickable: true },
  { id: 'critical', label: 'Critical Assets', value: '184', delta: '+6', status: 'warning', description: 'Production critical systems', clickable: true },
  { id: 'findings', label: 'High-Priority Findings', value: '27', delta: '-3', status: 'risk', description: 'Urgent items requiring review', clickable: true },
  { id: 'exposed', label: 'Exposed Critical Assets', value: '8', delta: '+2', status: 'risk', description: 'Reachable from external paths', clickable: true },
  { id: 'paths', label: 'High-Risk Attack Paths', value: '14', delta: '+1', status: 'risk', description: 'Pathways requiring triage', clickable: true },
]

export const severityData = [
  { label: 'Critical', value: 8, fill: '#d96c2b', tone: 'critical' },
  { label: 'High', value: 14, fill: '#ef8d3d', tone: 'high' },
  { label: 'Medium', value: 29, fill: '#f0b36a', tone: 'medium' },
  { label: 'Low', value: 36, fill: '#f3d29a', tone: 'low' },
]

export const riskFindings = [
  { title: 'Remote access gateway exposed', severity: 'Critical', owner: 'Network', zone: 'DMZ', time: '9 min ago' },
  { title: 'Engineering workstation lateral movement', severity: 'High', owner: 'Operations', zone: 'Production', time: '21 min ago' },
  { title: 'PLC firmware drift detected', severity: 'High', owner: 'OT', zone: 'Packaging', time: '34 min ago' },
  { title: 'Untrusted protocol on SCADA link', severity: 'Medium', owner: 'ICS', zone: 'Water Intake', time: '51 min ago' },
  { title: 'Legacy HMI pending patch validation', severity: 'Low', owner: 'Plant Ops', zone: 'Utilities', time: '2 hr ago' },
]

export const topAreas = [
  { name: 'Packaging Line A', value: 34, risk: 'Critical' },
  { name: 'Utilities', value: 26, risk: 'High' },
  { name: 'Water Intake', value: 22, risk: 'High' },
  { name: 'Power Distribution', value: 19, risk: 'Medium' },
]

export const riskTrend = [
  { label: 'Jan', value: 42 },
  { label: 'Feb', value: 46 },
  { label: 'Mar', value: 52 },
  { label: 'Apr', value: 58 },
  { label: 'May', value: 64 },
  { label: 'Jun', value: 68 },
  { label: 'Jul', value: 71 },
  { label: 'Aug', value: 76 },
]

export const elevatedIssues = [
  { issue: 'Engineering PC-22 privileged service exposure', severity: 'High', change: '+18% risk' },
  { issue: 'PLC-104 Modbus relay pattern elevated', severity: 'Critical', change: '+23% risk' },
  { issue: 'Remote gateway certificate expiry alert', severity: 'Medium', change: '+9% risk' },
]

export const assetInventory = [
  { label: 'Total asset inventory', value: '2,486' },
  { label: 'New assets', value: '19' },
  { label: 'Unidentified assets', value: '38' },
  { label: 'Inactive / offline', value: '168' },
]

export const deviceTypes = [
  { label: 'PLC', value: 36 },
  { label: 'HMI', value: 22 },
  { label: 'Engineering Workstation', value: 16 },
  { label: 'SCADA Server', value: 14 },
  { label: 'Historian', value: 8 },
  { label: 'RTU', value: 7 },
  { label: 'Network Switch', value: 11 },
]

export const vendorDistribution = [
  { label: 'Siemens', value: 31 },
  { label: 'Rockwell', value: 24 },
  { label: 'Schneider', value: 18 },
  { label: 'Mitsubishi', value: 12 },
  { label: 'Allen-Bradley', value: 9 },
  { label: 'Other', value: 6 },
]

export const protocolDistribution = [
  { label: 'Modbus TCP', value: 42 },
  { label: 'EtherNet/IP', value: 21 },
  { label: 'DNP3', value: 14 },
  { label: 'OPC UA', value: 11 },
  { label: 'PROFINET', value: 8 },
  { label: 'Other', value: 4 },
]

export const timeline = [
  { time: '08:42', type: 'New asset discovered', detail: 'Remote gateway added to site 3 network', status: 'info' },
  { time: '09:15', type: 'Asset state changed', detail: 'SCADA server moved from monitored to degraded', status: 'warning' },
  { time: '09:44', type: 'New finding', detail: 'Engineering workstation suspicious communication flagged', status: 'risk' },
  { time: '10:12', type: 'Risk increased', detail: 'Packaging PLC-104 risk increased to critical', status: 'risk' },
  { time: '10:26', type: 'Communication relationship changed', detail: 'Modbus route added between DMZ and operations', status: 'info' },
  { time: '10:38', type: 'Platform warning', detail: 'Visibility degraded; last complete telemetry 18 min ago', status: 'warning' },
  { time: '11:05', type: 'Operator action', detail: 'Blocked remote access session to Engineering PC-22', status: 'success' },
]

export const sensorHealth = [
  { name: 'Telemetry freshness', value: '98%', state: 'normal', detail: 'Data current', info: 'No issues exist' },
  { name: 'Collection status', value: '95%', state: 'normal', detail: 'Coverage healthy', info: 'Environment monitored normally' },
  { name: 'Sensor health', value: '87%', state: 'degraded', detail: 'Visibility degraded', info: 'Last complete telemetry: 18 min ago' },
  { name: 'Dropped data', value: '6%', state: 'warning', detail: 'Some conclusions may be incomplete', info: 'Not enough data available on subnets 4 and 7' },
]

export const dashboardFilters = {
  sites: ['All Sites', 'North Plant', 'South Plant', 'Utilities campus'],
  plants: ['All Plants', 'Plant 01', 'Plant 02', 'Plant 04'],
  areas: ['All Areas', 'Operations', 'Production', 'Utilities', 'Water Intake'],
  zones: ['All Zones', 'DMZ', 'Production', 'Operations', 'Engineering'],
  timeRanges: ['24h', '7d', '30d', '90d'],
  severities: ['All', 'Critical', 'High', 'Medium', 'Low'],
  criticalities: ['All', 'Critical', 'High', 'Medium'],
}
