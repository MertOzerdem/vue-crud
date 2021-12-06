import http from "./http";

class dataService {
  getAll() {
    return http.get("/users");
  }

  get(id: string) {
    return http.get(`/users/${id}`);
  }

  create(object: string, data: any) {
    return http.post(`/${object}` , data);
  }

  update(id: string, data: any) {
    return http.put(`/users/${id}`, data);
  }

  delete(object: string, id: string) {
    return http.delete(`/${object}/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(id: string) {
    return http.get(`/users?id=${id}`);
  }
}

export default new dataService();