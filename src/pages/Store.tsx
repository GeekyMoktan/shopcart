import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
//data
import storeItems from '../data/items';

import StoreItem from '../component/StoreItem'

function Store() {
  return (
    <Fragment>
      <h1>store</h1>
      <Row md={2} xs={1} lg={3} className='g-3' >
        {storeItems.map((item) => (
          <Col key={item.id} >
            <StoreItem {...item} />
          </Col>
        ) )}
      </Row>
    </Fragment>
  );
}

export default Store;
