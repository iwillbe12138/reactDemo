/*
 * @Description:ToDoList
 * @Author: IWillBe12138
 * @Date: 2021-09-13 17:06:50
 * @LastEditTime: 2022-04-03 20:50:48
 * @LastEditors: IWillBe12138
 */
import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import XiaojiejeiItem from '../XiaojiejieItem'
import store from '../store'
import { CHANGE_INPUT, ADD_LIST, DELETE_ITEM } from '../store/actionTypes'

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
        store.subscribe(this.storeChange) //react-redux新版本不需要 订阅 数据发生变化 触发回调函数
    }
    render() {
        // return (
        //     <div>
        //         <div style={{ margin: '10px' }}>
        //             <Input
        //                 placeholder="Write Something"
        //                 style={{ width: '240px', marginRight: '20px' }}
        //             ></Input>
        //             <Button type="primary">增加</Button>
        //         </div>
        //     </div>
        // )
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder="Write Something"
                        style={{ width: '250px', marginRight: '10px' }}
                        value={this.state.inputValue}
                        onChange={this.changeInputValue}
                        // ref={(input) => {
                        //     this.input = input
                        // }}
                    ></Input>
                    <Button onClick={this.addList.bind(this)} type="primary">
                        增加
                    </Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}></div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={
                        // item => <XiaojiejeiItem content={item} />
                        (item, index) => (
                            <List.Item
                                onClick={this.deleteItem.bind(this, index)}
                            >
                                {item}
                            </List.Item>
                        )
                    }
                />
                {/* {this.state.list.map((item, index) => {
                    return (
                        <XiaojiejeiItem
                            key={index}
                            index={index}
                            content={item}
                            deleteItem={this.deleteItem.bind(this)}
                        />
                    )
                })} */}
            </div>
        )
    }
    changeInputValue(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }
    async addList() {
        const action = {
            type: ADD_LIST
        }
        await store.dispatch(action)
    }
    deleteItem(index) {
        const action = {
            type: DELETE_ITEM,
            value: index
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default ToDoList
