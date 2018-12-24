import ajax from './ajax'
const BASE='/api'

//请求地址
export const reqAddress = (longitude,latitude) => ajax(BASE + `position/${latitude},${longitude}`)

//请求食品分布列表
export const reqCategorys =()=>ajax(BASE + 'index_category')

//根据经纬度获取商家列表
export const reqShops =(longitude,latitude)=>ajax(BASE + 'shops',{longitude,latitude})
