/*
 * @Description: item
 * @Author: iwillbe12138
 * @Date: 2021-03-16 17:53:07
 * @LastEditTime: 2021-03-17 22:42:17
 * @LastEditors: iwillbe12138
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejeiItem extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
      // 子组件
      <li>{this.props.name}</li>
     );
  }
}
XiaojiejeiItem.propTypes ={
  name:PropTypes.string
}
export default XiaojiejeiItem;