import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Crud_Buttons extends Component {
  render() {
    return (
      <div>
        <span
          class="pull-right"
          data-toggle="tooltip"
          data-placement="top"
          title="Add {{model_name}}"
        >
          <a
            href="{{model_name}}/create"
            class="btn btn-info btn-fab"
            role="button"
          >
            <i class="material-icons">add</i>{' '}
          </a>
        </span>
        <span
          class="pull-right"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete {{model_name}}"
        >
          <Button
            id="open-delete-{{model_name}}-modal-button"
            type="button"
            class="btn btn-danger btn-fab"
            data-toggle="modal"
            data-target="#confirm-delete-modal"
          >
            <i class="material-icons">delete</i>
          </Button>
        </span>
      </div>
    );
  }
}

export default Crud_Buttons;
