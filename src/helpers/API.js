import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 */

class JoblyApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);


    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    let axiosConfig = { url, method, headers };

  if (method === "get") {
    axiosConfig.params = data;
  } else {
    axiosConfig.data = data;
  }
    try {
      const response = await axios(axiosConfig);
      console.log(url)
      return response.data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await JoblyApi.request(`companies/${handle}`, {}, "get");
    return res.company;
  }
  
  static async getCompanies() {
    const res = await JoblyApi.request("companies", {}, "get");

    return res.companies;
  }

  static async searchCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }
  
  static async getJobs() {
    const res = await JoblyApi.request("jobs", {}, "get");
    return res.jobs;
  }

  static async searchJobs(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }

  static async registerUser(userData) {
    const res = await JoblyApi.request("auth/register", userData, "post");
    return res.token;
  }

  static async loginUser(userData) {
    const res = await JoblyApi.request("auth/token", userData, "post");
    return res.token;
  }

  static async getUser(username){
    const res = await JoblyApi.request(`users/${username}`, {}, "get");
    return res.user;
  }

  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }

  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;