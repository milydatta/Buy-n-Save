import requests from 'services/httpService';

class StoreService {
  getProducts(): Promise<any> {
    return requests.get('/store');
  }

  getProductsByID(id: string): Promise<any> {
    return requests.get(`/store/${id}`);
  }

  addProduct(body: {}): Promise<any> {
    return requests.post(`/store/`, body);
  }

  updateProduct(id: string, body: {}): Promise<any> {
    return requests.post(`/store/${id}`, body);
  }

  deleteProduct(id: string): Promise<any> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
