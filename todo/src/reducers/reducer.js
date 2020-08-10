
export const initialToDoState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
},
{
    item: 'Get MVP',
    completed: false,
    id: 32142352454
},
{
    item: '???',
    completed: false,
    id: 1234567891
},
{
    item: 'Profit',
    completed: false,
    id: 9876543210
}]

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            console.log(state)
                
                return [
                    ...state,
                    {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                    }]
        case 'TOGGLE':
              
                return state.map(toDo =>{
                    if (toDo.id === action.payload) {
                        return{
                            ...toDo,
                            completed: !toDo.completed
                        }
                    } else {
                        return toDo
                    }
                });
        case 'CLEAR':
          
            return state.filter(toDo =>
                toDo.completed === false
                )
            console.log(state)
            return state
    
            
        default:
            return state
    }
}