import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Button_Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.button_title}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modal_title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
Button_Modal.propTypes = {
  button_title: PropTypes.string.isRequired,
  modal_title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired
};
export default Button_Modal;

/*
<div class="card" >
  <div class="card-body">
    <h5 class="card-title">Results</h5>
    <div id="results"></div>
  </div>
</div>


*/
