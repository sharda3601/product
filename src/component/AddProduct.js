import React, { useState } from "react";
import Nav from './Nav';

function AddProduct() {
    const [name, setName] = useState('');
    const [description , setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState('');


    const addpro= ()=>{
        const data = { name, description, price, file }
            fetch('http://localhost:3000/Product', {
              method: 'POST',
              headers : {
                'Content-Type' : "application/json"
              },
              body : JSON.stringify(data)
            }).then(res=>{
                res.json().then(resp=>{
                    console.log(resp);
                })
            })
        }
      
    return ( 
        <>
        <Nav/>
        <h2 className="mt-5 text-primary">Add Product</h2>
        <form className="mx-auto w-50 my-3 p-5 text-start shadow border border-warning rounded">
            <div className="my-3">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control"  name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="my-3">
                <label className="form-label">Upload Image</label>
                <input type="file" className="form-control" name="file" value={file} onChange={(e)=>setFile(e.target.value)}></input>
            </div>  <div className="my-3">
                <label className="form-label">Price</label>
                <input type="text" className="form-control" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}></input>
            </div>  <div className="my-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" value={description}  name="description" onChange={(e)=>setDescription(e.target.value)}></input>
            </div>
            <div className="my-3 text-center">
                <button type="button" className="btn btn-primary" onClick={addpro}>Save</button>
            </div>
        </form>
        </>
     );
}

export default AddProduct;