// 返回周几
const getDay=(day)=>{
   switch(day){
    case 'SUN':
        return '日'
        break
   }



}

// 返回日期
export const getTime=(timer)=>{
    let time=new Date(timer+24*60*60*1000)
    console.log(time)
}