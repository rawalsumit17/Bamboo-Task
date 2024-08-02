import axios from "axios";

const URL = "http://localhost:5000"; // this is api url [backend url]

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(error);
  }
};
