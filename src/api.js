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

export const getCommentsByArticleId = article_id => {
  return request.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getAllTopics = () => {
  return request.get("topics", { params: {} }).then(({ data }) => {
    return data.topics;
  });
};

export const getUserByUsername = username => {
  return request.get(`users/${username}`).then(({ data }) => {
    return data.user;
  });
};
