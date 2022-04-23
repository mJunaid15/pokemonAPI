import React, { useEffect, useState } from "react"
import axios from "axios";




const App =()=>{
  const [num , setNum]= useState();
  const [move, setMove] =useState();
  const [name, setName] =useState();


  useEffect(()=>{
    // alert('hi')
    const link = `https://pokeapi.co/api/v2/pokemon/${num}`;
    async function getData(){
      const res = await axios.get(link);
      console.log(res);
      setName(res.data.name);
      setMove(res.data.moves[2].move.name);

    }
    getData();

  });

  return(
    <>
    <h1>you choose <span style={{color:'red'}}>{num} </span> value </h1>
    <h1>my name is <span style={{color:'red'}}>{name}</span>   </h1>
    <h1>you choose <span style={{color:'red'}}>{move}</span>  moves </h1>

    <select value={num} onChange={(event)=>{
      setNum(event.target.value);

    }}>
      <option value="1">1</option>
      <option value="25">25</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>


    </select>
    </>
  );
};
 export default App;