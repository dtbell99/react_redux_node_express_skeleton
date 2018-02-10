import { combineReducers } from 'redux'
import { configReducer } from './ConfigReducer'

export default combineReducers(
    {
        config: configReducer
    }
)