import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Button from 'react-bootstrap/lib/Button';

class Mouse_List extends Component {
    render() {
        return <div class="well bs-component">
            <div class="page-header">
                <h4>Mice</h4>
            </div>
            mouse/mouse_table
<div class="row">
                <div class="col-md-6">
                    <span class="pull-left" data-toggle="tooltip" data-placement="top" title="Assign cage">
                        <Button id="cage-mouse-button" type="button" bsSytle="btn btn-primary" data-toggle="modal" data-target="#cage-mice-together-modal" >
                            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                        </Button>
                    </span>
                    <span class="pull-left" data-toggle="tooltip" data-placement="top" title="Create breeding">
                        <Button id="breed-mouse-button" type="button" bsSytle="btn btn-danger" >
                            <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
                        </Button>
                    </span>

                    <span class="pull-left" data-toggle="tooltip" data-placement="top" title="Assign status">
                        <Button id="open-status-mouse-modal-button" type="button" bsSytle="btn btn-primary" data-toggle="modal" data-target="#set-mice-status-modal">
                            <i class="fa fa-meh-o fa-2x" aria-hidden="true"></i>
                        </Button>
                    </span>
                </div>
                <div class="col-md-6 ">
                    crud_buttons
    </div>
            </div>
            mouse/mouse_cage_modal
mouse/mouse_status_modal
common/delete_confirmation_modal
</div>
    }
}

export default Mouse_List;
