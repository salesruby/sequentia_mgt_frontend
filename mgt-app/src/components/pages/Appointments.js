import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faUpload, faPlusCircle, faCircle, faEdit, faTrash, faTimes, faClock } from '@fortawesome/free-solid-svg-icons'
import {Container, Nav, Button, Table, Form, Col, Modal, InputGroup, FormControl} from 'react-bootstrap'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';


const Appointments= () => {
    const userAvatar = "/images/user-avatar.png"
    const [modalShow, setModalShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        console.log("ham clicked")
        setOpen(true);
        console.log(open)
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Container fluid>
        { open ? <div className="backdrop" onClick={handleDrawerClose}></div>: ""} 
        <nav className="sr-tabs">
            <div className="sr-module">
                <Button variant="default" onClick={handleDrawerOpen} className="hamburger-btn">
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <h2>SMS</h2>
            </div>
            <div className={ open ? "sidebar open" : "sidebar"}>
                <Nav className="sidebar-nav" variant="tabs" defaultActiveKey="#">
                    <Nav.Item>
                        <Nav.Link href="#">Appointmnet Management</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Request Demo Form</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Request Demo Form</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Request Demo Form</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled">
                        Bug Reporting
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            
            <div className="sr-user-avatar">
                <img src={userAvatar} alt="avatar" />
                <h3>Hannah Johnson Inya</h3>
            </div>
        </nav>
        <section className="page-header-section">
            <div className="page-title-container">
                <div className="page-title">
                    <h2>My Appointments</h2> 
                    <span>(47 enteries)</span>
                </div>
                <div className="search">
                    <InputGroup>
                        <FormControl id="search" placeholder="Search " />
                        <InputGroup.Prepend>
                        <InputGroup.Text><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0703 19C15.4886 19 19.0703 15.4183 19.0703 11C19.0703 6.58172 15.4886 3 11.0703 3C6.65203 3 3.07031 6.58172 3.07031 11C3.07031 15.4183 6.65203 19 11.0703 19Z" stroke="#0F111D" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"/>
                        <path d="M21.0707 21L16.7207 16.65" stroke="#0F111D" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"/>
                        </svg>
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                </div>
            </div>
            <div className="page-filters">
                <div className="group-horizontal">
                    <button className="hamburger-btn">
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </button>
                    <div className="tags">
                        
                        <div className="sr-tag">
                            Today
                            <span>
                                <Link to="#">
                                    <FontAwesomeIcon className="ml-2" icon={faTimes} />
                                </Link>
                            </span>
                        </div>
                        <div className="sr-tag">
                            This Week
                            <span>
                                <Link to="#">
                                    <FontAwesomeIcon className="ml-2" icon={faTimes} />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faUpload} /> Export
                    </Button>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        <FontAwesomeIcon icon={faPlusCircle} /> Add Appointment
                    </Button>
                </div>
            </div>
            </section>
            <section className="table-section">
            <div className="table-label"><span>Today</span></div>
            <Table className="text-center" responsive="sm">    
                <tbody>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" />
                        </Form.Group>
                    </td>
                    <td>02:00PM</td>
                    <td>Resolve EndPoint Delivery</td>
                    <td className="text-left" style={{width:"400px"}}>The standard email template width
                    was 600 pixels for desktops, 320px for vertical, 
                    and 480px for horizontal view on mobile devices...</td>
                    <td>
                        <div className="record-status resolved">
                            <FontAwesomeIcon className="table-icon resolved" icon={faCircle} size="xs" /> <span>resolved</span>
                        </div>
                    </td>
                    <td>
                        <div className="table-actions">
                            <Link to="#"><FontAwesomeIcon className="table-icon info" icon={faEdit} size="2x" /></Link>
                            <Link to="#"><FontAwesomeIcon className="table-icon danger" icon={faTrash} size="2x" /></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" />
                        </Form.Group>
                    </td>
                    <td>02:00PM</td>
                    <td>Resolve EndPoint Delivery</td>
                    <td className="text-left">The standard email template width
                    was 600 pixels for desktops, 320px for vertical, 
                    and 480px for horizontal view on mobile devices...</td>
                    <td>
                        <div className="record-status pending">
                            <FontAwesomeIcon className="table-icon pending" icon={faCircle} size="xs" /> Pending
                        </div>
                    </td>
                    <td>
                        <div className="table-actions">
                            <Link to="#"><FontAwesomeIcon className="table-icon info" icon={faEdit} size="2x" /></Link>
                            <Link to="#"><FontAwesomeIcon className="table-icon danger" icon={faTrash} size="2x" /></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" />
                        </Form.Group>
                    </td>
                    <td>02:00PM</td>
                    <td>Resolve EndPoint Delivery</td>
                    <td className="text-left">The standard email template width
                    was 600 pixels for desktops, 320px for vertical, 
                    and 480px for horizontal view on mobile devices...</td>
                    <td>
                        <div className="record-status resolved">
                            <FontAwesomeIcon className="table-icon resolved" icon={faCircle} size="xs" /> resolved
                        </div>
                    </td>
                    <td>
                        <div className="table-actions">
                            <Link to="#"><FontAwesomeIcon className="table-icon info" icon={faEdit} size="2x" /></Link>
                            <Link to="#"><FontAwesomeIcon className="table-icon danger" icon={faTrash} size="2x" /></Link>
                        </div>
                    </td>
                </tr>
                </tbody>
            </Table>
            <div className="table-label"><span>This Week</span></div>
            <Table className="text-center" responsive="sm">    
                <tbody>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" />
                        </Form.Group>
                    </td>
                    <td>02:00PM</td>
                    <td>Resolve EndPoint Delivery</td>
                    <td className="text-left" style={{width:"400px"}}>The standard email template width
                    was 600 pixels for desktops, 320px for vertical, 
                    and 480px for horizontal view on mobile devices...</td>
                    <td>
                        <div className="record-status resolved">
                            <FontAwesomeIcon className="table-icon resolved" icon={faCircle} size="xs" /> <span>resolved</span>
                        </div>
                    </td>
                    <td>
                        <div className="table-actions">
                            <Link to="#"><FontAwesomeIcon className="table-icon info" icon={faEdit} size="2x" /></Link>
                            <Link to="#"><FontAwesomeIcon className="table-icon danger" icon={faTrash} size="2x" /></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" />
                        </Form.Group>
                    </td>
                    <td>02:00PM</td>
                    <td>Resolve EndPoint Delivery</td>
                    <td className="text-left">The standard email template width
                    was 600 pixels for desktops, 320px for vertical, 
                    and 480px for horizontal view on mobile devices...</td>
                    <td>
                        <div className="record-status pending">
                            <FontAwesomeIcon className="table-icon pending" icon={faCircle} size="xs" /> Pending
                        </div>
                    </td>
                    <td>
                        <div className="table-actions">
                            <Link to="#"><FontAwesomeIcon className="table-icon info" icon={faEdit} size="2x" /></Link>
                            <Link to="#"><FontAwesomeIcon className="table-icon danger" icon={faTrash} size="2x" /></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" />
                        </Form.Group>
                    </td>
                    <td>02:00PM</td>
                    <td>Resolve EndPoint Delivery</td>
                    <td className="text-left">The standard email template width
                    was 600 pixels for desktops, 320px for vertical, 
                    and 480px for horizontal view on mobile devices...</td>
                    <td>
                        <div className="record-status resolved">
                            <FontAwesomeIcon className="table-icon resolved" icon={faCircle} size="xs" /> resolved
                        </div>
                    </td>
                    <td>
                        <div className="table-actions">
                            <Link to="#"><FontAwesomeIcon className="table-icon info" icon={faEdit} size="2x" /></Link>
                            <Link to="#"><FontAwesomeIcon className="table-icon danger" icon={faTrash} size="2x" /></Link>
                        </div>
                    </td>
                </tr>
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
            <Form.Control type="text" placeholder="Enter title of appointment" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Description</Form.Label>
            <Form.Control type="email" placeholder="Enter detailed description of appointment" />
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
                        'aria-label': 'change time',
                    }}
                    keyboardIcon={<FontAwesomeIcon icon={faClock}/>}
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
        </Container>
    )
}

export default Appointments