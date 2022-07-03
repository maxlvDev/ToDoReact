import { useState } from 'react'
import MyButton from './components/Mybutton'
import MyInput from './components/MyInput'
import Postlist from './components/Postlist'
import './App.css'

function App() {
  const [posts, setPosts] = useState([{id:1, title:'Приготовить завтрак'}])
  const [title, setTitle] = useState('')    

  const addTitle = (e) => {
  e.preventDefault()
  const newTitle = {id:Date.now(),title}

  setPosts([...posts, newTitle])
  setTitle('')
  }

  const removeTitle = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">  
      <form>
      <MyInput 
        value = {title}
        onChange = { e => setTitle(e.target.value)}
        type = "text" 
        placeholder = "Введите задачу..."/>   
      <MyButton onClick = {addTitle}>Добавить</MyButton>
      </form>
    {posts.length !== 0 ?  
    <Postlist remove = {removeTitle} posts = {posts}/> :
    <h1 style={{textAlign : 'center'}}>Задачи не найдены!</h1>
    } 
    </div>
  )
}

export default App;
