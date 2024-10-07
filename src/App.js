import './App.scss'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { fetchUsers } from './redux/userReduser'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './components/Page/HomePage'
import UsersPage from './components/Page/UsersPage'
import PersonPage from './components/Page/PersonPage'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './redux/slices/themeSlice'
// import { useSelector } from 'react-redux'

function App () {
  const { theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()
  return (
    <div style={{ height: '100vh' }} className={`App ${theme}`}>
      <BrowserRouter>
        <section className='App-header'>
          <nav>
            <NavLink className='link' to='/'>
              Главная
            </NavLink>
            <NavLink className='link' to='/users'>
              Пользователи
            </NavLink>
          </nav>
          <button
            className={`button ${theme}`}
            onClick={() => {
              dispatch(toggleTheme())
            }}
          >
            Сменить тему
          </button>
        </section>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:userId' element={<PersonPage />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null} */}
    </div>
  )
}

export default App
