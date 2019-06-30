import axios from "axios";

const request = axios.create({
  baseURL: "https://kelly-davidson-nc-news.herokuapp.com/api/"
});

export const getAllArticles = (topic, sort_by) => {
  return request
    .get("articles", {
      params: { topic: topic, sort_by: sort_by }
    })
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

export const patchArticleVotes = (article_id, { inc_votes: voteChange }) => {
  return request
    .patch(`articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.article;
    })
    .catch(console.dir);
};

export const patchCommentVotes = (comment_id, { inc_votes: voteChange }) => {
  return request
    .patch(`comments/${comment_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.comment;
    })
    .catch(console.dir);
};

export const postCommentOnArticle = (
  article_id,
  { author: username, body }
) => {
  return request
    .post(`articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentById = ({ comment_id }) => {
  return request
    .delete(`comments/${comment_id}`)
    .then(({ data }) => {
      return data.comment;
    })
    .catch(console.dir);
};
