import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderDash from './Sider';
import GetGuidesTable from './content/GetGuides';
import HomeDashboard from './content/Home';

const { Content, Footer } = Layout;

const DashTemplate: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('getGuides');

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const renderContent = () => {
    if (selectedTab === 'home') {
      return <HomeDashboard />;
    } else if (selectedTab === 'guides') {
      return <GetGuidesTable />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderDash onTabClick={handleTabClick} />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          {renderContent()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>MuHelper ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default DashTemplate;
