// Bandsite API integration

const apiKey = "44993b1e-d67d-40a6-b841-df26de004af8";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  // Post a new comment to the API
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

  // Get comments from the API
  async getComments() {
    try {
      const response = await axios.get(
        `${this.apiURL}/comments?api_key=${this.apiKey}`
      );
      // Sort comments by timestamp, newest first
      const sortedComments = response.data.sort(
        (a, b) => b.timestamp - a.timestamp
      );
      return sortedComments;
    } catch (error) {
      console.error("Error with fetching comments:", error);
    }
  }

  // Get show dates from the API
  async getShows() {
    try {
      const response = await axios.get(
        `${this.apiURL}/showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error with fetching show dates:", error);
    }
  }
}

// Export BandSiteApi for use in other scripts
export default BandSiteApi;