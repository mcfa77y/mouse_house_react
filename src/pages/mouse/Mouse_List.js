import React from 'react';
import { Button, Card, Row, Col, Tooltip, Popover } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Crud_Buttons from '../partials/Crud_Buttons';

// class Mouse_List extends Component {
//   render() {
//     return (
//       <Card>
//         <Card.Title>Mice</Card.Title>
//         mouse/mouse_table
//         <Row>
//           <Col md={6}>
//             <Popover
//               placement="top"
//               overlay={<Tooltip id="tooltip-1">Assign cage</Tooltip>}
//             >
//               <Button
//                 id="cage-mouse-button"
//                 type="button"
//                 bsStyle="primary"
//                 data-toggle="modal"
//                 data-target="#cage-mice-together-modal"
//               >
//                 <FontAwesome name="home" size="2x" aria-hidden="true" />
//               </Button>
//             </Popover>
//             <Popover
//               placement="top"
//               overlay={<Tooltip id="tooltip-2">Create breeding</Tooltip>}
//             >
//               <Button id="breed-mouse-button" type="button" bsStyle="danger">
//                 <FontAwesome name="heart" size="2x" aria-hidden="true" />
//               </Button>
//             </Popover>

//             <Popover
//               placement="top"
//               overlay={<Tooltip id="tooltip-3">Assign status</Tooltip>}
//             >
//               <Button
//                 id="open-status-mouse-modal-button"
//                 type="button"
//                 bsStyle="primary"
//                 data-toggle="modal"
//                 data-target="#set-mice-status-modal"
//               >
//                 <FontAwesome name="meh-o" size="2x" aria-hidden="true" />
//               </Button>
//             </Popover>
//           </Col>
//           <Col md={6}>{Crud_Buttons}</Col>
//         </Row>
//         mouse/mouse_cage_modal<br />mouse/mouse_status_modal<br />
//         common/delete_confirmation_modal
//       </Card>
//     );
//   }
// }

const Mouse_List = ({ name }) => (
  <Card>
    <Card.Title>Mice</Card.Title>
    mouse/mouse_table
    <Row>
      <Col md={6}>
        <Popover
          placement="top"
          overlay={<Tooltip id="tooltip-1">Assign cage</Tooltip>}
        >
          <Button
            id="cage-mouse-button"
            type="button"
            bsStyle="primary"
            data-toggle="modal"
            data-target="#cage-mice-together-modal"
          >
            <FontAwesome name="home" size="2x" aria-hidden="true" />
          </Button>
        </Popover>
        <Popover
          placement="top"
          overlay={<Tooltip id="tooltip-2">Create breeding</Tooltip>}
        >
          <Button id="breed-mouse-button" type="button" bsStyle="danger">
            <FontAwesome name="heart" size="2x" aria-hidden="true" />
          </Button>
        </Popover>

        <Popover
          placement="top"
          overlay={<Tooltip id="tooltip-3">Assign status</Tooltip>}
        >
          <Button
            id="open-status-mouse-modal-button"
            type="button"
            bsStyle="primary"
            data-toggle="modal"
            data-target="#set-mice-status-modal"
          >
            <FontAwesome name="meh-o" size="2x" aria-hidden="true" />
          </Button>
        </Popover>
      </Col>
      <Col md={6}>{Crud_Buttons}</Col>
    </Row>
    mouse/mouse_cage_modal
    <br />
    mouse/mouse_status_modal
    <br />
    common/delete_confirmation_modal
  </Card>
);

export default Mouse_List;
