import API_ENDPOINT from '../global/apiEndpoint';

class ApiSource {
  static async fetchList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson;
  }

  static async fetchDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ApiSource;
