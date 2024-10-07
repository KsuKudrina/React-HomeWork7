export const loggerMiddleWare = store => next => action => {
  console.log('dispatching', action)
  console.log(
    'Текущее(до того как сработает action) состояние store',
    store.getState()
  )

  const result = next(action)
  console.log(
    'Текущее(ПОСЛЕ того как сработает action) состояние store',
    store.getState()
  )
  return result
}
