import React from 'react'
import StudentsList from './StudentsList'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router'

const StudentListView = () => {

    const navigate = useNavigate()
  return (
    <div className='w-screen h-full'>
    <div className="m-3 md:mx-10 lg:mx-12 md: p-3 md:p-6 flex justify-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          WELCOM TO STUDENT MANAGEMENT SYSTEM
        </h1>
      </div>
      <Button onClick={()=> navigate('/')} className="btn bg-blue-500 ms-4 md:ms-10">
        Back
      </Button>
      <StudentsList/>
    </div>
  )
}

export default StudentListView