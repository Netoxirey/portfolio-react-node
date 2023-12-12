import Input from '@components/Input'
import Select from "@components/Select"
import { optionsArray } from '../utils/utils'
function ProjectForm() {
  return (
    <form className='project_form'>
      <Input name="Title"/>
      <Input name="Description"/>
      <Input name="GithubUrl"/>
      <Input name="DemoUrl" />
      <Select options={optionsArray}/>
      <input type="file" />
    </form>
  )
}

export default ProjectForm