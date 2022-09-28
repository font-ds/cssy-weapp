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
    case '':
        return '五'
    case '':
        return '六'
   }



}

// 返回日期
export const getTime=(timer)=>{
    let time=new Date(timer+24*60*60*1000*4)
    console.log(time)
}