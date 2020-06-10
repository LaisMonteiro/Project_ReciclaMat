import React, { useState } from 'react';
import SimpleMap from '../../../components/Map/SimpleMap';
import { createPost } from '../../../services/posts';
import PostProducts from './../../../components/CreateProducts';
import './style.scss';

const PostCreate = (props) => {
  const [formData, setFormData] = useState({
    description: '',
    image: null,
    location: [0, 0],
  });

  const handleFormData = (name, value) => {
    const data = {...formData};
    console.log(name, value);
    setFormData({
      ...data,
      [name]: value
    });
  };

  const handleLocation = (lat, lng) => {
    const data = {...formData};
    console.log(lat, lng);
    setFormData({
      ...data,
      location: [lat, lng]
    });
  };

  const handleSubmitForm = () => {
    createPost({...formData, userCreator: props.loggedUser });
  };

  return (
    <div className="post-create-container">
      <section className="button-section">
        <button className="post-add-buttons">Products</button>
        <button className="post-add-buttons">Donate</button>
        <button className="post-add-buttons">Receive</button>
      </section>
      <br />
      {/* <PostMaterials /> */}
      <PostProducts handleFormData={handleFormData} />
      <section className="location-container">
        <p>Select your location</p>

        {/* map */}
        <div className="map-container">
          <SimpleMap handleLocation={handleLocation} />
        </div>
      </section>

      <button className="post-button" onClick={handleSubmitForm}>
        Post
      </button>
    </div>
  );
};
export default PostCreate;
