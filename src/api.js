import axios from "axios";

const request = axios.create({
  baseURL: "https://kelly-davidson-nc-news.herokuapp.com/api/"
});

export const getAllArticles = () => {
  return request.get("articles", { params: {} }).then(({ data }) => {
    return data.articles;
  });
};

export const getAllTopics = () => {
  return request.get("topics", { params: {} }).then(({ data }) => {
    return data.topics;
  });
};
