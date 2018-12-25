import ajax from './ajax'
const BASE='/api'

//请求地址
export const reqAddress = (longitude,latitude) => ajax(BASE + `position/${latitude},${longitude}`)

//请求食品分布列表
export const reqCategorys =()=>ajax(BASE + 'index_category')

//根据经纬度获取商家列表
export const reqShops =(longitude,latitude)=>ajax(BASE + 'shops',{longitude,latitude})


// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE + '/userinfo')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE + '/logout')
