import React, { useState } from 'react';
import { Tabs, Dropdown, Menu } from 'antd';

const { TabPane } = Tabs;

const App = () => {
  const [activeTab, setActiveTab] = useState('productDescription');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleMenuClick = (key) => {
    console.log('Clicked:', key);
    // Perform the desired action based on the selected option
  };

  const getMenu = () => (
    <Menu onClick={(e) => handleMenuClick(e.key)}>
      <Menu.Item key="productDescription">Product Description</Menu.Item>
      <Menu.Item key="sharedDocuments">Shared Documents</Menu.Item>
      <Menu.Item key="hasWarranty">Has Warranty</Menu.Item>
      <Menu.Item key="afterWarranty">After Warranty</Menu.Item>
      <Menu.Item key="internalDocuments">Internal Documents</Menu.Item>
      <Menu.Item key="all">All</Menu.Item>
    </Menu>
  );

  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab="Product Description" key="productDescription">
        <h2>Product Description</h2>
        <p>This is the content of the Product Description tab.</p>
      </TabPane>
      <TabPane tab="Warranty" key="warranty">
        <Tabs defaultActiveKey="hasWarranty">
          <TabPane tab="Has Warranty" key="hasWarranty">
            <h2>Has Warranty</h2>
            <p>This is the content of the Has Warranty sub-tab.</p>
          </TabPane>
          <TabPane tab="After Warranty" key="afterWarranty">
            <h2>After Warranty</h2>
            <p>This is the content of the After Warranty sub-tab.</p>
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="Documents" key="documents">
        <Tabs defaultActiveKey="uploadDocuments">
          <TabPane tab="Upload Documents" key="uploadDocuments">
            <h2>Upload Documents</h2>
            <p>This is the content of the Upload Documents sub-tab.</p>
          </TabPane>
          <TabPane tab="Shared Documents" key="sharedDocuments">
            <h2>Shared Documents</h2>
            <p>This is the content of the Shared Documents sub-tab.</p>
          </TabPane>
          <TabPane tab="Internal Documents" key="internalDocuments">
            <h2>Internal Documents</h2>
            <p>This is the content of the Internal Documents sub-tab.</p>
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="History" key="history">
        <Tabs defaultActiveKey="approvalHistory">
          <TabPane tab="Approval History" key="approvalHistory">
            <h2>Approval History</h2>
            <p>This is the content of the Approval History sub-tab.</p>
          </TabPane>
          <TabPane tab="Complaint History" key="complaintHistory">
            <h2>Complaint History</h2>
            <p>This is the content of the Complaint History sub-tab.</p>
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="PMS Details" key="pmsDetails">
        <Tabs defaultActiveKey="allPMSDetails">
          <TabPane tab="All" key="allPMSDetails">
            <h2>All PMS Details</h2>
            <p>This is the content of the All PMS Details sub-tab.</p>
          </TabPane>
          <TabPane tab="Overdue" key="overduePMSDetails">
            <h2>Overdue PMS Details</h2>
            <p>This is the content of the Overdue PMS Details sub-tab.</p>
          </TabPane>
          <TabPane tab="Upcoming" key="upcomingPMSDetails">
            <h2>Upcoming PMS Details</h2>
            <p>This is the content of the Upcoming PMS Details sub-tab.</p>
          </TabPane>
          <TabPane tab="Completed" key="completedPMSDetails">
            <h2>Completed PMS Details</h2>
            <p>This is the content of the Completed PMS Details sub-tab.</p>
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="Browsing History" key="browsingHistory">
        <h2>Browsing History</h2>
        <Dropdown.Button overlay={getMenu()} trigger={['click']}>
          Filter By
        </Dropdown.Button>
        <p>This is the content of the Browsing History tab.</p>
      </TabPane>
    </Tabs>
  );
};

export default App;
