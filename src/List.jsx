import Item from "./Item"

export default function List({todo ,removeItem,toggle}){

    return(
        <div className="list">
            {todo.length === 0 && "Nothing to do yet ... "}
            {
                todo.map(
                    (val) => (
                    <Item key={val.id} id={val.id} title={val.title} check={val.check} removeItem={removeItem} toggle={toggle} />
                    ))
            }
        </div>
    )
}