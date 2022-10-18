import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const arrayOfOptions = categories.map(cat => {
    return <option key={cat} value={cat}>{cat}</option>
  })
//could do: 
//const [formObj, setFormObj] = useState({ text: "", category: "" })
//and then, on the <input> and <select> values, wed do the onChange but it owuld be 
//onChange={(e) => setFormObj({e.target.value})}
//would need to be preventing default, etc, elsewhere

//-or could make a function that handles the change so:
//function handleChange(e){
//const value = e.target.value
//const keyname = e.target.name
//}
//would need to update form obj with new values:
//const newFormObj= {
// ...formObj, 
// [keyName]: value
//}
//setFormObj(newFormObj)
//then, in onChange we would just have onchange={(e) = handleChange(e)}

  const [category, setCategory] = useState('Code')
  const [text, setText] = useState('')

function handleSubmit(e){
  e.preventDefault()
  onTaskFormSubmit({ text, category })
    setText("")
    setCategory("")
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {arrayOfOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
