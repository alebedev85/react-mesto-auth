export const BASE_URL = 'https://auth.nomoreparties.co';

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, password: password })
  })
    .then((res) => {
      return res.json()
    })
    .then((JWT) => {
      return JWT
    })
    .catch((err) => console.log(err))
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, password: password })
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => console.log(err))
}

export const checkUser = (JWT) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${JWT}`
    }
  })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res
    })
    .catch((err) => console.log(err))
}
