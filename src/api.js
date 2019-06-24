import axios from "axios";

const baseURL = "https://kelly-davidson-nc-news.herokuapp.com/api/";

export const getAllArticles = () => {
  return axios.get(`${baseURL}articles`).then(({ data }) => {
    console.log(data, "...");
    return data.articles;
  });
};
