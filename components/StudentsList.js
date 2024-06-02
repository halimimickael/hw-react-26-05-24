import React, { useContext } from 'react'
import { AppContext } from '../context/Context1'
import StudentItem from './StudentItem';

export default function StudentsList() {
  const { student_ar } = useContext(AppContext);
  console.log(student_ar);

  return (
    <div className='container_page m-5'>
      <h2>List of students:</h2>
      <span>result: {student_ar.length!==0 ? student_ar.length : 'none students'}</span>
      <div className='container row'>
        {student_ar.map(item => {
          return (
            <StudentItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}
