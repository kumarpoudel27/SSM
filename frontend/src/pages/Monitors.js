import React, { useState, useEffect } from 'react';
import { getMonitors } from '../services/api';

const Monitors = () => {
  const [monitors, setMonitors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMonitors = async () => {
      try {
        const response = await getMonitors();
        setMonitors(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching monitors.');
      }
    };

    fetchMonitors();
  }, []);

  return (
    <div>
      <h2>Monitors</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {monitors.map((monitor) => (
          <li key={monitor._id}>
            <strong>{monitor.name}</strong> - {monitor.url} (Status: {monitor.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Monitors; 