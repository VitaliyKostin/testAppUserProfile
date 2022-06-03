export const ChangeProfile = (userId, userData) => {
  return {
    type: 'CHANGE_PROFILE',
    payload: userData
  }
}