import React, {useState } from "react";
import { Badge, Tabs } from 'antd';
import Product from "../../component/product";
import Warranty from "../../component/warranty";
import Documents from "../../component/Document";
import History from "../../component/history";


const Antd=()=>{
const [key ,setkey]=useState("ProductDescription")
console.log(key , "data")
const data=[{
    title:"Product description",
    key:"ProductDescription",
    component: 'Product_description'
},
{
    title:"warranty",
    key:"warranty",
    component: 'Warranty'
},
{
    title:"Documents",
    key:"Documents",
    component: 'Documents'
},
{
    title:"History",
    key:"History",
    component: 'History'
},
]
const datas=(component)=>{
    switch (component) {
        case "ProductDescription": return <Product/>
            break;
        case "warranty": return <Warranty/>;
            break;
        case "Documents": return <Documents/>;
            break;
        case "History": return <History/>;
            break;
        default:
            break;
    }
}
    return(
        <div>
        <Tabs onChange={(e)=>setkey(e)}>
        {data?.map((ite)=>(
            <Tabs.TabPane key={ite?.key
            } tab={
                <Badge > {ite?.title}</Badge>
            }>
            </Tabs.TabPane>
        ))}
        </Tabs>
        {datas(key)}
        </div>  
    )
}
export default Antd;