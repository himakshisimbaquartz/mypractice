import React from "react";
// import './indexStyle.css';
const Product = () => {
    return (
        <>
            <form className="bg-red-400 p-2 w-[300px]">
                <div>
                    <label for="chooseProduct">Choose Product:</label>
                    <select id="chooseProduct" name="chooseProduct">
                        <option value="product1">Product 1</option>
                        <option value="product2">Product 2</option>
                        <option value="product3">Product 3</option>
                    </select>
                </div>
            <div className="">
                <label for="productType">Product Type:</label>
                <input type="text" id="productType" name="productType"  className="border"/>
                </div>
                <div>
                <label for="model">Model:</label>
                <input type="text" id="model" name="model" />
                </div>
                <div>
                <label for="serialNo">Serial No.:</label>
                <input type="text" id="serialNo" name="serialNo" />
                </div>
                 <div>
                <label for="department">Department:</label>
                <input type="text" id="department" name="department" />
                </div>
                <div>
                <label for="installationDate">Installation Date:</label>
                <input type="date" id="installationDate" name="installationDate" />
                </div>
                <div>
                <label for="productPrice">Product Price:</label>
                <input type="number" id="productPrice" name="productPrice" />
                </div>
                <input type="submit" value="Submit" />
                
            </form>
        </>
    )
}
export default Product