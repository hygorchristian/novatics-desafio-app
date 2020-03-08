/* eslint-disable no-param-reassign */
/**
 * =============================================================================
 * Resources List
 * =============================================================================
 *
 * 00. Auth
 * 01. Events
 * 02. Code
 * 03. User History
 * 04. Leaderboards
 * 05. User
 *
 */

import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://192.168.0.10:3333', // -- Heroku
    });
  }

  setToken = token => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  removeToken = () => {
    delete this.api.defaults.headers.common.Authorization;
  };

  // ===========================================================================
  // 00. Auth
  // ===========================================================================

  // login = data => this.api.post('/auth', data);

  githubLogin = username => this.api.post('/auth/github', { username });

  // signInWithToken = data => this.api.post('/auth/access-token', data);

  // ===========================================================================
  // 01. Events
  // ===========================================================================

  countEvent = (params = {}) => this.api.get('events/count', { params });

  eventAddDonor = (id, donor_id) =>
    this.api.put(`events/add/${id}`, { id: donor_id });

  getEvent = (id, params = {}) => this.api.get(`events/${id}`, { params });

  createEvent = data => this.api.post('events', data);

  updateEvent = (id, data) => this.api.put(`events/${id}`, data);

  deleteEvent = id => this.api.delete(`events/${id}`);
}

export default new ApiService();
