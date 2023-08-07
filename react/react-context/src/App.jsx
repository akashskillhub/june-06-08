import React, { createContext } from 'react'
import Parent from './pages/Parent'


export const BlogContext = createContext()
const App = () => {
  const demo = ["dell", "hp"]
  const BLOGS = [
    { title: "React is Fun" },
    { title: "Redux is Awesome" },
  ]
  return <>
    <BlogContext.Provider value={BLOGS}>
      <Parent demo={demo} />
    </BlogContext.Provider>
  </>
}

export default App