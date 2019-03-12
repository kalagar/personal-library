import qs from "qs";
import axios from "axios";

const CLIENT_ID = "23";
const ROOT_URL = "http://hiring.bsup.tk";
export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };
    window.location = `${ROOT_URL}/oauth/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchBooks(token) {
    return axios.get(`${ROOT_URL}/api/books`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  },
  fetchUser(token) {
    return axios.get(`${ROOT_URL}/api/user`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  },
  updateUser(user, token) {
    return axios.patch(`${ROOT_URL}/api/user`, user, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  }
};
