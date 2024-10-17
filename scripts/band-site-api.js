//Bandsite 3
const apiKey = "44993b1e-d67d-40a6-b841-df26de004af8";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  // postComment
  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.apiURL}/comments?api_key=${this.apiKey}`,
        comment
      );
      return response.data;
    } catch (error) {
      console.error("Error with comment posting:", error);
    }
  }

  //getComments
  async getComments() {
    try {
      const response = await axios.get(
        `${this.apiURL}/comments?api_key=${this.apiKey}`,
        comment
      );
      const sortComments = response.data.sort((a, b) => {
        // return new Date(b.timestamp) - new Date(a.timestamp);
        return b.timestamp - a.timestamp;
      });
      return sortComments;
    } catch (error) {
      console.error("Error with comment get:", error);
    }
  }

  //getShows
  async getShows() {
    try {
      const response = await axios.get(
        `${this.apiURL}/showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error with show get:", error);
    }
  }
}
//so that it is accessible via the other js sheets:
export default BandSiteApi;
