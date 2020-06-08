import React from 'react';
import './style.scss';
import SimpleMap from '../../components/Map/SimpleMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const PostView = () => {
  return (
    <div>
      <h1>Página de Post view</h1>

      <SimpleMap />
    </div>
  );
};
export default PostView;

// 3 button. map.
// button publicar.
