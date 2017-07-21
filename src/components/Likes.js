import React from 'react';

class Likes extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={this.props.onLike}>
          <span className="glyphicon glyphicon-thumbs-up"></span> {this.props.likes} likes
      </button>
      </div>
    );
  }
}

export default Likes;