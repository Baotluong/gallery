import React, { useState } from 'react';

import './App.css';
import Modal from './modal';
import Card from './Card';
import Images from './images';

const defaultModal = { show: false };

function App() {
  const [modal, setModal] = useState(defaultModal);

  const closeModal = () => {
    setModal(defaultModal);
  };

  const openModal = (index) => {
    setModal({ show: true, img: Images[index].url, index });
  };

  const prevImg = () => {
    let prevIndex = (modal.index + Images.length - 1) % Images.length;
    while(!Images[prevIndex].url) prevIndex--;
    openModal(prevIndex);
  }

  const nextImg = () => {
    let nextIndex = (modal.index + 1) % Images.length;
    while(!Images[nextIndex].url) nextIndex++;
    openModal(nextIndex);
  }
 
  return (
    <div>
      { modal.show &&
        <Modal {...modal} prevImg={prevImg} nextImg={nextImg} closeModal={closeModal} /> }
      <div className="photo-grid">
        {
          Images.map((image, index) => {
            return <Card
              openModal={() => openModal(index)}
              url={image.url}
              size={image.size}
              id={image.id}
              text={image.text}
            />;
          })
        }
      </div>
    </div>
  );
}

export default App;
