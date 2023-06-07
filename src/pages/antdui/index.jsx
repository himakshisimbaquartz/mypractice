import React, { useState } from 'react';
import { Tabs, Dropdown, Menu, Table, Button, Space, Modal, Form, Input,Select, Upload, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
const columns = [
    {title: 'Serial No.',dataIndex: 'serialNo',key: 'serialNo',},
    {title: 'Type',dataIndex: 'type',key: 'type',},
    {title: 'Sub Type',dataIndex: 'subType',key: 'subType',},
    {title: 'Category',dataIndex: 'category',key: 'category',},
    {title: 'Doc Date',dataIndex: 'docDate',key: 'docDate',},
    {title: 'Document No.',dataIndex: 'documentNo',key: 'documentNo',},
    {title: 'Title',dataIndex: 'title',key: 'title',},
    {title: 'Created Date/Time',dataIndex: 'createdDateTime',key: 'createdDateTime',},
    {title: 'Modified Date/Time',dataIndex: 'modifiedDateTime',key: 'modifiedDateTime',},
  ];
  
  const data = [
    // Add your data rows here
  ];

  const browsingHistoryColumns = [
    {title: 'Activity performed by',dataIndex: 'activityBy',key: 'activityBy',},
    {title: 'Section Name',dataIndex: 'sectionName',key: 'sectionName',},
    {title: 'Task Name',dataIndex: 'taskName',key: 'taskName',},
    {title: 'Date/Time',dataIndex: 'dateTime',key: 'dateTime',},
  ];
  
  const browsingHistoryData = [
    // Add your data rows here
  ];

  const approvalHistoryColumns = [
    {title: 'Status',dataIndex: 'status',key: 'status',},
    {title: 'Assigned to',dataIndex: 'assignedTo',key: 'assignedTo',},
    {title: 'Submitted by',dataIndex: 'submittedBy',key: 'submittedBy',},
    {title: 'Date/Time',dataIndex: 'dateTime',key: 'dateTime',},
    {title: 'Comments',dataIndex: 'comments',key: 'comments',},
    {title: 'Description',dataIndex: 'description',key: 'description',},
  ];
  
  const approvalHistoryData = [
    // Add your data rows here
  ];

  const complaintHistoryColumns = [
    {title: 'Complaint Raised By',dataIndex: 'complaintRaisedBy',ey: 'complaintRaisedBy',},
    {title: 'Complaint No.',dataIndex: 'complaintNo',key: 'complaintNo',},
    {title: 'Complaint Date',dataIndex: 'complaintDate',key: 'complaintDate',},
    {title: 'Closing Date',dataIndex: 'closingDate',key: 'closingDate',},
    {title: 'Call Closed By',dataIndex: 'callClosedBy',key: 'callClosedBy',},   
  ];
  
  const complaintHistoryData = [
    // Add your data rows here
  ];

  const warrantyColumns = [
    {title: 'Warranty No.',dataIndex: 'warrantyNo',key: 'warrantyNo',},
    {title: 'Warranty Period',dataIndex: 'warrantyPeriod',key: 'warrantyPeriod',},
    {title: 'PMS',dataIndex: 'pms',key: 'pms',},
    {title: 'Start Date',dataIndex: 'startDate',key: 'startDate',},
    {title: 'End Date',dataIndex: 'endDate',key: 'endDate',},
    {title: 'Action',dataIndex: 'action',key: 'action',
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
      { warrantyNo: 'W001',warrantyPeriod: '12 months',pms: 'Yes',startDate: '2023-01-01', endDate: '2024-01-01',},
      { warrantyNo: 'W002',warrantyPeriod: '24 months',pms: 'No',startDate: '2023-02-01',endDate: '2025-02-01',},
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
    {pmsDate: '2023-06-01',pmsDoneBy: 'John Doe',financialYear: '2023-2024',pms: 'Service A',daysTotal: 5,pmsStatus: 'Completed',},
    // Add more data as needed
  ];

  const alloverdueColumns = [
    // Define the columns for All PMS Details
    { title: 'PMS no', dataIndex: 'pmsno', key: 'pmsno' },
    { title: 'Customer', dataIndex: 'Customer', key: 'Customer' },
    { title: 'Location', dataIndex: 'Location', key: 'Location' },
    { title: 'Department Name', dataIndex: 'DepartmentName', key: 'DepartmentName' },
    { title: 'Product', dataIndex: 'Product', key: 'Product' },
    { title: 'Model', dataIndex: 'Model', key: 'Model' },
    { title: 'Company', dataIndex: 'Company', key: 'Company' },
    { title: 'PMS date', dataIndex: 'PMSdate', key: 'PMSdate' },
    { title: 'Days crossed', dataIndex: 'Dayscrossed', key: 'Dayscrossed' },
    { title: 'Total PMS', dataIndex: 'TotalPMS', key: 'TotalPMS' },
  ];

  const alloverdueData = [
    // Data for All PMS Details
    {pmsno :"6766",Customer:"jvhgf",Location:"punjab",DepartmentName:"IT",Product:"abc",	Model:"8fdsy",	
    Company:"simba",PMSdate:"2023-06-01",Dayscrossed:"10",TotalPMS:" 7",},
    // Add more data as needed
  ];

  const upcomingColumns = [
    { title: 'PMS no', dataIndex: 'pmsno', key: 'pmsno' },
    { title: 'Customer', dataIndex: 'Customer', key: 'Customer' },
    { title: 'Location', dataIndex: 'Location', key: 'Location' },
    { title: 'Department Name', dataIndex: 'DepartmentName', key: 'DepartmentName' },
    { title: 'Product', dataIndex: 'Product', key: 'Product' },
    { title: 'Type', dataIndex: 'Type', key: 'Type' },
    { title: 'Model', dataIndex: 'Model', key: 'Model' },
    { title: 'Company', dataIndex: 'Company', key: 'Company' },
    { title: 'PMS date', dataIndex: 'PMSdate', key: 'PMSdate' },
    { title: 'Days left', dataIndex: 'Daysleft', key: 'Daysleft' },
    { title: 'Total PMS', dataIndex: 'TotalPMS', key: 'TotalPMS' },

  ];
  const upcomingData = [
    // Data for All PMS Details
    {pmsno :"6766",Customer:"jvhgf",Location:"punjab",DepartmentName:"IT",Product:"abc",Type: "2",Model:"8fdsy",	
    Company:"simba",PMSdate:"2023-06-01",Daysleft:"10",TotalPMS:" 7",},
    // Add more data as needed
  ];

  const completedColumns = [
    { title: 'PMS no', dataIndex: 'pmsno', key: 'pmsno' },
    { title: 'Customer', dataIndex: 'Customer', key: 'Customer' },
    { title: 'Location', dataIndex: 'Location', key: 'Location' },
    { title: 'Department Name', dataIndex: 'DepartmentName', key: 'DepartmentName' },
    { title: 'Product', dataIndex: 'Product', key: 'Product' },
    { title: 'Type', dataIndex: 'Type', key: 'Type' },
    { title: 'Model', dataIndex: 'Model', key: 'Model' },
    { title: 'Company', dataIndex: 'Company', key: 'Company' },
    { title: 'PMS date', dataIndex: 'PMSdate', key: 'PMSdate' },
    { title: 'PMS done by', dataIndex: 'Pmsdoneby', key: 'Pmsdoneby' },
    { title: 'Status', dataIndex: 'Status', key: 'Status' },
    { title: 'Days', dataIndex: 'Days', key: 'Days' },
    { title: 'Total PMS', dataIndex: 'TotalPMS', key: 'TotalPMS' },
    { title: 'Rating', dataIndex: 'Rating', key: 'Rating' },

  ];
  const completedData = [
    // Data for All PMS Details
    {pmsno :"6766",Customer:"jvhgf",Location:"punjab",DepartmentName:"IT",Product:"abc",Type: "2",Model:"8fdsy",	
    Company:"simba",PMSdate:"2023-06-01",Pmsdoneby:"me",Status:"active",Days:"10",TotalPMS:" 7",Rating:"6",},
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
  const [showUploadForm, setShowUploadForm] = useState(false);


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

      const handleProductDescriptionFormSubmit = (values) => {
        console.log('Product Description Form Values:', values);
        // Perform the desired action with the form values
      };

      const handleUploadDocumentsClick = () => {
        setShowUploadForm(true);
      };
      
      const formItemLayout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 8,
        },

      };
     
  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab="Product Description" key="productDescription">
<Form onFinish={handleProductDescriptionFormSubmit} size="small" style={{ paddingLeft: '20px' }}>
          <Form.Item {...formItemLayout} label="Choose Company" name="company" rules={[{ required: true, message: 'Please choose a company' }]}>
            <Select placeholder="Select a company">
              <Option value="company1">Company 1</Option>
              <Option value="company2">Company 2</Option>
            </Select>
          </Form.Item>

          <Form.Item {...formItemLayout} label="Choose Product" name="product" rules={[{ required: true, message: 'Please choose a product' }]}>
          
            <Select placeholder="Select a product">
              <Option value="product1">Product 1</Option>
              <Option value="product2">Product 2</Option>
            </Select>

          </Form.Item>
          <Form.Item {...formItemLayout} label="Product Type" name="productType" rules={[{ required: true, message: 'Please enter the product type' }]}>
            <Input placeholder="Enter product type" />
          </Form.Item>

          <Form.Item {...formItemLayout} label="Model" name="model" rules={[{ required: true, message: 'Please enter the model' }]}>
          
            <Input placeholder="Enter model" />
          </Form.Item>

          <Form.Item {...formItemLayout} label="Serial No." name="serialNo" rules={[{ required: true, message: 'Please enter the serial number' }]}>
          
            <Input placeholder="Enter serial number" />
          </Form.Item>

          <Form.Item {...formItemLayout} label="Department" name="department" rules={[{ required: true, message: 'Please enter the department' }]}>
          
            <Input placeholder="Enter department" />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Installation Date"
            name="installationDate"
            rules={[{ required: true, message: 'Please enter the installation date' }]}>
            
            <Input placeholder="Enter installation date" /> 
          </Form.Item>

          <Form.Item {...formItemLayout} label="Product Price" name="productPrice" rules={[{ required: true, message: 'Please enter the product price' }]}>
          
            <Input placeholder="Enter product price" />
          </Form.Item>

          <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'center'}}>

            <Form.Item wrapperCol={{ span: 10, offset: 3}}>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: 'blue', fontSize: '16px' }} size="middle">
                Save
              </Button>
            
            </Form.Item>
          </div>
          </Form.Item>
        </Form>

      </TabPane>
      <TabPane tab="Warranty" key="warranty">
        <Tabs defaultActiveKey="hasWarranty">
          <TabPane tab="Has Warranty" key="hasWarranty">
            <Table columns={warrantyColumns} dataSource={warrantyData} 
            rowKey="id"
            onRow={(record) => ({
              // onClick: () => handleEdit(record),
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
                  ]}>
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
            <Table columns={warrantyColumns} dataSource={warrantyData} />
          </TabPane>
        </Tabs>
      </TabPane>

      <TabPane tab="Documents" key="documents">
        <Tabs defaultActiveKey="uploadDocuments">
          <TabPane tab="Upload Documents" key="uploadDocuments">
            <Table columns={columns} dataSource={data} />
          </TabPane>
          <TabPane tab="Shared Documents" key="sharedDocuments">
            <div style={{ display: 'flex', alignItems: 'right',justifyContent: 'space-between', marginBottom: '12px'}}>
              <Space>
                <Dropdown.Button overlay={getMenu()} trigger={['click']} style={{ backgroundColor: 'DodgerBlue', color: 'black',marginLeft: '15px' }}>
                  Filter By
                </Dropdown.Button>
                <Input style={{ marginLeft: 8, width: 450 }} placeholder="Enter title or number to search the document" />
                <Button type="primary" icon={<SearchOutlined />} size="default" style={{ backgroundColor: 'DodgerBlue', color: 'black' }}>
                  Search
                </Button>
              </Space>
              {/* <div> */}
            <Button icon={<UploadOutlined />} type="primary" size='middle' style={{ backgroundColor: 'DodgerBlue', color: 'black',marginRight: '30px' }} 
            onClick={handleUploadDocumentsClick}>
              Upload Documents
            </Button>
          {/* </div> */}

            </div>
            {showUploadForm && (
              <Form size="middle" style={{ paddingLeft: '20px'}} onFinish={handleEditFormSubmit}>
                <h2 style={{ color: '#0047AB', fontSize: '20px',fontWeight:"bold", paddingBottom:"22px", paddingLeft:"22px", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
               }}>Upload Shared documents</h2>

               <Form.Item {...formItemLayout} label="Document Category" name="documentCategory">
                <Select placeholder="Product" defaultActiveFirstOption>
              <Option value="Product"> Product</Option>
              <Option value="Accessory"> Accessory</Option>
            </Select>
            </Form.Item>

                <Form.Item {...formItemLayout}  label="Document Type" name="documentType">
                <Select placeholder="Services" defaultActiveFirstOption>
              <Option value="Sales"> Sales</Option>
              <Option value="Services">Services</Option>
            </Select>
                </Form.Item>
                <Form.Item {...formItemLayout}  label="Document Date" name="documentdate">
                <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="Document Title" name="documentTitle">
                  <Input placeholder='Title' />
                </Form.Item>
                <Form.Item {...formItemLayout} label="Document Number" name="documentnumber">
                  <Input />
                </Form.Item>
                <Form.Item {...formItemLayout} label="Document SubType" name="documentsubtype">
                  <Upload>
                    <Button icon={<UploadOutlined />} style={{ backgroundColor: 'DodgerBlue', color: 'black',marginRight: '30px' }}  >Click to Upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Upload
                  </Button>
                </Form.Item>
              </Form>
            )}
            
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
            <Table columns={approvalHistoryColumns} dataSource={approvalHistoryData} />
          </TabPane>
          <TabPane tab="Complaint History" key="complaintHistory">
            <Table columns={complaintHistoryColumns} dataSource={complaintHistoryData} />
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="PMS Details" key="pmsDetails">
        <Tabs defaultActiveKey="allPMSDetails">
          <TabPane tab="All" key="allPMSDetails">
          <Table columns={allPMSColumns} dataSource={allPMSData} />
          </TabPane>
          <TabPane tab="Overdue" key="overduePMSDetails">
          <Table columns={alloverdueColumns} dataSource={alloverdueData} />
          </TabPane>
          <TabPane tab="Upcoming" key="upcomingPMSDetails">
          <Table columns={upcomingColumns} dataSource={upcomingData} />
          </TabPane>

          <TabPane tab="Completed" key="completedPMSDetails">
          <Table columns={completedColumns} dataSource={completedData} />
          </TabPane>
        </Tabs>
      </TabPane>

      <TabPane tab="Browsing History" key="browsingHistory">
        <div style={{ display: 'flex', alignItems: 'right' }}>
              <Space>
                <Dropdown.Button overlay={getMenu()} trigger={['click']} style={{ backgroundColor: 'DodgerBlue', color: 'black', marginLeft:'15px' }}>
                  Filter By
                </Dropdown.Button>
                <Button type="primary" icon={<SearchOutlined />} size="default" style={{ backgroundColor: 'DodgerBlue', color: 'black' }}>
                  Search
                </Button>
              </Space>
            </div>
        <Table columns={columns} dataSource={data} />
      </TabPane>
    </Tabs>
  );
};

export default App;
