import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [searchText, setSearchText] = useState("")
  const [fullList, setFullList] = useState([...items])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 const itemsToDisplay = fullList.filter((item) => {
    if (searchText !== "") return item.name.includes(searchText);
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });


  function handleText(e) {
    setSearchText(e.target.value)
  }
  
  function handleSubmit (formData){
    setFullList([...fullList, formData])
  //  console.log(fullList)
  //  console.log(items)
  }

 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleText} search={searchText} />
      <ul className="Items">
      {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
