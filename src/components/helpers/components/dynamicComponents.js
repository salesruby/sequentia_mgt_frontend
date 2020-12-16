import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faUpload,
  faPlusCircle,
  faCircle,
  faEdit,
  faTrash,
  faTimes,
  faClock,
  faSearch,
  faArrowLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Nav,
  Button,
  Table,
  Form,
  Col,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
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

export const AuthHeader = (props) => {
  return (
    <div className="header">
      <h1>{props.headerTitle}</h1>
      <p>{props.headerMsg}</p>
    </div>
  );
};

export const AppModal = (props) => {
  return (
    <div className="header">
      <h1>{props.headerTitle}</h1>
      <p>{props.headerMsg}</p>
    </div>
  );
};

export const AppNav = (props) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const handleDrawerOpen = () => {
    setSideNavOpen(true);
  };
  const handleDrawerClose = () => {
    setSideNavOpen(false);
  };

  return (
    <>
      {sideNavOpen ? (
        <div className="backdrop" onClick={handleDrawerClose}></div>
      ) : (
        ""
      )}
      <nav className="sr-tabs">
        <div className="sr-module">
          <Button
            variant="default"
            onClick={handleDrawerOpen}
            className="hamburger-btn show-on-screen-width-1250"
          >
            <FontAwesomeIcon icon={faAlignLeft} />
          </Button>
          {props.Logo && props.Logo}
        </div>
        <div className={sideNavOpen ? "sidebar open" : "sidebar"}>
          <div className="sidebar-header">
            {props.Logo && props.Logo}
            <FontAwesomeIcon onClick={handleDrawerClose} icon={faArrowLeft} />
          </div>
          <Nav className="sidebar-nav" variant="tabs" defaultActiveKey="#0">
            {props.NavLinks.map((link, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link href={link.href + index}>{link.Text}</Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </div>

        <div className="sr-user-avatar">
          <img src={props.user.userAvatar} alt="avatar" />
          <h3>{props.user.name}</h3>
        </div>
      </nav>
    </>
  );
};

export const ModuleHeader = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const showHideSearchBar = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <section className="page-header-section">
      <div className="page-title-container">
        <div className={searchOpen ? "page-title hide" : "page-title"}>
          <h2>{props.ModuleHeaderText}</h2>
          <span>
            {props.ModuleHeaderInfo && "(" + props.ModuleHeaderInfo + ")"}
          </span>
        </div>
        <div
          className="search"
          style={searchOpen ? { width: 100 + "%" } : { width: "" }}
        >
          <InputGroup>
            <FormControl
              id="search"
              className={searchOpen ? "show" : "hide"}
              placeholder="Search "
            />
          </InputGroup>
          <span className="show-on-screen-width-600">
            {!searchOpen ? "Search" : ""}
          </span>
          <Button onClick={showHideSearchBar}>
            <FontAwesomeIcon icon={searchOpen ? faTimes : faSearch} />
          </Button>
        </div>
      </div>
      <div className="page-filters">
        <div className="group-horizontal">
          <button className="hamburger-btn">
            <FontAwesomeIcon icon={faAlignLeft} />
          </button>
          {props.moduleTags && (
            <div className="tags">
              {props.moduleTags.map((tag, index) => {
                return (
                  <div key={index} className="sr-tag">
                    {tag.Text}
                    <span>
                      <Link to="#">
                        <FontAwesomeIcon className="ml-2" icon={faTimes} />
                      </Link>
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {props.actionButtons && (
          <div className="action-buttons">
            {props.actionButtons.map((button, index) => {
              return (
                <Button key={index} variant={button.variant}>
                  {button.icon} {button.Text}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
