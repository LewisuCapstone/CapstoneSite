import http from "../http-common";

class BusinessUserDataService {
  getAll() {
    return http.get("/businessusers");
  }

  get(id) {
    return http.get(`/businessusers/${id}`);
  }

  create(data) {
    return http.post("/businessusers", data);
  }

  update(id, data) {
    return http.put(`/businessusers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/businessusers/${id}`);
  }

  deleteAll() {
    return http.delete(`/businessusers`);
  }

  findByTitle(title) {
    return http.get(`/businessusers?title=${title}`);
  }
}

export default new BusinessUserDataService();