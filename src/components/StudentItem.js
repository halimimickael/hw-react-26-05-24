import React,{useContext} from 'react'
import { AppContext } from '../context/Context1'


export default function StudentItem({item}) {

  const {deleteStudent,setShowEdit,setCurrentEdit} = useContext(AppContext)

  return (
    <div className='border p-2 my-2'>
      
      <button onClick={() => {
        deleteStudent(item.id)
      }} className='btn bg-danger float-end'>X</button>
      <button onClick={() => {
        setShowEdit(true)
        setCurrentEdit(item)
      }} className='btn bg-info float-end'>Edit</button>
      <h5>Name: {item.name} - Score: {item.score}</h5>
    </div>
  )
}
