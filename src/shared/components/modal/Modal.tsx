import React, { useState } from 'react';
import './modal.css'; // Arquivo de estilo CSS para o modal
import { EditTwoTone } from '@ant-design/icons';

interface ModalSharedProps {
  content: React.ReactNode;
}

const ModalShared: React.FC<ModalSharedProps> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a onClick={showModal}>
        <EditTwoTone />
      </a>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Basic Modal</h3>
              <button className="modal-close" onClick={handleCancel}>
                X
              </button>
            </div>
            <div className="modal-body">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalShared;
