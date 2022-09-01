import { legacy_createStore as createStore } from 'redux'
import reducer from '../reducers'


const store = createStore(reducer)

store.subscribe(() => console.log('Cambiando el estado'))

export default store