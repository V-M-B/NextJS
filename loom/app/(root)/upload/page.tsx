'use client'
import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [error, setError] = useState<string | null>(null)
  return (
<div className="wrapper page">
  <h1>Upload a video</h1>
  {error && <div className="error-field">{error}</div>}
  
  <form action="" className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5 '>

      
  <FileInput />
  <FormField />

  
  </form>
  

</div>  )
}

export default page