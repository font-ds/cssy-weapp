import Taro from'@tarojs/taro'
import {show} from '../store/modal';

// let baseUrl='http://150.158.78.209:8080'
let baseUrl='https://seasonslibrary.cn'

export default function({url,method='get',useToken=true,data=null,success,dispatch}){
    // const dispatch=useDispatch()
    let header={'content-type': 'application/x-www-form-urlencoded'}
    if(useToken) header.Authorization='bearer '+Taro.getStorageSync('token').access_token

    return Taro.request({
        url:baseUrl+url,
        method,
        data,
        header,
        success: (res) => {
            console.log(res)
            if (res.statusCode == 400||res.statusCode==500) {
                dispatch(show({
                    title: '错误',
                    text: ['当前网络异常', '请重试']
                }))
            }
            else if (res.statusCode == 403) {
                dispatch(show({
                    title: '错误',
                    text: ['登录过期', '请重试']
                }))
            }
            else { 

            }
            success(res)
        },
        fail: (res) => {
            console.log(res)
            
        }
    })
}