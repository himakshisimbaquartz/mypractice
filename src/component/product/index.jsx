import React from "react";
// import './indexStyle.css';
const Product = () => {
    return (
        <>
            <div className="wrapper w-full flex justify-center">
                <div className=" flex flex-col w-[60%] rounded-md">
                    <form className=" flex justify-center mx-auto p-10 rounded-md flex-col bg-red-400 p-2 w-[300px]">
                        <div>
                            <label for="chooseProduct" class="text-gray-700 font-bold mb-2">Choose Product:</label>
                            <select id="chooseProduct " name="chooseProduct">
                                <option value="product1">Product 1</option>
                                <option value="product2">Product 2</option>
                                <option value="product3">Product 3</option>
                            </select>
                        </div>
                        <div className="">
                            <label for="productType" class="text-gray-700 font-bold mb-2">Product Type:</label>
                            <input type="text" id="productType" name="productType" className="border" />
                        </div>
                        <div>
                            <label for="model" class="text-gray-700 font-bold mb-2">Model:</label>
                            <input type="text" id="model" name="model" />
                        </div>
                        <div>
                            <label for="serialNo" class="text-gray-700 font-bold mb-2">Serial No.:</label>
                            <input type="text" id="serialNo" name="serialNo" />
                        </div>
                        <div>
                            <label for="department" class="text-gray-700 font-bold mb-2">Department:</label>
                            <input type="text" id="department" name="department" />
                        </div>
                        <div>
                            <label for="installationDate" class="text-gray-700 font-bold mb-2">Installation Date:</label>
                            <input type="date" id="installationDate" name="installationDate" />
                        </div>
                        <div>
                            <label for="productPrice" class="text-gray-700 font-bold mb-2">Product Price:</label>
                            <input type="number" id="productPrice" name="productPrice" />
                        </div>
                        <input type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    )
}
export default Product