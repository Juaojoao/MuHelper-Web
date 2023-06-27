import { useState } from 'react';
import './styles.css';
import { Sidebar } from './Sidebar';
import { Banner } from '../banner/banner';

type ContentDefaultProps = {
  children: React.ReactNode;
};

export const ContentDefault = ({ children }: ContentDefaultProps) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div className="content-default">
      <Sidebar isSidebarActive={isSidebarActive} handleSidebarToggle={handleSidebarToggle} />
      <div className={`page-content ${!isSidebarActive ? 'sidebar-active' : ''}`}>
        <Banner />
        {children}
      </div>
    </div>
  );
};
