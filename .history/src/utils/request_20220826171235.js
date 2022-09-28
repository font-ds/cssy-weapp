import Taro from'@tarojs/taro'
import {useDispatch} from 'react-redux';
import {show} from '../store/modal';


export default function({url,method='get',data=null,success}){
    const dispatch=useDispatch()

    Taro.request({
        url,
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