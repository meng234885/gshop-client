import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER

} from './mutation-types'


export default {
  async getAddress({commit,state}){
    const {longitude,latitude}=state
    const result=await reqAddress(longitude,latitude)
    if (result.code===0){
      const address=result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit}){
    const result=await reqCategorys()
    if (result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    const {longitude,latitude}=state
    const result=await reqShops(longitude,latitude)
    if (result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  async getUser({commit}) {
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  }

}
