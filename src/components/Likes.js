import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    this.setState(prev => {
      return { likes: prev.likes + 1 }
    })
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={this.onLike}>
          <span className="glyphicon glyphicon-thumbs-up"></span> {this.state.likes} likes
      </button>
      </div>
    );
  }
}

export default Likes;