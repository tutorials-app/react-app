import users from './data/users.json'

const INIT_STATE = {
  items: users,
  item: users[0]
}

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET': {
      const { id } = action.payload
      const { items } = state

      const idx = items.findIndex(item => item.id === parseInt(id))
      if (idx < 0) return state

      return {...state, item: items[idx]}
    }
    case 'ON_CHANGE': {
      const { key, value } = action.payload
      const { item } = state
      item[key] = value

      return {...state, item: {...item}}
    }
    case 'UPDATE': {
      const { item, items } = state
      const idx = items.findIndex(it => it.id === item.id)
      if (idx < 0) return state

      items[idx] = {...item}

      return {...state, items: [...items], item: {...item}}
    }
    case 'DELETE': {
      const { id } = action.payload
      const { items } = state

      const idx = items.findIndex(item => item.id === id)
      if (idx < 0) return state

      items.splice(idx, 1)
      
      return {...state, items: [...items] }
    }
    default: {
      return state;
    }
  }
}