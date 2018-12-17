import React from 'react';
import { Card } from 'react-bootstrap';

import Button_Modal from '../partials/Button_Modal';
import Grid_Form from './Grid_Form';

const form = Grid_Form();

const Grid_Index = () => (
  <React.Fragment>
    <Card>
      <Card.Title>Grid</Card.Title>
      <Card.Body>
        <div id="results" />
      </Card.Body>
    </Card>
    <Button_Modal button_title="Input" modal_title="Inputs" body={form} />
  </React.Fragment>
);

export default Grid_Index;
