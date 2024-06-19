import { useState } from "react"

export default function Additem({addtodo}){
    const [newItem,setNewItem] = useState("");

    function handle(e){
        e.preventDefault();

        if (newItem === "") return

        addtodo(newItem)
        setNewItem("")
    }

    return(
        <form className="newitem" onSubmit={handle}>
            <label htmlFor="nitem">What's next todo</label>
            <input id="nitem" type="text" value={newItem} onChange={e => setNewItem(e.target.value)} name="newitem" placeholder=" buy milk..." />
            <button type="submit" >Add it</button>
        </form>
    )
} 