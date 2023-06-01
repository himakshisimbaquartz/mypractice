import React, { useState } from "react";
import { Badge, Tabs, Table, Button, Modal } from 'antd';
import Product from "../../component/product";
import Warranty from "../../component/warranty";
import Documents from "../../component/Document";
import History from "../../component/history";
import PmsDetails from "../../component/PmsDetails";
// import "./Antd.css";


const Antd = () => {
    const [key, setKey] = useState("ProductDescription");
    const [isModal, setismodal] = useState(false)


    const data = [
        {
            title: "Product description",
            key: "ProductDescription",
            component: <Product />
        },

        {
            title: "Warranty",
            key: "Warranty",
            component: [
                {
                    title: "Has Warranty",
                    key: "HasWarranty",
                    component: (
                        <Table
                            dataSource={[
                                {
                                    warrantyNo: "ABC123",
                                    warrantyPeriod: "1 Year",
                                    pms: "Enabled",
                                    startDate: "2023-01-01",
                                    endDate: "2024-01-01"
                                }
                            ]}
                            columns={[
                                {
                                    title: "Warranty No.",
                                    dataIndex: "warrantyNo",
                                    key: "warrantyNo"
                                },
                                {
                                    title: "Warranty Period",
                                    dataIndex: "warrantyPeriod",
                                    key: "warrantyPeriod"
                                },
                                {
                                    title: "PMS",
                                    dataIndex: "pms",
                                    key: "pms"
                                },
                                {
                                    title: "Start Date",
                                    dataIndex: "startDate",
                                    key: "startDate"
                                },
                                {
                                    title: "End Date",
                                    dataIndex: "endDate",
                                    key: "endDate"
                                },
                                {
                                    title: "Action",
                                    dataIndex: "action",
                                    key: "action",
                                    render: () => (
                                        <Button type="primary" className={"bg-sky-500/100 ..."}>Edit</Button>
                                    )
                                }
                            ]}
                        />
                    )
                },


                {
                    title: "After Warranty",
                    key: "AfterWarranty",
                    component: <Table
                        dataSource={[
                            {
                                contractNo: "1234",
                                contractType: "Service Contract",
                                subType: "Maintenance",
                                contractPeriod: "2 Years",
                                startDate: "2024-01-01",
                                endDate: "2026-01-01",
                                ContractPrice: "566778",
                                RequestType: "ewrtytyt",
                                ContractStatus: "active",
                                ApprovalStatus: "approved",
                                dataIndex: "Action"



                            }
                        ]}
                        columns={[
                            {
                                title: "Contract No.",
                                dataIndex: "contractNo",
                                key: "contractNo"
                            },
                            {
                                title: "Contract Type",
                                dataIndex: "contractType",
                                key: "contractType"
                            },
                            {
                                title: "Sub Type",
                                dataIndex: "subType",
                                key: "subType"
                            },
                            {
                                title: "Contract Period",
                                dataIndex: "contractPeriod",
                                key: "contractPeriod"
                            },
                            {
                                title: "Start Date",
                                dataIndex: "startDate",
                                key: "startDate"
                            },
                            {
                                title: "End Date",
                                dataIndex: "endDate",
                                key: "endDate"
                            },
                            {
                                title: "Contract Price",
                                dataIndex: "ContractPrice",
                                key: "ContractPrice"
                            },
                            {
                                title: "Request Type",
                                dataIndex: "RequestType",
                                key: "RequestType"
                            },
                            {
                                title: "Contract Status",
                                dataIndex: "ContractStatus",
                                key: "ContractStatus"
                            },
                            {
                                title: "Approval Status",
                                dataIndex: "ApprovalStatus",
                                key: "ApprovalStatus"
                            },
                            {
                                title: "Action",
                                dataIndex: "Action",
                                key: "Action"
                            }

                        ]}
                    />
                }
            ]
        },

        {
            title: "Documents",
            key: "Documents",
            component: [
                {
                    title: "Upload Documents",
                    key: "UploadDocuments",
                    component: <Table
                        dataSource={[
                            {
                                serialNo: 1,
                                type: "Type 1",
                                subType: "Sub Type 1",
                                docDate: "2023-06-01",
                                documentNo: "DOC001",
                                title: "Document 1",
                                createdDateTime: "2023-06-01 10:00:00",
                                modifiedDateTime: "2023-06-01 10:30:00"
                            },
                            {
                                serialNo: 2,
                                type: "Type 2",
                                subType: "Sub Type 2",
                                docDate: "2023-06-02",
                                documentNo: "DOC002",
                                title: "Document 2",
                                createdDateTime: "2023-06-02 09:00:00",
                                modifiedDateTime: "2023-06-02 09:30:00"
                            }
                        ]}
                        columns={[
                            {
                                title: "Serial No.",
                                dataIndex: "serialNo",
                                key: "serialNo"
                            },
                            {
                                title: "Type",
                                dataIndex: "type",
                                key: "type"
                            },
                            {
                                title: "Sub Type",
                                dataIndex: "subType",
                                key: "subType"
                            },
                            {
                                title: "Doc Date",
                                dataIndex: "docDate",
                                key: "docDate"
                            },
                            {
                                title: "Document No.",
                                dataIndex: "documentNo",
                                key: "documentNo"
                            },
                            {
                                title: "Title",
                                dataIndex: "title",
                                key: "title"
                            },
                            {
                                title: "Created Date/Time",
                                dataIndex: "createdDateTime",
                                key: "createdDateTime"
                            },
                            {
                                title: "Modified Date/Time",
                                dataIndex: "modifiedDateTime",
                                key: "modifiedDateTime"
                            },
                            {
                                title: "Action",
                                key: "action",
                                render: (text, record) => (
                                    <Button type="primary" className={"bg-sky-500/100 ..."} onClick={() => { setismodal(true) }}>Details</Button>


                                )
                            }
                        ]}
                    />
                },
                {
                    title: "Shared Documents",
                    key: "SharedDocuments",
                    component: <Table
                        dataSource={[
                            {
                                serialNo: 1,
                                type: "Type 1",
                                subType: "Sub Type 1",
                                docDate: "2023-06-01",
                                documentNo: "DOC001",
                                title: "Document 1",
                                createdDateTime: "2023-06-01 10:00:00",
                                modifiedDateTime: "2023-06-01 10:30:00"
                            },
                            {
                                serialNo: 2,
                                type: "Type 2",
                                subType: "Sub Type 2",
                                docDate: "2023-06-02",
                                documentNo: "DOC002",
                                title: "Document 2",
                                createdDateTime: "2023-06-02 09:00:00",
                                modifiedDateTime: "2023-06-02 09:30:00"
                            }
                        ]}
                        columns={[
                            {
                                title: "Serial No.",
                                dataIndex: "serialNo",
                                key: "serialNo"
                            },
                            {
                                title: "Type",
                                dataIndex: "type",
                                key: "type"
                            },
                            {
                                title: "Sub Type",
                                dataIndex: "subType",
                                key: "subType"
                            },
                            {
                                title: "Category",
                                dataIndex: "Category",
                                key: "Category"
                            },

                            {
                                title: "Doc Date",
                                dataIndex: "docDate",
                                key: "docDate"
                            },
                            {
                                title: "Document No.",
                                dataIndex: "documentNo",
                                key: "documentNo"
                            },
                            {
                                title: "Title",
                                dataIndex: "title",
                                key: "title"
                            },
                            {
                                title: "Created Date/Time",
                                dataIndex: "createdDateTime",
                                key: "createdDateTime"
                            },
                            {
                                title: "Modified Date/Time",
                                dataIndex: "modifiedDateTime",
                                key: "modifiedDateTime"
                            },

                        ]}
                    />
                },
                {
                    title: "Internal Documents",
                    key: "InternalDocuments",
                    component: <Documents />
                }
            ]
        },
        {
            title: "History",
            key: "History",
            component: [
                {
                    title: "Approval History",
                    key: "ApprovalHistory",
                    component: <Table
                        dataSource={[
                            {
                                Status: 1,
                                Assignedto: "Type 1",
                                Submittedby: "Sub Type 1",
                                Date: "2023-06-01",
                                Comments: "DOC002",
                                Description: "Document 2",

                            },
                            {
                                // // Status	Assigned to	Submitted by	Date/Time	Comments	Description
                                Status: 2,
                                Assignedto: "Type 2",
                                Submittedby: "Sub Type 2",
                                Date: "2023-06-02",
                                Comments: "DOC002",
                                Description: "Document 2",
                            }
                        ]}
                        columns={[
                            {
                                title: "Status",
                                dataIndex: "Status",
                                key: "Status"
                            },
                            {
                                title: "Assigned to",
                                dataIndex: "Assignedto",
                                key: "Assigned to"
                            },
                            {
                                title: "Submitted by",
                                dataIndex: "Submittedby",
                                key: "Submitted by"
                            },
                            {
                                title: "Date/Time",
                                dataIndex: "Date",
                                key: "Date/Time"
                            },

                            {
                                title: "Comments",
                                dataIndex: "Comments",
                                key: "Comments"
                            },
                            {
                                title: "Description",
                                dataIndex: "Description",
                                key: "Description"
                            }


                        ]}
                    />
                },
                {
                    // Complaint Raised By	Complaint No.	Complaint Date	Closing Date	Call Closed By
                    title: "Complaint History",
                    key: "ComplaintHistory",
                    component: <Table
                        dataSource={[
                            {
                                ComplaintRaisedBy: "himakshi",
                                ComplaintNo: "1",
                                ComplaintDate: "2023-05-02",
                                ClosingDate: "2023-06-01",
                                CallClosedBy: "Himakshi",
                            },
                            {
                                // // Status	Assigned to	Submitted by	Date/Time	Comments	Description
                                ComplaintRaisedBy: "jyoti",
                                ComplaintNo: "2",
                                ComplaintDate: "2023-05-02",
                                ClosingDate: "2023-06-02",
                                CallClosedBy: "jyoti",
                            }
                        ]}
                        columns={[
                            {
                                title: "Complaint Raised By",
                                dataIndex: "ComplaintRaisedBy",
                                key: "ComplaintRaisedBy"
                            },
                            {
                                title: "Complaint No.",
                                dataIndex: "ComplaintNo",
                                key: "ComplaintNo"
                            },
                            {
                                title: "Complaint Date",
                                dataIndex: "ComplaintDate",
                                key: "ComplaintDate"
                            },
                            {
                                title: "Closing Date",
                                dataIndex: "ClosingDate",
                                key: "Closing Date"
                            },
                            {
                                title: "Call Closed By",
                                dataIndex: "CallClosedBy",
                                key: "CallClosedBy"
                            }



                        ]}
                    />
                }
            ]
        },
        {
            title: "PMS Details",
            key: "PMSDetails",
            component: <PmsDetails/>
        },
    ];



    const renderComponent = (component) => {
        switch (component.key) {
            case "ProductDescription":
                return component.component;
            case "Warranty":
                return (
                    <Tabs defaultActiveKey="HasWarranty">
                        {component.component.map((subTab) => (
                            <Tabs.TabPane tab={subTab.title} key={subTab.key}>
                                {subTab.component}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                );
            case "Documents":
                return (
                    <>
                        <Tabs defaultActiveKey="Documents">
                            {component.component.map((subTab) => (
                                <Tabs.TabPane tab={subTab.title} key={subTab.key}>
                                    {subTab.component}
                                </Tabs.TabPane>
                            ))}
                        </Tabs>
                        <Modal visible={isModal} footer={false} onCancel={() => {
                            setismodal(false)
                        }}>

                            hello

                        </Modal>
                    </>
                );
            case "History":
                return (
                    <Tabs defaultActiveKey="History">
                        {component.component.map((subTab) => (
                            <Tabs.TabPane tab={subTab.title} key={subTab.key}>
                                {subTab.component}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                );
            case "Warranty":
                return (
                    <Tabs defaultActiveKey="HasWarranty">
                        {component.component.map((subTab) => (
                            <Tabs.TabPane tab={subTab.title} key={subTab.key}>
                                {subTab.component}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                );
            default:
                return component.component;
        }
    };
    return (
        <div>
            <Tabs onChange={(e) => setKey(e)}>
                {data?.map((item) => (
                    <Tabs.TabPane
                        key={item?.key}
                        tab={<Badge>{item?.title}</Badge>}
                    ></Tabs.TabPane>
                ))}
            </Tabs>
            {renderComponent(data.find((item) => item.key === key))}
        </div>
    );
};

export default Antd;
