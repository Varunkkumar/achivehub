import React from 'react';

const PostCreator = () => {
  return (
    <div className="post-creator-card">
      <div className="creator-header">
        <img src="/profile.jpg" alt="Profile" className="creator-avatar" />
        <textarea placeholder="Start a post..." rows="2"></textarea>
      </div>
      <div className="creator-actions">
        <button className="media-button">Photo</button>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default PostCreator;
