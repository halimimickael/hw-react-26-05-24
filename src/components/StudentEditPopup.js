import React, { useRef, useContext } from 'react';
import { AppContext } from '../context/Context1';

export default function StudentEditPopup() {
  const {
    setShowEdit,
    currentStudentEdit,
    updatedStudent
  } = useContext(AppContext);

  const nameRef = useRef();
  const scoreRef = useRef();

  const handleUpdate = (e) => {
    e.preventDefault(); 

    const updatedStudentData = {
      name: nameRef.current.value,
      score: scoreRef.current.value
    };

    updatedStudent(currentStudentEdit.id, updatedStudentData);
    setShowEdit(false);
  };

  return (
    <div className='dark_edit'>
      <div className='dark_box_edit'>
        <h2>Edit Student</h2>
        <form onSubmit={handleUpdate}>
          <label>Name:</label>
          <input
            defaultValue={currentStudentEdit.name}
            ref={nameRef}
            type="text"
            className='form-control'
          />
          <label>Score:</label>
          <input
            defaultValue={currentStudentEdit.score}
            ref={scoreRef}
            type="number"
            className='form-control'
          />
          <button type='submit' className='btn btn-success mt-3'>
            Update
          </button>
          <button
            type='button'
            onClick={() => setShowEdit(false)}
            className='btn btn-danger mt-3'
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
