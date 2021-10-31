import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import PropTypes from "prop-types";
import defaultImg from "./icon-alert.png";

function ToastComponent({
  headerText,
  show,
  setShow,
  smallText,
  mainText,
  img = defaultImg,
}) {
  return (
    <ToastContainer className="p-3" position="bottom-center">
      <Toast show={show} onClose={setShow} animation>
        <Toast.Header>
          <img src={img} className="rounded me-2" alt="" />
          <strong className="me-auto">{headerText}</strong>
          <small>{smallText}</small>
        </Toast.Header>
        <Toast.Body>{mainText}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

ToastComponent.propTypes = {
  headerText: PropTypes.string,
  show: PropTypes.bool,
  setShow: PropTypes.func,
  smallText: PropTypes.string,
  mainText: PropTypes.string,
  img: PropTypes.string,
};

export default ToastComponent;
