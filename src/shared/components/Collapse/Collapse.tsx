import React, { useState } from 'react';
import './style.css';
import { ButtonShared } from '../..';

interface CollapseProps {
  content: React.ReactNode;
}

const CollapseShared: React.FC<CollapseProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapseClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <ButtonShared onClick={handleCollapseClick}>Add Guide</ButtonShared>
      <div className={`collapse-content ${isOpen ? 'collapse-content-open' : ''}`}>
        {isOpen && <div className="collapse-inner-content">{content}</div>}
      </div>
    </div>
  );
};

export default CollapseShared;
