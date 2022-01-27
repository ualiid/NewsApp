import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {handleSearch,query} = useGlobalContext()
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const Searching=(e)=>{
  handleSearch(e.target.value)
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h2> Search hackers news </h2>
      <input 
      type ='text'
      className='form-input'
      value={query}
      onChange={Searching}/>
    </form>
  )
}

export default SearchForm
