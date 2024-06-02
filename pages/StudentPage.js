import React,{useContext} from 'react'
import StudentsForm from '../components/StudentsForm'
import StudentsList from '../components/StudentsList'
import StudentEditPopup from '../components/StudentEditPopup'
import { AppContext } from '../context/Context1.js'

export default function StudentPage() {
  const {showEdit} = useContext(AppContext)
 

  return (
    <div className='container_page'>
      {showEdit && <StudentEditPopup /> }
      <StudentsForm />
      <StudentsList />
    </div>
  )
}
