/*
 * @Description:ToDoList
 * @Author: IWillBe12138
 * @Date: 2021-09-13 17:06:50
 * @LastEditTime: 2022-04-05 17:51:13
 * @LastEditors: IWillBe12138
 */
import React, { Component } from 'react'
import 'antd/dist/antd.css'

import XiaojiejeiItem from '../XiaojiejieItem'
import store from '../store'

import ToDoListUI from './ToDoListUI'
import {
    changeInputAction,
    addListAction,
    deleteItemAction
} from '../store/actionCreators'

const data = [
    '早8点开晨会，分配今天的开发任务',
    '早9点和项目经理开需求沟通会',
    '早9点和项目经理开需求沟通会'
]

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange) //react-redux新版本不需要 订阅 数据发生变化 触发回调函数
    }
    render() {
        return (
            <ToDoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addList={this.addList}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        )
    }
    changeInputValue(e) {
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addList() {
        const action = addListAction()
        store.dispatch(action)
    }
    deleteItem(event) {
        // const value = event.target.value
        console.log(event)
        // console.log(value)
        const action = deleteItemAction(event)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default ToDoList
