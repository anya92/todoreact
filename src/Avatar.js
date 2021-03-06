import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import avatarSrc from '../public/avatar.png';

class Avatar extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={10} />
          <Col xs={2}>
            <Image src={avatarSrc} thumbnail circle />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Avatar;
