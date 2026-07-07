const API_BASE = '/api';

async function request(url, options = {}) {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }

  return response.json();
}

export const startupApi = {
  async generate(payload) {
    const project = await request('/generate', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return project;
  },

  async getHistory() {
    return request('/history');
  },

  async getReport(projectId) {
    return request(`/report/${projectId}`);
  },

  async getProject(id) {
    return request(`/project/${id}`);
  },
};
