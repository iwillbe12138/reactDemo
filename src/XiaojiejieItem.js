/*
 * @Description: item
 * @Author: iwillbe12138
 * @Date: 2021-03-16 17:53:07
 * @LastEditTime: 2021-03-28 01:32:18
 * @LastEditors: iwillbe12138
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
class XiaojiejeiItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name != this.props.name) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("child-render");
    return (
      // 子组件
      <li onClick={this.handleClick}>
        {this.props.avname}为你做-{this.props.name}
      </li>
    );
  }
  handleClick() {
    console.log(this.props.index);
    // this.props.list = [];//错误示范  不能直接修改父组件的值
    this.props.deleteItem(this.props.index);
  }
}
XiaojiejeiItem.propTypes = {
  avname: PropTypes.string.isRequired, //必传
  name: PropTypes.string.isRequired, //必传
  index: PropTypes.number,
  deleteItem: PropTypes.func,
  list: PropTypes.array,
};
XiaojiejeiItem.defaultProps = {
  avname: "波多野结衣",
};
export default XiaojiejeiItem;
