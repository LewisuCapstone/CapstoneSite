import http from "../http-common";

class CharityUserDataService {
  getAll() {
    return http.get("/charityusers");
  }

  get(id) {
    return http.get(`/charityusers/${id}`);
  }

  create(data) {
    return http.post("/charityusers", data);
  }

  update(id, data) {
    return http.put(`/charityusers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/charityusers/${id}`);
  }

  deleteAll() {
    return http.delete(`/charityusers`);
  }

  findByTitle(title) {
    return http.get(`/charityusers?title=${title}`);
  }
}

export default new CharityUserDataService();