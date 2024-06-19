import { useState, useEffect } from "react";
import deleteIcon from './assets/delete.png';

export default function Item({ id, title, check, removeItem, toggle }) {
  const [boxShadowColor, setBoxShadowColor] = useState("");

  useEffect(() => {
    setBoxShadowColor(randomColor());
  }, []);

  function randomColor() {
    const val = "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0');
    return `-4px 0px${val}`;
  }

  return (
    <div className="itemm" style={{ boxShadow: boxShadowColor }}>
      <label htmlFor="item" className="items">
        <input
          checked={check}
          onChange={() => toggle(id)}
          type="checkbox"
          className="checkk"
        />{" "}
        {title}
      </label>
      <button onClick={() => removeItem(id)} className="delete">
        <img width="22px" src={deleteIcon} alt="delete icon" />
      </button> 
    </div>
  );
}
