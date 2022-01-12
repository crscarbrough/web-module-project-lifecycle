import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Card</h1>
        <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
        </form>

        <div id="userCard">
          <img src="https://avatars.githubusercontent.com/u/87742885?v=4" />
          <a target="_blank" href="https://github.com/crscarbrough">
            <h3> Claudia Scarbrough</h3>
          </a>
          <p>crscarbrough</p>
          <p>Total Repos: 33</p>
          <p>Total Followers: 6</p>
        </div>

        <div id="followers">
          <div className="follower">
            <img
              width="150px"
              src="https://avatars.githubusercontent.com/u/66536877?v=4"
            />
            <a target="_blank" href="https://github.com/brandynwilliams">
              <p>brandynwilliams</p>
            </a>
          </div>
          <div className="follower">
            <img
              width="150px"
              src="https://avatars.githubusercontent.com/u/66536877?v=4"
            />
            <a target="_blank" href="https://github.com/brandynwilliams">
              <p>brandynwilliams</p>
            </a>
          </div>
          <div className="follower">
            <img
              width="150px"
              src="https://avatars.githubusercontent.com/u/66536877?v=4"
            />
            <a target="_blank" href="https://github.com/brandynwilliams">
              <p>brandynwilliams</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
