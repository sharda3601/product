import React,{useState, useEffect} from "react";



function Update() {
    const[product, setProduct] = useState([]);
    const[id, setId] = useState(0);
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState(0);
    const [file, setFile] = useState('');


    useEffect(()=>{
        getData();
    },[])

    function getData(){
        fetch("http://localhost:3000/Product").then(result=>{
            result.json().then(res=>{
                console.log(res);
                setProduct(res);
            })
        })
    }

    //edit data
    const editdata = (id) =>{
        alert(id);
        console.log(product)
        setId(product[id].id)
        setName(product[id].name)
       setDescription(product[id].description);
       setPrice(product[id].price);
        //setFile(product[id].file);
    }


    //update date
    const updateData = () =>{
        const update = {name, description, price}
        fetch("http://localhost:3000/Product/"+id,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(update)
        }).then(res=>{
            res.json().then(Response=>{
              //  console.log(Response);
               getData();
            })
        })
    }


    //delete data
    const deleteData = (id)=>{
        fetch("http://localhost:3000/Product/"+id,{
            method : "DELETE",
        }).then(result=>{
            result.json().then(res=>{
                console.log(res);
                getData();
            })
        })
    }
    return ( 
        <>
        <h2>Product data</h2>
        <table className="table table-bordered">
            <tr>
            <th>SR NO</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Product Price</th>
                <th colSpan="2">Operations</th>
            </tr>
            {product.map((item,i)=>
                <tr key={item.id}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>editdata(i)}>Edit</button></td>
                    <td><button type="button" className="btn btn-warning" onClick={()=>deleteData(item.id)}>Delete</button></td>
                </tr>
            

            )}
        </table>
        <h2 className="mt-5">update Product</h2>
        <form className="w-50 mb-5 border shadow p-5 mx-auto text-start">
            <div className="my-3">
                <label className="form-label">Product Name</label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="my-3">
                <label className="form-label">Product Description</label>
            <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
             <div className="my-3">
                <label className="form-label" >Price</label>
            <input type="text" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            
            <div className="my-3 text-center">
                <button type="button" className="btn btn-warning" onClick={updateData}>Update</button>
            </div>
        </form>
        </>
     );
}

export default Update;