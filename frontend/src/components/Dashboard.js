import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import monitorService from '../services/monitorService';
import Modal from './Modal';
import AddMonitor from './AddMonitor';

const DashboardComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [monitors, setMonitors] = useState([]);
  const [error, setError] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMonitor, setSelectedMonitor] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (!userData) {
          navigate('/login');
          return;
        }
        setUser(userData);
        await fetchMonitors();
      } catch (err) {
        setError('Failed to load user data');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const fetchMonitors = async () => {
    try {
      const monitorsData = await monitorService.getMonitors();
      setMonitors(monitorsData);
    } catch (err) {
      setError('Failed to fetch monitors');
    }
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const handleAddMonitor = async (newMonitor) => {
    setMonitors([...monitors, newMonitor]);
  };

  const handleDeleteMonitor = async (monitorId) => {
    if (window.confirm('Are you sure you want to delete this monitor?')) {
      try {
        await monitorService.deleteMonitor(monitorId);
        setMonitors(monitors.filter(m => m.id !== monitorId));
      } catch (err) {
        setError('Failed to delete monitor');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <i className="fas fa-heart-pulse text-primary text-2xl"></i>
              <span className="ml-2 font-bold text-xl">SimpleSiteMonitor</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {user?.name || 'User'}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Dashboard Header */}
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor your websites and get instant notifications when they go down.
          </p>
        </div>

        {/* Add Monitor Button */}
        <div className="px-4 sm:px-6 lg:px-8 mb-6">
          <button
            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            onClick={() => setIsAddModalOpen(true)}
          >
            <i className="fas fa-plus mr-2"></i>
            Add New Monitor
          </button>
        </div>

        {/* Monitors List */}
        <div className="px-4 sm:px-6 lg:px-8">
          {monitors.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-desktop text-gray-400 text-5xl mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900">No monitors yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by adding your first website to monitor.
              </p>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {monitors.map((monitor) => (
                  <li key={monitor.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className={`status-indicator ${monitor.status === 'up' ? 'status-up' : 'status-down'}`}></span>
                          <p className="text-sm font-medium text-indigo-600 truncate">{monitor.name}</p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <button
                            onClick={() => handleDeleteMonitor(monitor.id)}
                            className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-red-300 shadow-sm text-xs font-medium rounded text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-link mr-1.5 text-gray-400"></i>
                            {monitor.url}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <i className="fas fa-clock mr-1.5 text-gray-400"></i>
                          <p>Last checked: {new Date(monitor.lastChecked).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>

      {/* Add Monitor Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Monitor"
      >
        <AddMonitor
          onClose={() => setIsAddModalOpen(false)}
          onMonitorAdded={handleAddMonitor}
        />
      </Modal>
    </div>
  );
};

export default DashboardComponent; 