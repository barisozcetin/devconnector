import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired
  };

  render() {
    const { profile } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {!isEmpty(profile.location) && <p>{profile.location}</p>}
              <p>
                {!isEmpty(profile.website) && (
                  <Link
                    className="text-white p-2"
                    to={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </Link>
                )}
                {!isEmpty(profile.social && profile.social.twitter) && (
                  <Link
                    className="text-white p-2"
                    to={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </Link>
                )}
                {!isEmpty(profile.social && profile.social.facebook) && (
                  <Link
                    className="text-white p-2"
                    to={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </Link>
                )}
                {!isEmpty(profile.social && profile.social.linkedin) && (
                  <Link
                    className="text-white p-2"
                    to={profile.social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </Link>
                )}
                {!isEmpty(profile.social && profile.social.instagram) && (
                  <Link
                    className="text-white p-2"
                    to={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
