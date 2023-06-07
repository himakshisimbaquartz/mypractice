import React, { useState } from 'react';
import { Tabs, Dropdown, Menu, Table, Button, Space, Modal, Form, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const columns = [
    {
      title: 'Serial No.',
      dataIndex: 'serialNo',
      key: 'serialNo',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Sub Type',
      dataIndex: 'subType',
      key: 'subType',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Doc Date',
      dataIndex: 'docDate',
      key: 'docDate',
    },
    {
      title: 'Document No.',
      dataIndex: 'documentNo',
      key: 'documentNo',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Created Date/Time',
      dataIndex: 'createdDateTime',
      key: 'createdDateTime',
    },
    {
      title: 'Modified Date/Time',
      dataIndex: 'modifiedDateTime',
      key: 'modifiedDateTime',
    },
  ];
  
  const data = [
    // Add your data rows here
  ];

  const browsingHistoryColumns = [
    {
      title: 'Activity performed by',
      dataIndex: 'activityBy',
      key: 'activityBy',
    },
    {
      title: 'Section Name',
      dataIndex: 'sectionName',
      key: 'sectionName',
    },
    {
      title: 'Task Name',
      dataIndex: 'taskName',
      key: 'taskName',
    },
    {
      title: 'Date/Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
  ];
  
  const browsingHistoryData = [
    // Add your data rows here
  ];

  const approvalHistoryColumns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Assigned to',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
    },
    {
      title: 'Submitted by',
      dataIndex: 'submittedBy',
      key: 'submittedBy',
    },
    {
      title: 'Date/Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];
  
  const approvalHistoryData = [
    // Add your data rows here
  ];

  const complaintHistoryColumns = [
    {
      title: 'Complaint Raised By',
      dataIndex: 'complaintRaisedBy',
      key: 'complaintRaisedBy',
    },
    {
      title: 'Complaint No.',
      dataIndex: 'complaintNo',
      key: 'complaintNo',
    },
    {
      title: 'Complaint Date',
      dataIndex: 'complaintDate',
      key: 'complaintDate',
    },
    {
      title: 'Closing Date',
      dataIndex: 'closingDate',
      key: 'closingDate',
    },
    {
      title: 'Call Closed By',
      dataIndex: 'callClosedBy',
      key: 'callClosedBy',
    },
  ];
  
  const complaintHistoryData = [
    // Add your data rows here
  ];

  const warrantyColumns = [
    {
      title: 'Warranty No.',
      dataIndex: 'warrantyNo',
      key: 'warrantyNo',
    },
    {
      title: 'Warranty Period',
      dataIndex: 'warrantyPeriod',
      key: 'warrantyPeriod',
    },
    {
      title: 'PMS',
      dataIndex: 'pms',
      key: 'pms',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          style={{ backgroundColor: 'blue' }}
          // eslint-disable-next-line no-undef
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
      ),
    }
  ];
  
  const warrantyData = [
    // Add your data rows here
    {
        warrantyNo: 'W001',
        warrantyPeriod: '12 months',
        pms: 'Yes',
        startDate: '2023-01-01',
        endDate: '2024-01-01',
      },
      {
        warrantyNo: 'W002',
        warrantyPeriod: '24 months',
        pms: 'No',
        startDate: '2023-02-01',
        endDate: '2025-02-01',
      },
  ];
  const allPMSColumns = [
    // Define the columns for All PMS Details
    { title: 'PMS Date', dataIndex: 'pmsDate', key: 'pmsDate' },
    { title: 'PMS Done By', dataIndex: 'pmsDoneBy', key: 'pmsDoneBy' },
    { title: 'Financial Year', dataIndex: 'financialYear', key: 'financialYear' },
    { title: 'PMS', dataIndex: 'pms', key: 'pms' },
    { title: 'Days Total', dataIndex: 'daysTotal', key: 'daysTotal' },
    { title: 'PMS Status', dataIndex: 'pmsStatus', key: 'pmsStatus' },
  ];

  const allPMSData = [
    // Data for All PMS Details
    {
      pmsDate: '2023-06-01',
      pmsDoneBy: 'John Doe',
      financialYear: '2023-2024',
      pms: 'Service A',
      daysTotal: 5,
      pmsStatus: 'Completed',
    },
    // Add more data as needed
  ];
  

const App = () => {
  const [activeTab, setActiveTab] = useState('productDescription');
//   const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showFilterForm, setShowFilterForm] = useState(false);
// const [editFormVisible, setEditFormVisible] = useState(false);

  const [filterData, setFilterData] = useState({
    documentType: '',
    documentSubType: '',
    documentDate: '',
    documentYear: '',
  });

  

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

  const handleFilterFormSubmit = (e) => {
    e.preventDefault();
    // Perform the desired action with the filter data
    console.log('Filter Data:', filterData);
  };

  const handleEdit = (record) => {
    setSelectedProduct(record);
    setEditFormVisible(true);
  };

  const handleEditFormCancel = () => {
    setEditFormVisible(false);
  };
    const handleEditFormSubmit = (values) => {
        console.log('Edited Values:', values);
        // Perform the desired action with the edited form values
        setEditFormVisible(false);
      };

      const [editFormVisible, setEditFormVisible] = useState(false);
      const [editForm] = Form.useForm();

      const handleEditFormFinish = (values) => {
        handleEditFormSubmit(values);
      };  

  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab="Product Description" key="productDescription">
        <h2>Product Description</h2>
        <p>This is the content of the Product Description tab.</p>
      </TabPane>
      <TabPane tab="Warranty" key="warranty">
        <Tabs defaultActiveKey="hasWarranty">
          <TabPane tab="Has Warranty" key="hasWarranty">
            {/* <h2>Has Warranty</h2> */}
            {/* <p>This is the content of the Has Warranty sub-tab.</p> */}
            <Table columns={warrantyColumns} dataSource={warrantyData} 
            rowKey="id"
            onRow={(record) => ({
              onClick: () => handleEdit(record),
            })}
            />
            <Modal
              title="Edit Warranty Details"
              visible={editFormVisible}
              onCancel={handleEditFormCancel}
              footer={null}
            >
              <Form
                form={editForm}
                onFinish={handleEditFormFinish}
                initialValues={selectedProduct}
              >
                <Form.Item
                  label="Warranty Period"
                  name="warrantyPeriod"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter the warranty period',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="PMS"
                  name="pms"
                  rules={[
                    {
                      required: true,
                      message: 'Please specify whether PMS is applicable',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Start Date"
                  name="startDate"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter the start date',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="End Date"
                  name="endDate"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter the end date',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </TabPane>
          <TabPane tab="After Warranty" key="afterWarranty">
            {/* <h2>After Warranty</h2> */}
            {/* <p>This is the content of the After Warranty sub-tab.</p> */}
            <Table columns={warrantyColumns} dataSource={warrantyData} />
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="Documents" key="documents">
        <Tabs defaultActiveKey="uploadDocuments">
          <TabPane tab="Upload Documents" key="uploadDocuments">
            {/* <h2>Upload Documents</h2> */}
            <Table columns={columns} dataSource={data} />
          </TabPane>
          <TabPane tab="Shared Documents" key="sharedDocuments">
            {/* <h2>Shared Documents</h2> */}
            <div style={{ display: 'flex', alignItems: 'right' }}>
              <Space>
                <Dropdown.Button overlay={getMenu()} trigger={['click']} style={{ backgroundColor: 'Cyan', color: 'white' }}>
                  Filter By
                </Dropdown.Button>
                <Button type="primary" icon={<SearchOutlined />} size="default" style={{ backgroundColor: 'Cyan', color: 'white' }}>
                  Search
                </Button>
              </Space>
            </div>
            <Table columns={columns} dataSource={data} />
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
            {/* <h2>Approval History</h2> */}
            <Table columns={approvalHistoryColumns} dataSource={approvalHistoryData} />
          </TabPane>
          <TabPane tab="Complaint History" key="complaintHistory">
            {/* <h2>Complaint History</h2> */}
            <Table columns={complaintHistoryColumns} dataSource={complaintHistoryData} />
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
        {/* <h2>Browsing History</h2> */}
        <Dropdown.Button overlay={getMenu()} trigger={['click']} style={{ backgroundColor: 'lightblue', color: 'white' }}>
          Filter By
        </Dropdown.Button>
        <Button type="primary" icon={<SearchOutlined />} size="default">
                  Search
        </Button>
        
        <Table columns={columns} dataSource={data} />
      </TabPane>
    </Tabs>
  );
};

export default App;
