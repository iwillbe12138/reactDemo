/*
 * @Description: demo
 * @Author: iwillbe12138
 * @Date: 2021-03-28 01:53:47
 * @LastEditTime: 2021-03-28 02:16:26
 * @LastEditors: iwillbe12138
 */

import React, { Component } from "react";
import "./style.css";

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
        this.toToggol = this.toToggol.bind(this);
    }
    render() {
        return (
            <div>
                {/* <div style={{ opacity: this.state.isShow ? 1 : 0 }}> */}
                <div className={this.state.isShow ? "show" : "hide"}>
                    Boss级人物-孙悟空
                </div>
                <div>
                    <button onClick={this.toToggol}>召唤Boss</button>
                </div>
            </div>
        );
    }
    toToggol() {
        this.setState({
            isShow: !this.state.isShow,
        });
    }
}

export default Boss;
