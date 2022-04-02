/*
 * @Description:demo
 * @Author: iwillbe12138
 * @Date: 2021-03-05 01:02:17
 * @LastEditTime: 2022-02-13 18:16:19
 * @LastEditors: IWillBe12138
 */

import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
//Fragment  碎片  可以最外层不用div
class Xiaojiejie extends Component {
    render() {
        // console.log("render---------组件挂载中");
        return (
            //flex
            <Fragment>
                <div>
                    <label htmlFor="will">增加服务：</label>
                    <input
                        id="will"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(inputed) => {
                            this.inputed = inputed
                        }}
                    ></input>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul
                    ref={(ul) => {
                        this.ul = ul
                    }}
                >
                    <TransitionGroup>
                        {this.state.list.map((item, index) => {
                            return (
                                // 父组件
                                <CSSTransition
                                    timeout={2000}
                                    classNames="boss-text"
                                    unmountOnExit
                                    appear={true}
                                    key={index + item}
                                >
                                    <XiaojiejieItem
                                        // avname="吉泽明步"
                                        key={index + item}
                                        name={item}
                                        index={index}
                                        list={this.state.list} //单向数据流  不能在子组件修改
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [],
        }
    }
    componentDidMount() {
        axios
            .get(
                'https://mock.mengxuegu.com/mock/605f6f45f2e38f3a2f6b9b6c/ReactDemoStudy/xiaojiejei'
            )
            .then((res) => {
                console.log('axios 获取数据成功' + JSON.stringify(res))
                this.setState({
                    list: res.data.data,
                })
            })
            .catch((err) => {
                console.log('获取数据失败' + err)
            })
    }
    // shouldComponentUpdate() {
    //   console.log("shouldComponentUpdate ");
    //   return true; //false 不进行渲染  优化组件性能
    // }
    // componentDidUpdate() {
    //   console.log("componentDidUpdate-----更新后");
    // }
    // componentWillUnmount() {
    //   console.log("componentWillUnmount-----销毁前");
    // }
    // static getDerivedStateFromProps(props, state) {}
    // inputChange(e) {
    inputChange() {
        this.setState({
            inputValue: this.inputed.value,
        })
        // console.log(e.target.value);
    }
    addList() {
        console.log(11)
        // console.time("start");
        this.setState(
            {
                list: [...this.state.list, this.state.inputValue],
                inputValue: '',
            },
            () => {
                console.log(this.state.list)
            }
        )
        // console.log(this.ul.querySelectorAll("li").length);
        //结论  setState  回调函数方式 效率高  async尝试也可以运行  效率比不上  回调函数方式
        // console.timeEnd("start");
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list,
        })
    }
}
export default Xiaojiejie
