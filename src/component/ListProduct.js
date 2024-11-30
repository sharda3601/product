import React ,{useState, useEffect} from "react";
import Nav from './Nav';

function ListProduct() {
    const [List, setList] = useState([]);
    const [count, setCount] = useState(0);
    const[msg, setMessage] = useState('');

    useEffect(()=>{
        fetch("http://localhost:3000/Product").then(res=>{
            res.json().then(response=>{
                console.log(response);
                setList(response);
            })
        })
    },[])
    return ( 
        <>
        <Nav/>
        <h2 className="mt-5">Product List</h2>
         <div className="card-group">
            {List.map(item=>
                <div className="card">
                    <div className="card-header">
                    <img src="C:\Users\shree\OneDrive\Documents\Radiant\radiant it services pvt ltd_sharda\images\1b.webp" alt="Fetched from API" onError={() => setMessage('Failed to load image')} />
                    </div>
                        <div className="card-body">
                       <h2>{item.name}</h2> 
                      <p>{item.description}</p>
                      <span>Rs. {item.price}</span>
                      <br/>
                      <button className="btn-group btn border-0">
                        <button className="btn btn-outline-success" onClick={()=>setCount(count-1)}>-</button>
                        <button className="btn btn-outline-success">{count}</button>
                        <button className="btn btn-outline-success" onClick={()=>setCount(count+1)}>+</button>
                      </button>
                    </div>
                    </div>
            )}
         </div>
        </>
     );
}

export default ListProduct;
