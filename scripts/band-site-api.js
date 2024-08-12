class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

// get and post response with await/axois
  async getShowsData() {
    const response = await axios.get(
      `${this.baseUrl}showdates/?api_key=${this.apiKey}`
    );

    return response.data.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
  }

  async postCommentsData(newComment) {
    const response = await axios.post(
      `${this.baseUrl}comments/?api_key=${this.apiKey}`,
      newComment
    );

    return response.data; 
  }

  async getCommentsData() {
    const response = await axios.get(
      `${this.baseUrl}comments/?api_key=${this.apiKey}`
    );
   
    return response.data.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
  }
}

export default BandSiteApi;
