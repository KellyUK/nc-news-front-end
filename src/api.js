import axios from "axios";

const request = axios.create({
  baseURL: "https://kelly-davidson-nc-news.herokuapp.com/api/"
});

export const getAllArticles = topic => {
  return request
    .get("articles", { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = article_id => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getAllTopics = () => {
  return request.get("topics", { params: {} }).then(({ data }) => {
    //console.log(data.topics);
    return data.topics;
  });
};
