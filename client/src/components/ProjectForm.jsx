import Input from '@components/Input'
import Select from "@components/Select"
import { optionsArray } from '../utils/utils'
import { useState } from 'react'
function ProjectForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [demoUrl, setDemoUrl] = useState("")
  const [image, setImage] = useState(null)
  const [technologies, setTechnologies] = useState([]);

  const handleChange = (e, setter) => {
    const value = e.target.value
    if(value) {
      setter(value)
    }
  }

  const handleFile = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("githubUrl", githubUrl);
    formData.append("demoUrl", demoUrl);
    formData.append("image", image);
    formData.append("technologies", technologies);
    
     fetch("/api/projects", {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error(error))
    

  }
  
  return (
    <form className='project_form'>
      <Input name="Title" handleChange={(e) => handleChange(e,setTitle)}/>
      <Input name="Description" handleChange={(e) => handleChange(e,setDescription)}/>
      <Select options={optionsArray} label="Select your technologies" setData={setTechnologies}/>
      <Input name="GithubUrl" handleChange={(e) => handleChange(e,setGithubUrl)}/>
      <Input name="DemoUrl" handleChange={(e) => handleChange(e,setDemoUrl)}/>
      <input type="file" onChange={handleFile}/>
      <button className='btn' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default ProjectForm