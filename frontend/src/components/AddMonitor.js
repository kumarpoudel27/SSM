import React, { useState } from 'react';
import monitorService from '../services/monitorService';

const AddMonitor = ({ onClose, onMonitorAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    checkInterval: 5, // minutes
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const newMonitor = await monitorService.addMonitor(formData);
      onMonitorAdded(newMonitor);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to add monitor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Monitor Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.name}
          onChange={handleChange}
          placeholder="My Website"
        />
      </div>

      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          Website URL
        </label>
        <input
          type="url"
          name="url"
          id="url"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </div>

      <div>
        <label htmlFor="checkInterval" className="block text-sm font-medium text-gray-700">
          Check Interval (minutes)
        </label>
        <select
          name="checkInterval"
          id="checkInterval"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.checkInterval}
          onChange={handleChange}
        >
          <option value="1">1 minute</option>
          <option value="5">5 minutes</option>
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">1 hour</option>
        </select>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {loading ? 'Adding...' : 'Add Monitor'}
        </button>
      </div>
    </form>
  );
};

export default AddMonitor; 