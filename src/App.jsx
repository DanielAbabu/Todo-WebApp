// Crafted by  Daniel Ababu

import { useEffect, useState } from "react"

import Additem from "./AddItem"
import List from "./List"
import './App.css'


export default function App(){
  const [todo, settodo] = useState(()=>{
    const values = localStorage.getItem("ITEMS");

    return values === null ? [] : JSON.parse(values);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  },[todo])

  function addtodo(title){
      
    settodo(currtodo => {
        return[
          ...currtodo , 
          {id : crypto.randomUUID(), title , check : false},
        ]
    })
  }


  function removeItem(id){
    settodo( currtodo => 
      currtodo.filter((item)=>(item.id !== id))
    )
  }

  function toggle(id){
    settodo( currtodo => {
      return currtodo.map( val => val.id === id ? {...val, check: !(val.check)} : val)
    })
  }

  


  return (
    < div className="app">
      <Additem addtodo={addtodo}/>
      <List todo = {todo} removeItem={removeItem} toggle={toggle}/>

    </div>
  )
}