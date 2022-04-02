/*
 * @Description: item
 * @Author: iwillbe12138
 * @Date: 2021-03-16 17:53:07
 * @LastEditTime: 2022-02-13 18:40:43
 * @LastEditors: IWillBe12138
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
class XiaojiejeiItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content != this.props.content) {
            return true
        } else {
            return false
        }
        // return true
    }

    render() {
        // console.log('child-render')
        return (
            // 子组件
            <li onClick={this.handleClick}>{this.props.content}</li>
        )
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
        // console.log(this.props.index)
        // this.props.list = [];//错误示范  不能直接修改父组件的值
        // this.props.deleteItem(this.props.index)
    }
}
XiaojiejeiItem.propTypes = {
    // avname: PropTypes.string.isRequired, //必传
    // name: PropTypes.string.isRequired, //必传
    index: PropTypes.number,
    deleteItem: PropTypes.func,
    content: PropTypes.string,
}
// XiaojiejeiItem.defaultProps = {
//     avname: '啊啊啊',
// }
export default XiaojiejeiItem
