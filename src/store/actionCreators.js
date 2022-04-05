/*
 * @Description:actionCreators action 集合
 * @Author: IWillBe12138
 * @Date: 2022-04-05 16:51:25
 * @LastEditTime: 2022-04-05 17:00:17
 * @LastEditors: IWillBe12138
 */

import { CHANGE_INPUT, ADD_LIST, DELETE_ITEM } from './actionTypes'

export const changeInputAction = value => ({
    type: CHANGE_INPUT,
    value: value
})

export const addListAction = () => ({
    type: ADD_LIST
})

export const deleteItemAction = value => ({
    type: DELETE_ITEM,
    value: value
})
