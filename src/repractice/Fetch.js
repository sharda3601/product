import React, { useEffect, useState } from "react";
import axios from 'axios';

function Fetch() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    /* useEffect(()=>{
         fetch("https://api.themoviedb.org/3/movie/popular?api_key=b488a01ae4280df2b88836a791e690eb")
         .then((result)=>
         result.json().then((result)=>{
             console.log(result.results);
           // setData(result.results);
         }))
 
     },[])*/

    /*async function update(){
        try{
        let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b488a01ae4280df2b88836a791e690eb");
        let userdata = await response.json();
        console.log(userdata.results)
        }catch(err){
            console.log(err);
        }
    }*/


    /* async function update(){
         try{
             let { data }= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b488a01ae4280df2b88836a791e690eb");
            console.log(data.results) ;
            setData(data.results);
         }catch(err){
             console.log(err);
         }
     } */

    useEffect(() => {
        getData();
    }, [])
    let url = 'http://localhost:3000/Register';
    function getData() {
        axios.get(`${url}`)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            }
            ).catch((err) =>
                console.log(err))
    }
    //update();

    //delete query
    async function deletedata(id) {
        alert(id);
        try {
            let deleted = await axios.delete(`${url}/${id}`)
            //console.log({deleted});
            getData();
        } catch (err) {
            console.log(err);
        }
    }

    //edit data
    async function editData(id) {
        alert(id)
        try {
            let result = await axios.get(`${url}/${id}`);
            console.log(result.data);
            setId(result.data.id);
            setName(result.data.name);
            setEmail(result.data.email);
        } catch (err) {
            console.log(err);
        }
    }

    //update data
    function updateData() {
        let result = {id, name, email};
        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        }).then((resp) => {
                    resp.json()            
        }).then((data)=>{
            //setData(data)
            getData();
        }

        ).catch((err) =>
            console.log(err))

    }
    return (
        <>
            <h1>API</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>
                            <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button className="btn btn-outline-primary" onClick={() => deletedata(item.id)}>DELETE</button></td>
                            <td><button className="btn btn-outline-primary" onClick={() => editData(item.id)}>EDIT</button></td>
                        </tr>
                        
                           
                        )}
                </tbody>
            </table>



            <br></br>
            <div className="border border-1 w-50 mx-auto p-3 m-5">
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <button className="btn btn-outline-primary" onClick={() => updateData()}>UPDATE</button>
            </div>
        </>
    );
}

export default Fetch;