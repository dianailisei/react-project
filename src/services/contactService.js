import axios from "axios";

export async function getAllContacts(payload) {
  axios.defaults.headers.common = {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3MSwiZXhwIjoxNjM5NDY2NjE1fQ.9vE-glLQtV2NT3gNMkqeRkrWWZAhYCqX-_ibs7lC8GY`,
  };
  return axios.get(`https://api.dev.pastorsline.com/api/contacts.json`, {
    params: {
      ...payload,
      companyId: 171,
    },
  });
}
