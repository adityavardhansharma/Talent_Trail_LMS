"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext } from 'react'

function AddCourse() {
    const {user}=useUser();
    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext)


    return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-3xl'>Hello, 
            <span className='font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>{user?.fullName}</span></h2>
            <p className='text-sm text-gray-500'>Create new course with AI</p>
        </div>
        <Link href={userCourseList?.length>=5?'https://www.github.com':'/create-course'}>
             <Button className='bg-gradient-to-tl from-blue-600
       to-blue-800 hover:from-blue-800 hover:to-blue-600'>Create Course +</Button>
        </Link>
    </div>
  )
}

export default AddCourse