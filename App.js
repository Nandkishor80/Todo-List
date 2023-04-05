import React, { useState } from 'react';
import './App.css';

function App() {

  const [item, setItem] = useState("")   // Add input Item
  const [addNewItem, setaddNewItem] = useState([])
  const [newEditItem, setnewEditItem] = useState("")   // Edit Item
  const [ids, setId] = useState(0)
  const [y, setY] = useState("")

  // Add Input Item...........................................
  function addinputItem(e) {
    setItem(e.target.value)
  }

  // Add Item....................................................
  function addItem() {
    const data = [...addNewItem]
    data.push(item)
    setaddNewItem(data)
    setItem("")
  }

  // // Edit Input Item...............................................
  function editinputItem(e) {
    setnewEditItem(e.target.value)
  }

  function editItem(ids) {
    const data = [...addNewItem]
    data[ids] = newEditItem
    setaddNewItem(data)
    setnewEditItem("")
  }

  function changeeditItem(id) {
    const newEditItem = [...addNewItem]
    setnewEditItem(newEditItem[id])
    setId(id)
  }

  // Remove Item from table
  function removeitem(id) {
    const newData = [...addNewItem]
    newData.splice(id, 1)
    setaddNewItem(newData)
  }

  // Search section............................
  function searchInputItem(e) {
    setY(e.target.value)
  }

  function searchItem() {
    addNewItem.forEach((v) => {
      if (v === y) {
        setaddNewItem([])    // Table Empty
        const data = []
        data.push(y)
        setaddNewItem(data)
      } else {
        setaddNewItem([])
        const data = []
        data.push("Data Not found")
        setaddNewItem(data)
      }
    })

  }

  return (
    <div className="App">
      <h1>ToDoList App</h1>
      <input type="text" placeholder='Add Item Here' value={item} onChange={addinputItem} />
      <button onClick={addItem}>add</button>

      <input type="text" placeholder='Add Item Here' className='editItem' value={newEditItem} onChange={editinputItem} />
      <button onClick={() => editItem(ids)}>edit</button>
      <input type="text" placeholder='Search Here' value={y} onChange={searchInputItem} />
      <button onClick={searchItem}>Seach</button>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addNewItem && addNewItem.map((value, id) => (
              <tr key={id}>
                <th>{id + 1}</th>
                <th>{value}</th>
                <th><button onClick={() => changeeditItem(id)}> E </button></th>
                <th><button onClick={() => removeitem(id)}> D </button></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
