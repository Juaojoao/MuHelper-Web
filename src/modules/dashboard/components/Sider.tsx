import React, { useState } from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

type SiderDashProps = {
  onTabClick: (tabName: string) => void;
};

const SiderDash: React.FC<SiderDashProps> = ({ onTabClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (event: any) => {
    onTabClick(event.key);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        onClick={handleMenuClick}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
        <Menu.Item key="guides" icon={<UserOutlined />}>Guides</Menu.Item>
      </Menu>
    </Sider>
  );
};
  
export default SiderDash;
