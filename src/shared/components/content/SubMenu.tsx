import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease, border-left 0.3s ease;

  &:hover {
    background: rgb(26, 56, 148);
    border-left: 4px solid #2196f3;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenuContainer = styled.div<{ isOpen: boolean }>`
  overflow: auto;
  max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
  border-radius: 0 0 0 10px;
  transition: max-height 0.3s ease, border-radius 0.3s ease;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background: #2196f3;
  }
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: rgb(26, 56, 148);
    cursor: pointer;
  }
`;

type MenuItem = {
  iconClosed?: React.ReactNode;
  iconOpened?: React.ReactNode;
  name: string;
  path?: string;
  icon?: React.ReactNode;
  submenu?: { path: string; title: string }[];
};

type SubMenuProps = {
  item: MenuItem;
};

export const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path ? item.path : '#'} onClick={item.submenu && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
        <div>
          {item.submenu && subnav ? item.iconOpened : item.submenu ? item.iconClosed : null}
        </div>
      </SidebarLink>
      <SubMenuContainer isOpen={subnav}>
        {subnav &&
          item?.submenu?.map((submenuItem, index) => {
            return (
              <DropdownLink to={submenuItem.path} key={index}>
                <SidebarLabel>{submenuItem.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </SubMenuContainer>
    </>
  );
};
