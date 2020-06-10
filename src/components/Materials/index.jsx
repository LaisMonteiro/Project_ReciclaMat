import React from 'react';
import './style.scss';

const PostMaterials = () => {
  return (
    <div className="materials-container">
      <section className="materials-row">
        <figure className="box">
          <img
            className="material-img"
            src="https://images.unsplash.com/photo-1570000819085-e4db8757d5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
            alt="glass"
          />
          <figcaption className="material-name">Glass</figcaption>
        </figure>
        <figure className="box">
          <img
            className="material-img"
            src="https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
            alt="plastic"
          />
          <figcaption className="material-name">Plastic</figcaption>
        </figure>
        <figure className="box">
          <img
            className="material-img"
            src="https://images.unsplash.com/photo-1573209680076-bd7ec7007616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
            alt=""
          />
          <figcaption className="material-name">Wooden pallets</figcaption>
        </figure>
      </section>
      <section className="materials-row">
        <figure className="box">
          <img
            className="material-img"
            src="https://images.unsplash.com/photo-1576670392551-a209604d52be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
            alt=""
          />
          <figcaption className="material-name">Aluminium</figcaption>
        </figure>
        <figure className="box">
          <img
            className="material-img"
            src="https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
            alt=""
          />
          <figcaption className="material-name">Paper and cardboard</figcaption>
        </figure>
        <figure className="box">
          <img
            className="material-img"
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
            alt=""
          />
          <figcaption className="material-name">Clothes and fabric</figcaption>
        </figure>
      </section>
    </div>
  );
};
export default PostMaterials;
