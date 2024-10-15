import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    email: username,
    password: password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'patch'
  })
}

export function forgotPassword(data) {
  return request({
    url: '/forgot/password',
    method: 'put',
    data: data
  })
}

export function resetPassword(data) {
  return request({
    url: '/reset/password',
    method: 'put',
    data: data
  })
}

export function verifyEmail(data) {
  return request({
    url: '/account/verify',
    method: 'get',
    params: data
  })
}

export function checkLoginCredentials(data) {
  return request({
    url: '/auth/check',
    method: 'post',
    data
  })
}

export function doSignUp(data) {
  return request({
    url: '/signup',
    method: 'post',
    data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/profile',
    method: 'get'
  })
}
