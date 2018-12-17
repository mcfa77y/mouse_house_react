import React from 'react';
import { Button, Form } from 'react-bootstrap';
const handleSubmit = e => {
  e.preventDefault();
};
const Grid_Form = () => (
  <Form id="grid-fields" onSubmit={handleSubmit}>
    <Form.Group controlId="csvUri">
      <Form.Label>Grid data CSV</Form.Label>
      <Form.Control
        type="text"
        placeholder="/path/to/data.csv"
        defaultValue="/Users/joelau/Downloads/ImageMappingData/Platemap.csv"
      />
    </Form.Group>
    <Form.Group controlId="image_dir_uri">
      <Form.Label>Image directory</Form.Label>
      <Form.Control
        type="text"
        placeholder="/path/to/images"
        defaultValue="/Users/joelau/Downloads/ImageMappingData/Tubulin"
      />
    </Form.Group>
    <Form.Group controlId="metadata_csv_uri">
      <Form.Label>Metadata</Form.Label>
      <Form.Control
        type="text"
        placeholder="/path/to/metadata.csv"
        defaultValue="/Users/joelau/Downloads/SP20299.csv"
      />
    </Form.Group>
    <Form.Group controlId="prefix">
      <Form.Label>Prefix</Form.Label>
      <Form.Control
        type="text"
        placeholder="Tubulin_"
        defaultValue="Tubulin_"
      />
    </Form.Group>
    <Form.Group controlId="extension">
      <Form.Label>Extension</Form.Label>
      <Form.Control type="text" placeholder=".jpg" defaultValue=".jpg" />
    </Form.Group>
    <Button id="submit" type="submit" class="btn btn-primary">
      Submit
    </Button>
  </Form>
);

export default Grid_Form;
