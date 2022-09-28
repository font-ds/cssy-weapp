// 返回周几
const getDay=(day)=>{
   switch(day){
    case 'Sun':
        return '日'
    case 'Mon':
        return '一'
    case 'Tue':
        return '二'
    case 'Wed':
        return '三'
    case 'Thu':
        return '四'
    case 'Fri':
        return '五'
    case 'Sat':
        return '六'
   }



}

// 返回日期
export const getTime=(timer)=>{
    let time=new Date(timer)
    let week=time.substring(0,3)
    console.log(time,week)
}