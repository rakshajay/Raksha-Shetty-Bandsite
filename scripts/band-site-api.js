class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }
 
    async getShowsData(){
        const response = await axios.get(
            `${this.baseUrl}showdates/?api_key=${this.apiKey}`
        )
        
        console.table( response.data);

        return response.data.sort(function (a, b) {
            return b.timestamp - a.timestamp;
          });

    }
    

    async postCommentsData(newComment){
      console.log(newComment);
      const response = await axios.post(
         `${this.baseUrl}comments/?api_key=${this.apiKey}`,newComment
      )

      console.table( response.data);
      return response.data;
    }

    async getCommentsData(){
      const response = await axios.get(
          `${this.baseUrl}comments/?api_key=${this.apiKey}`
      )
      
      console.table( response.data);

      return response.data.sort(function (a, b) {
          return b.timestamp - a.timestamp;
        });

  }
 
}

export default BandSiteApi;