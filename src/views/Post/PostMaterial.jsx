import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';
import './index';

function PostMaterial() {
  return (
    <div>
      <h3>Materials</h3>
      <CardGroup className="materials">
        <Card className="materials">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Glass</Card.Title>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1550955070-e5248f1301ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Cardboard</Card.Title>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Paper</Card.Title>
        </Card>
      </CardGroup>
      <CardGroup className="materials">
        <Card className="materials">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1561924018-4f213bdc7364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Aluminum cans</Card.Title>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Plastic bottles</Card.Title>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1576834975354-ee694be1f0d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Batteries</Card.Title>
        </Card>
      </CardGroup>
      <CardGroup className="materials">
        <Card className="materials">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1514212586585-6a0e1838e7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Coffee capsules</Card.Title>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1573209680076-bd7ec7007616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Wood</Card.Title>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1524404794194-16bae22718c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=201&q=160"
          />
          <Card.Title className="card-title">Fabric & clothes</Card.Title>
        </Card>
      </CardGroup>
    </div>
  );
}

export default PostMaterial;
