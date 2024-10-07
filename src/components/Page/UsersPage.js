import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/slices/usersSlice'
import { fetchUser, showUser } from '../../redux/slices/userSlice'
import { Link } from 'react-router-dom'

function UsersPage () {
  const { users, loading, error } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers(3))
  }, [dispatch])

  const handleClick = userId => {
    dispatch(fetchUser(userId), showUser(userId))
  }
  return (
    <>
      <div className='content'>
        <h1>Пользователи</h1>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка {error}</p>}
        {users.length ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Link
                  onClick={() => handleClick(user.id)}
                  className='link-item'
                  to={`/users/${user.id}`}
                >
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}

export default UsersPage
