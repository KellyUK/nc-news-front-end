import React, { Component } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";
import coding from "../images/coding.jpeg";
import cooking from "../images/cooking.jpeg";
import football from "../images/football.jpeg";
import article from "../images/article.jpeg";
import styles from "../style/Home.module.css";
import { Link } from "@reach/router";

class Home extends Component {
  state = {
    articles: [],
    article_id: null,
    isLoading: true,
    sort_by: "votes",
    loggedIn: "",
    err: false
  };

  handleSort = event => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };

  fetchArticles = () => {
    const { topic } = this.props;

    getAllArticles(topic)
      .then(articles =>
        this.setState({
          articles: articles,
          isLoading: false
        })
      )
      .catch(console.dir);
  };

  componentDidMount() {
    const { topic } = this.props;
    getAllArticles(topic).then(articles =>
      this.setState({
        articles: articles,
        isLoading: false
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort_by } = this.state;
    if (prevProps.topic !== topic || prevState.sort_by !== sort_by) {
      getAllArticles(topic, sort_by)
        .then(articles =>
          this.setState({
            articles: articles,
            isLoading: false
          })
        )
        .catch(err => {
          this.setState({ err: false });
        });
    }
  }

  render() {
    const { articles, isLoading, err } = this.state;

    return err ? (
      <Error err={err.response.data.message} />
    ) : isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <section className={styles.homePageImages}>
          <div className={styles.container}>
            <img className={styles.homeImages} src={coding} alt="coding" />
            <Link to="/topics/coding">
              <button>View Coding Articles</button>
            </Link>
          </div>
          <div className={styles.container}>
            <img className={styles.homeImages} src={cooking} alt="cooking" />
            <Link to="/topics/cooking">
              <button>View Cooking Articles</button>
            </Link>
          </div>
          <div className={styles.container}>
            <img className={styles.homeImages} src={football} alt="football" />
            <Link to="/topics/football">
              <button>View Football Articles</button>
            </Link>
          </div>
          <div className={styles.container}>
            <img className={styles.homeImages} src={article} alt="football" />
            <Link to="/topics/article">
              <button>View All Articles</button>
            </Link>
            <h3 className={styles.popularTitle}>Popular Articles</h3>
          </div>
        </section>

        {articles.map(article => (
          <ArticleCard
            key={article.article_id}
            article={article}
            article_id={article.article_id}
          />
        ))}
      </div>
    );
  }
}

export default Home;
