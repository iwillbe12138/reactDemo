/*
 * @Description: demo
 * @Author: iwillbe12138
 * @Date: 2021-03-28 01:53:47
 * @LastEditTime: 2021-04-02 16:41:56
 * @LastEditors: iwillbe12138
 */

import React, { Component } from "react";
import "./style.css";
import { CSSTransition } from "react-transition-group";

//react-transition-group react官方出品动画库  包含以下三种

// Transition
//CSSTransition
//TransitonGroup

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
                {/* <div className={this.state.isShow ? "show" : "hide"}> */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div>Boss级人物-孙悟空</div>
                </CSSTransition>

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
