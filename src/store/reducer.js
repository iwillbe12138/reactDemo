/*
 * @Description:reducer
 * @Author: IWillBe12138
 * @Date: 2022-03-16 05:56:49
 * @LastEditTime: 2022-04-05 17:44:14
 * @LastEditors: IWillBe12138
 */
import { CHANGE_INPUT, ADD_LIST, DELETE_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: [
        '早8点开晨会,分配今天的开发任务',
        '早9点和项目经理开需求沟通会',
        '早9点和项目经理开需求沟通会'
    ]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    // console.log(state, action)
    //Reducer 里只能接受state，不能改变state
    if (action.type === CHANGE_INPUT) {
        // let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === ADD_LIST) {
        // let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type === DELETE_ITEM) {
        // let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}
