import React, {useEffect} from 'react';
import './modal.css';

const Modal = (props) => {
  const handleUserKeyPress = event => {
    const { key } = event;
    if (key === "ArrowRight") {
      props.nextImg();
    } else if (key === "ArrowLeft") {
      props.prevImg();
    } else if (key === "Escape") {
      props.closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <>
      <div id="myModal" className="modal" onClick={props.closeModal}>
        <a className="prev" onClick={(e) => {
          e.stopPropagation();
          props.prevImg();
        }}>
          &#10094;
        </a>
        <a className="next" onClick={(e) => {
          e.stopPropagation();
          props.nextImg();
        }}>
          &#10095;
        </a>
        <img className="modal-content" id="img01" src={props.img} alt={props.id} />
      </div>
    </>
  );
};

export default Modal;
