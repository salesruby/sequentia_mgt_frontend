import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faAngleDown,
  faCircle,
  faTrash,
  faClock,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Table, Form, Col, Modal } from "react-bootstrap";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import AdminLayout from "../layouts/AdminLayout";
import { ModuleHeader } from "../helpers/components/dynamicComponents";
import { fetchDemoRequests } from "../../store/actions/demoRequestsActions";

const DemoRequests = () => {
  // Dispatch
  const dispatch = useDispatch();

  // State
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const menuOpen = Boolean(anchorEl);

  // Redux Store
  const demoRequests = useSelector((state) => state.demoRequests.demoRequests);

  // Methods
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleActionsMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleActionsMenuClose = () => {
    setAnchorEl(null);
  };

  const Tags = [
    {
      Text: "Resolved",
    },
    {
      Text: "Pending",
    },
  ];

  const actionButtons = [
    {
      variant: "secondary",
      icon: <FontAwesomeIcon icon={faUpload} />,
      Text: "Export",
    },
  ];

  const tableHeaders = [
    <Form.Check type="checkbox" />,
    "Name",
    "Email",
    "Phone Number",
    "Company Name",
    "Status",
    "",
  ];

  const token = useSelector((state) => state.userLogin.userToken);
  useEffect(() => {
    dispatch(fetchDemoRequests(token));
    return () => {
      //
    };
  }, [dispatch, token]);

  return (
    <AdminLayout>
      <ModuleHeader
        ModuleHeaderText="Demo Requests"
        ModuleHeaderInfo={demoRequests && demoRequests.length + " enteries"}
        moduleTags={Tags}
        actionButtons={actionButtons}
      />
      <section className="table-section">
        <Table className="text-center" responsive="sm">
          <thead>
            {tableHeaders.length > 0 &&
              tableHeaders.map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
          </thead>
          <tbody>
            {demoRequests &&
              demoRequests.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </td>
                    <td>
                      {row.first_name} {row.last_name}
                    </td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.company}</td>
                    <td>
                      <div
                        className={
                          "record-status " +
                          (row.status === 0 ? "pending" : "resolved")
                        }
                      >
                        <FontAwesomeIcon
                          className={
                            "table-icon table-fa-circle-icon " +
                            (row.status === 0 ? "pending" : "resolved")
                          }
                          icon={faCircle}
                          size="xs"
                        />{" "}
                        <span>
                          {row.status === 0 ? "Pending" : "Resolved"}{" "}
                        </span>{" "}
                        <FontAwesomeIcon
                          className={
                            "table-icon " +
                            (row.status === 0 ? "pending" : "resolved")
                          }
                          icon={faAngleDown}
                          size="lg"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="table-actions hide-on-screen-width-600 ">
                        <Link to="#">
                          <FontAwesomeIcon
                            className="table-icon danger"
                            icon={faTrash}
                            size="2x"
                          />
                        </Link>
                      </div>
                      <IconButton
                        aria-label="more"
                        aria-controls="actions-menu"
                        aria-haspopup="true"
                        onClick={handleActionsMenuClick}
                        className="show-on-screen-width-600 "
                      >
                        <FontAwesomeIcon
                          className="table-icon"
                          icon={faEllipsisV}
                          size="lg"
                        />
                      </IconButton>
                      <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={menuOpen}
                        onClose={handleActionsMenuClose}
                      >
                        <MenuItem key="hidden" onClick={handleActionsMenuClose}>
                          hidden table data
                        </MenuItem>
                        <MenuItem key="edit" onClick={handleActionsMenuClose}>
                          <FontAwesomeIcon
                            className="table-icon danger"
                            icon={faTrash}
                            size="md"
                          />{" "}
                          delete
                        </MenuItem>
                      </Menu>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </section>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lmd"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="sr-modal-header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="text-left sr-form">
            <Form.Group controlId="fullname">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title of appointment"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter detailed description of appointment"
              />
            </Form.Group>

            <Form.Row>
              <Form.Label>State</Form.Label>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardTimePicker
                    id="time-picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                    keyboardIcon={<FontAwesomeIcon icon={faClock} />}
                  />
                </MuiPickersUtilsProvider>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option>Pending</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>SAVE APPOINTMENT</Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
};

export default DemoRequests;
