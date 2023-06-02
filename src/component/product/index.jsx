import { floatButtonPrefixCls } from "antd/es/float-button/FloatButton";
import React from "react";
// import './indexStyle.css';
const Product = () => {
    return (
        <>
            <div className="wrapper w-full flex justify-center">
                <div className=" flex flex-col w-[60%] rounded-md">
                    <form className=" flex justify-start mx-auto p-10 rounded-md flex-col bg-slate-500 shadow-[0_0_0.5rem] p-6 w-[500px] ">
                        <div className="mb-4 flex justify-center flex-col" >
                            <label for="chooseProduct" class="text-gray-700 font-bold mb-2 text-white font-serif">Choose Product:</label>
                            <select id="chooseProduct " name="chooseProduct" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-sm">
                                <option value="product1">Product 1</option>
                                <option value="product2">Product 2</option>
                                <option value="product3">Product 3</option>
                            </select>
                        </div>
                        <div className="mb-4 flex justify-center flex-col">
                            <label for="productType" class="text-gray-700 font-bold mb-2 text-white font-serif">Product Type:</label>
                            <input type="text" id="productType" name="productType" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-md" />
                        </div>
                        <div className="mb-4 flex justify-center flex-col">
                            <label for="model" class="text-gray-700 font-bold mb-2 text-white font-serif">Model:</label>
                            <input placeholder="" type="text" id="model" name="model" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-md" />
                        </div>
                        <div className="mb-4 flex justify-center flex-col">
                            <label for="serialNo" class="text-gray-700 font-bold mb-2 text-white font-serif">Serial No.:</label>
                            <input placeholder="" type="text" id="serialNo" name="serialNo" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-md"/>
                        </div>
                        <div className="mb-4 flex justify-center flex-col">
                            <label for="department" class="text-gray-700 font-bold mb-2 text-white font-serif">Department:</label>
                            <input placeholder="" type="text" id="department" name="department" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-md"/>
                        </div>
                        <div className="mb-4 flex justify-center flex-col">
                            <label for="installationDate" class="text-gray-700 font-bold mb-2 text-white font-serif">Installation Date:</label>
                            <input placeholder=""type="date" id="installationDate" name="installationDate" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-md"/>
                        </div>
                        <div className="mb-4 flex justify-center flex-col">
                            <label for="productPrice" class="text-gray-700 font-bold mb-2 text-white font-serif">Product Price:</label>
                            <input placeholder="" type="number" id="productPrice" name="productPrice" className="p-[0.5rem_1rem] font-serif border-none outline-none rounded-md"/>
                        </div>

          
                        <button type="submit" className="p-3 bg-black text-white font-serif w-[5rem] rounded-md mx-auto">Submit</button>
                    </form>
                </div>
            </div>
        </>
        
    )
}
export default Product