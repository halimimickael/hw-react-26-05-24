import React, { useRef,useContext } from 'react'
import { AppContext } from '../context/Context1';

export default function StudentsForm() {
  const {addStudent,resetList} = useContext(AppContext)
  
  const nameRef = useRef();
  const scoreRef = useRef();

  const onSub = (e) => {
    e.preventDefault();
    const newItem = {
      name:nameRef.current.value,
      score:scoreRef.current.value,
      id:Date.now()
    }
    console.log(newItem);
    addStudent(newItem)
  }

  return (
    <div>
      <h2>Add new student form</h2>
      <button onClick={resetList} className='btn btn-danger'>Reset all</button>
      <form onSubmit={onSub} className='col-md-6'>
        <label>Name:</label>
        <input ref={nameRef} type="text" className='form-control' />
        <label>Score:</label>
        <input defaultValue={"08:00"} ref={scoreRef} type="number" className='form-control' />
        <button className='btn btn-success mt-3'>Add new</button>
      </form>
    </div>
  )
}
