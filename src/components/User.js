import React from "react";

class User extends React.Component {
  render() {
    return (
      <div id="userCard">
        <img src="https://avatars.githubusercontent.com/u/87742885?v=4" />
        <a target="_blank" href="https://github.com/crscarbrough">
          <h3> Claudia Scarbrough</h3>
        </a>
        <p>crscarbrough</p>
        <p>Total Repos: 33</p>
        <p>Total Followers: 6</p>
      </div>
    );
  }
}

export default User;
