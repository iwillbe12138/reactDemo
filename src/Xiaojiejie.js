/*
 * @Description:demo
 * @Author: iwillbe12138
 * @Date: 2021-03-05 01:02:17
 * @LastEditTime: 2021-03-05 02:23:24
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
                    <input></input>
                    <button>增加服务</button>
                </div>
                <ul>
                    <li>头部按摩</li>
                    <li>精油推背</li>
                </ul>
            </Fragment>
        );
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
}
export default Xiaojiejie;
