import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/87742885?v=4",
      html_url: "https://github.com/crscarbrough",
      name: "Claudia Scarbrough",
      login: "crscarbrough",
      public_repos: 33,
      followers: 6,
    },
    followers: [
      {
        login: "brandynwilliams",
        avatar_url: "https://avatars.githubusercontent.com/u/66536877?v=4",
        html_url: "https://github.com/brandynwilliams",
      },
      {
        login: "brandynwilliams",
        avatar_url: "https://avatars.githubusercontent.com/u/66536877?v=4",
        html_url: "https://github.com/brandynwilliams",
      },
      {
        login: "brandynwilliams",
        avatar_url: "https://avatars.githubusercontent.com/u/66536877?v=4",
        html_url: "https://github.com/brandynwilliams",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Github Card</h1>
        <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
        </form>

        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
