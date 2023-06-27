import '../styles/styles.css';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import SiderDash from './content/Sider';
import GetGuidesTable from './content/GetGuides';
import HomeDashboard from './content/Home';
import { Content, Footer } from 'antd/es/layout/layout';

const getTabNameFromLocation = (pathname: string) => {
  if (pathname === '/dashboard') {
    return 'home';
  } else if (pathname === '/dashboard/guides') {
    return 'guides';
  }
  return '';
};

export const DashTemplate: React.FC = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(getTabNameFromLocation(location.pathname));

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    } else {
      setSelectedTab(getTabNameFromLocation(location.pathname));
    }
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('selectedTab', selectedTab);
  }, [selectedTab]);

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
      <Layout className="custom-content">
        <Content style={{ margin: 0, maxWidth: 'auto' }}>{renderContent()}</Content>
        <Footer style={{ textAlign: 'center' }}>MuHelper ©2023</Footer>
      </Layout>
    </Layout>
  );
};
