import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      error: "",
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.setState({ post: response.data });
          this.setState({ error: "" });
          this.setState({ loading: false });
        })
        .catch(() => {
          console.log("error");
          this.setState({ post: [] });
          this.setState({ error: "Something went wrong" });
          this.setState({ loading: false });
        });
    }, 2000);
  }

  render() {
    const newPost = this.state.post.map(function (posts) {
      return <li key={posts.id}>{posts.body}</li>;
    });

    return (
      <div className="App">
        {this.state.loading ? "Loading..." : newPost}
        {this.state.error ? "Something went wrong..." : null}
      </div>
    );
  }
}

export default App;
