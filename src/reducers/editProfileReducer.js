const INITIAL_STATE = {
  fullName: null,
  email: null,
  address: null,
  country: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_PROFILE':
      return { ...state, fullName: action.payload.fullName, email: action.payload.email, address: action.payload.address, country: action.payload.country }

    default:
      return state;
  }
}