import api from './api';

const monitorService = {
  async getMonitors() {
    try {
      const response = await api.get('/api/monitors');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch monitors' };
    }
  },

  async addMonitor(monitorData) {
    try {
      const response = await api.post('/api/monitors', monitorData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to add monitor' };
    }
  },

  async deleteMonitor(monitorId) {
    try {
      const response = await api.delete(`/api/monitors/${monitorId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete monitor' };
    }
  },

  async getMonitorDetails(monitorId) {
    try {
      const response = await api.get(`/api/monitors/${monitorId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch monitor details' };
    }
  }
};

export default monitorService; 