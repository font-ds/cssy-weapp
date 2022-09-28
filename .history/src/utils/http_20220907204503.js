import {request} from './request';

export const getCode=(phone)=>{
    return request({
        url:`/front/login?phone=${phone}`,
        
    })
}