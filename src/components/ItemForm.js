import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formData, setFormData]= useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  
  function formSet(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onItemFormSubmit(formData)
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={formSet} />
      </label>

      <label>
        Category:
        <select name="category" onChange={formSet}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}


export default ItemForm;