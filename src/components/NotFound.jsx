import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="section">
    <p className="has-text-centered title is-4">
      Page not found
    </p>
    <p className="has-text-centered title is-5">
      <Link to="/">Go to list</Link>
    </p>
  </div>
);
