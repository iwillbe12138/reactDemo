/*
 * @Description:demo
 * @Author: iwillbe12138
 * @Date: 2021-03-05 01:02:17
 * @LastEditTime: 2021-03-13 23:21:31
 * @LastEditors: iwillbe12138
 */

import React, { Component, Fragment } from "react";
import "./style.css";
//Fragment  碎片  可以最外层不用div
class Xiaojiejie extends Component {
  render() {
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
          ></input>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                onClick={this.deleteItem.bind(this, index)}
                key={index + item}
                dangerouslySetInnerHTML={{ __html: item }} //html解析
              >
                {/* {item} */}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油推背"],
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
      inputValue: "",
    });
  }
  deleteItem(index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}
export default Xiaojiejie;
