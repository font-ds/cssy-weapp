import Taro from'@tarojs/taro'
import {show} from '../store/modal';

let baseUrl='http://127.0.0.1:4523/m1/1513755-0-default'

export default function({url,method='get',data=null,success,dispatch}){
    // const dispatch=useDispatch()

    return Taro.request({
        url:baseUrl+url,
        method,
        data,
        header:{
            'token':Taro.getStorageSync('token'),
            'content-type': 'application/x-www-form-urlencoded'
        },
        success,
        fail:()=>{
            dispatch(show({
                title:'错误',
                text:['当前网络异常','请重试']
            }))
        }
    })
}