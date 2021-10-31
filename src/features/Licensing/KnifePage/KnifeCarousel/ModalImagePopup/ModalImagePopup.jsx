import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import css from "./ModalImagePopup.module.css";

function ModalImagePopup({ show, setShow, img }) {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={css["product-image-modal"]}
        centered
      >
        <Modal.Body>
          <img className={css["product-image"]} src={img} />
        </Modal.Body>
      </Modal>
    </>
  );
}

ModalImagePopup.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  img: PropTypes.string,
};

export default ModalImagePopup;
