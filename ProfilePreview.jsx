import React from 'react';

const ProfilePreview = () => {
  return (
    <div className="profile-preview-card">
      <div className="profile-header">
        <div className="profile-avatar"></div>
      </div>
      <div className="profile-info">
        <h3>John Doe</h3>
        <p>Senior Software Engineer</p>
        <div className="connections">
          <span>203 connections</span>
          <button className="primary-button">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
