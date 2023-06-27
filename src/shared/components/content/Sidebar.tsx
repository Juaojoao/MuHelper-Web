import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SubMenu } from './SubMenu';
import { logoData, menuItens } from '../dataComponents/dataComponents';

const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 11;
  background: rgb(21, 23, 28);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 2rem;
  gap: 40px;
  height: 60px;
  box-shadow: #a8a8a8 0px 0px 10px 0px;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav<{ sidebar: boolean }>`
  background: #15171c;
  width: 250px;
  height: 95vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 57px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms ease-in-out;
  z-index: 10;
  padding: 10px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

type SidebarProps = {
  name: string;
  path?: string;
  icon?: JSX.Element;
  subMenu?: [];
};

export const Sidebar = ({
  isSidebarActive,
  handleSidebarToggle,
}: {
  isSidebarActive: boolean;
  handleSidebarToggle: () => void;
}) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
    handleSidebarToggle();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div className="logo">
            <a href={logoData.link}>
              <img src={logoData.logo} alt={logoData.title} width={80} />
            </a>
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {menuItens.map((item: SidebarProps, index: number) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
