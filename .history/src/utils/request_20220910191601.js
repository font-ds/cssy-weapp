import Taro from'@tarojs/taro'
import {show} from '../store/modal';

let baseUrl='http://150.158.78.209:8080'

export default function({url,method='get',useToken=true,data=null,success,dispatch}){
    // const dispatch=useDispatch()
    let header={'content-type': 'application/x-www-form-urlencoded'}
    if(useToken) header.Authorization=Taro.getStorageSync('token').access_token

    return Taro.request({
        url:baseUrl+url,
        method,
        data,
        header,
        success,
        fail:()=>{
            dispatch(show({
                title:'错误',
                text:['当前网络异常','请重试']
            }))
        }
    })
}