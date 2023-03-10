import { useEffect,useState } from "react"
import axios, { Axios } from 'axios';

function Coffee() {
    const[coffee,setcoffee]=useState({})

    async function callCoffeeApi(){
        let response=await axios.get("https://coffee.alexflipnote.dev/random.json")
        setcoffee(response.data)
        console.log(response);
    }
useEffect(()=>{
callCoffeeApi()
console.log("print");
},[])
  return (
    <>
    <h1>Coffee</h1>
   <img src={coffee.file} alt="" />
   </>
 
  )
}

export default Coffee