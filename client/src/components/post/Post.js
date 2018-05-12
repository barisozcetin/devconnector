import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import { getPost } from "../../actions/postActions";

export class Post extends Component {
  static propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent =
      post === null || loading || Object.keys(post).length === 0 ? (
        <Spinner />
      ) : (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </div>
      );
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back to feed
              </Link>
            </div>
            <div className="col-md-12">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
