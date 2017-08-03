const InitState = {
  cData: {} 
}


export function cReducer (state = InitState, action) {
  
  switch (action.type) {
  case 'GET_DATA':
    return {
      cData: [...state.cData, action.data]
    }

  default:
    return state
  }

}
