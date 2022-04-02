/*
 * @Description:redux
 * @Author: IWillBe12138
 * @Date: 2022-03-16 05:31:38
 * @LastEditTime: 2022-03-16 18:54:58
 * @LastEditors: IWillBe12138
 */

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
