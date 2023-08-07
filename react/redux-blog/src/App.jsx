import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, deleteBlog, getBlogs } from './redux/store'

const App = () => {
  const callAction = useDispatch()
  const [userResponse, setUserResponse] = useState({
    title: "Learn Redux Toolkit",
    desc: "The most popular State mang. Tool",
    hero: "https://images.unsplash.com/photo-1691073123397-d93b4e3b9991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  })

  const { blogs, blogDelete } = useSelector(state => state.articles)
  useEffect(() => {
    callAction(getBlogs())
  }, [blogDelete])
  return <>
    <button
      onClick={e => callAction(addBlog(userResponse))}>
      add blog
    </button>
    <hr />
    {
      blogs.map(item => <div>
        <span>{item.title}</span>
        <button>edit</button>
        <button
          onClick={e => callAction(deleteBlog(item.id))}>delete</button>
      </div>)
    }
  </>
}





export default App