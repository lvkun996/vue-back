export const getItem = name => {
  return window.sessionStorage.getItem(name)
}

export const setItem = (name, payload) => {
  const data = typeof payload === 'object' ? JSON.stringify(payload) : payload

  window.sessionStorage.setItem(name, data)
}

export const removeItem = name => {
  window.sessionStorage.removeItem(name)
}
