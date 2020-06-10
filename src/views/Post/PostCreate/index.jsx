import React from 'react';
import './style.scss';
import PostMaterials from './../../../components/Materials';

import './style.scss';
import SimpleMap from '../../../components/Map/SimpleMap';

const PostCreate = () => {
  return (
    <div className="post-create-container">
      <p className="title">Create your post</p>

      <section className="button-section">
        <span className="span">
          <button className="post-add-buttons">Products</button>
        </span>
        <span className="span">
          <button className="post-add-buttons">Donate</button>
        </span>
        <span className="span">
          <button className="post-add-buttons">Receive</button>
        </span>
      </section>
      <br />

      {/* <PostMaterials /> */}
      <p className="location">Select your location</p>

      <div className="map-container">
        <SimpleMap />
      </div>
      <span className="post-pos">
        <button className="post">Post</button>
      </span>
    </div>
  );
};
export default PostCreate;
