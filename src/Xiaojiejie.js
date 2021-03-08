/*
 * @Description:demo
 * @Author: iwillbe12138
 * @Date: 2021-03-05 01:02:17
 * @LastEditTime: 2021-03-08 21:20:35
 * @LastEditors:
 */

import React, { Component, Fragment } from 'react';
//Fragment  碎片  可以最外层不用div
class Xiaojiejie extends Component {
    render() {
        return (
            //flex
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                    ></input>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index + item}>{item}</li>;
                    })}
                </ul>
            </Fragment>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背'],
        };
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
        // console.log(e.target.value);
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',
        });
    }
}
export default Xiaojiejie;
