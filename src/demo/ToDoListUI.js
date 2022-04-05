/*
 * @Description:ToDoListUI
 * @Author: IWillBe12138
 * @Date: 2022-04-05 17:15:57
 * @LastEditTime: 2022-04-05 21:55:31
 * @LastEditors: IWillBe12138
 */

import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import PropTypes from 'prop-types'
class ToDoListUI extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
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
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                        // ref={(input) => {
                        //     this.input = input
                        // }}
                    ></Input>
                    <Button onClick={this.props.addList} type="primary">
                        增加
                    </Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}></div>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={
                        // item => <XiaojiejeiItem content={item} />
                        (item, index) => (
                            <List.Item
                                onClick={() => this.props.deleteItem(index)}
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
    deleteItem(index) {
        console.log(index)
        this.props.deleteItem(index)
    }
}
ToDoListUI.propTypes = {
    inputValue: PropTypes.string,
    changeInputValue: PropTypes.func,
    addList: PropTypes.func,
    list: PropTypes.array,
    deleteItem: PropTypes.func
}
export default ToDoListUI
