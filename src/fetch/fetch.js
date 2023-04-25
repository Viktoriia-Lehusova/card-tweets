import axios from 'axios';

const BASE_URL =
  'https://643926744660f26eb1ab9520.mockapi.io/api/contacts/tweets';

export const fetchUsers = async () => {
  try {
    const data = await axios.get(`${BASE_URL}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchUserId = async ({ id, body }) => {
  try {
    const data = await axios.put(`${BASE_URL}/${id}`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};
