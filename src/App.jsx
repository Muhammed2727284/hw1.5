import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page';
import Page2 from './Page2';
import './style.css';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((response) => {
        console.log(response)
        setUsers(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((response) => {
        setPosts(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);




  return (
    <BrowserRouter>
      <header className='header-container'>
        <div>
          <Link to={'/'}>Logo</Link>
        </div>
        <div>
          <Link to={'/'}>home</Link>
          <Link to={'/page1'}>page1</Link>
          <Link to={'/page2'}>page2</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 users={users} />} />
        <Route path="/page2" element={<Page2 posts={posts} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
