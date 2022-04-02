/*
 * @Description:reducer
 * @Author: IWillBe12138
 * @Date: 2022-03-16 05:56:49
 * @LastEditTime: 2022-04-02 20:27:26
 * @LastEditors: IWillBe12138
 */
const defaultState = {
    inputValue: '',
    list: [
        '早8点开晨会，分配今天的开发任务',
        '早9点和项目经理开需求沟通会',
        '早9点和项目经理开需求沟通会'
    ]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    // console.log(state, action)
    //Reducer 里只能接受state，不能改变state
    if (action.type === 'changeInput') {
        // let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === 'addList') {
        console.log(11)
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    return state
}
