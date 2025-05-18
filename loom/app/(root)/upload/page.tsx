'use client'
import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import { visibilities } from '@/constants'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    visibility:'public',
  });

  const [error, setError] = useState<string | null>(null)


const handleInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}
  return (
<div className="wrapper page">
  <h1>Upload a video</h1>
  {error && <div className="error-field">{error}</div>}
  
  <form action="" className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5 '>

      
  {/* <FileInput
  
  /> */}
  <FormField 
  id="title"
  label="Title"
  type="text"
  value={formData.title}
  onChange={handleInputChnage}
  placeholder="Title of your video"
  options={
    [
      { label: 'Public', value: 'public' },
      { label: 'Unlisted', value: 'unlisted' },
      { label: 'Private', value: 'private' },
    ]
  }
  />

  
  </form>
  

</div>  )
}

export default page