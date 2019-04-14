const initialState = {
    lists:[],
    cards:[],
    positions:[],
    drags:[]
}

export function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOAD_LISTS':
      return {
        ...state,
        lists:action.data
      }

      case 'LOAD_CARDS':
      return {
        ...state,
        cards:action.data
      }

      case 'LOAD_POSITIONS':{

      return {
        ...state,
        positions:action.data

      }
    }
      case 'ADD_CARDS':
      return {
        ...state,
       cards:[...state.cards,action.data]
      }
      
      case 'ADD_LISTS':{
        
        return {
          ...state,
         lists:[...state.lists,action.data[0]],
         positions:[...state.positions,action.data[1]]
         
        }
      }
      
      
      default:return state;
    }
  }