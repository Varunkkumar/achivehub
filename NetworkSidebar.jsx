import React from 'react';

const NetworkSidebar = () => {
  return (
    <div className="network-sidebar">
      <h4>Manage my network</h4>
      <ul>
        <li>Connections (203)</li>
        <li>Groups (15)</li>
        <li>Events</li>
        <li>Pages</li>
      </ul>
      <h4>People you may know</h4>
      <div className="suggestion-list">
        {/* Add dynamic suggestions here */}
        <div className="suggestion-item">
          <img src="/user1.jpg" alt="User" />
          <div>
            <h5>Jane Smith</h5>
            <p>Product Manager</p>
            <button className="connect-button">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSidebar;
