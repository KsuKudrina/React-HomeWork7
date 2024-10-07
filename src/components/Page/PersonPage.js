import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function PersonPage (personId) {
  const { theme } = useSelector(state => state.theme)
  const { user, usLoading, usError } = useSelector(state => state.user)
  return (
    <>
      <Link className={`btnlink ${theme}`} to='/users'>
        Назад
      </Link>
      <div className='content'>
        <h3>{user.username}</h3>
        {usLoading && <p>Загрузка...</p>}
        {usError && <p>Ошибка {usError}</p>}
        <div>
          <p>User: {user.name}</p>
          <p>e-mail: {user.email}</p>
          <p>phone: {user.phone}</p>
        </div>
      </div>
    </>
  )
}

export default PersonPage
