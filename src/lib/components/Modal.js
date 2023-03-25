import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../css/styles.css";

function Modal({
  isOpen,
  onRequestClose,
  children,
  closeText,
  closeClass,
  showClose,
  fadeDuration,
  fadeDelay,
}) {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  const closeModal = (event) => {
    if (event) {
      event.preventDefault();
    }
    onRequestClose();
  };

  const handleDocumentKeydown = (event) => {
    if (event.which === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
      document.addEventListener("keydown", handleDocumentKeydown);
    } else {
      setDisplay(false);
    }
    return () => {
      document.removeEventListener("keydown", handleDocumentKeydown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (display) {
      const timer = setTimeout(() => {
        setShow(true);
      }, fadeDelay * fadeDuration);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setShow(false);
    }
  }, [display, fadeDuration, fadeDelay]);

  const modalContentStyle = {
    transition: `opacity ${fadeDuration}ms ${fadeDelay * fadeDuration}ms`,
  };

  return (
    <div
      className={`modal-container ${isOpen ? "open" : ""}`}
      onClick={closeModal}
      onKeyDown={handleDocumentKeydown}
    >
      <div
        className={`modal-content ${show ? "show" : ""}`}
        ref={modalRef}
        style={modalContentStyle}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {children}
        {showClose && (
          <button
            type="button"
            className={`close-button ${closeClass}`}
            onClick={closeModal}
            onKeyDown={handleDocumentKeydown}
          >
            <span>{closeText}</span>
          </button>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  closeText: PropTypes.string,
  closeClass: PropTypes.string,
  showClose: PropTypes.bool,
  fadeDuration: PropTypes.number,
  fadeDelay: PropTypes.number,
};

Modal.defaultProps = {
  closeText: "x",
  closeClass: "",
  showClose: true,
  fadeDuration: 200,
  fadeDelay: 0.5,
};

export default Modal;
