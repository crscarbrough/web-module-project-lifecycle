import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div className="follower">
        <img
          width="150px"
          src="https://avatars.githubusercontent.com/u/66536877?v=4"
        />
        <a target="_blank" href="https://github.com/brandynwilliams">
          <p>brandynwilliams</p>
        </a>
      </div>
    );
  }
}

export default Follower;
