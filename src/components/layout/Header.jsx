function Header({ site, timeRange, onSiteChange, onTimeRangeChange, search, onSearchChange }) {
  return (
    <header className="topbar">
      <div className="header-search-wrap">
        <label className="sr-only" htmlFor="global-search">Global search</label>
        <input
          id="global-search"
          className="global-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search assets, findings, paths..."
        />
      </div>

      <div className="header-controls">
        <label>
          <span className="control-label">Site</span>
          <select value={site} onChange={(event) => onSiteChange(event.target.value)}>
            <option>North Plant</option>
            <option>South Plant</option>
            <option>Utilities campus</option>
          </select>
        </label>

        <label>
          <span className="control-label">Time range</span>
          <select value={timeRange} onChange={(event) => onTimeRangeChange(event.target.value)}>
            <option>24h</option>
            <option>7d</option>
            <option>30d</option>
            <option>90d</option>
          </select>
        </label>

        <button type="button" className="icon-button" aria-label="Notifications">
          🔔
        </button>

        <button type="button" className="profile-pill" aria-label="User profile">
          <span className="profile-avatar">AB</span>
          <span>Andrea B.</span>
        </button>
      </div>
    </header>
  )
}

export default Header
