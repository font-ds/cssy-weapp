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

// 返回七天日期
export const getTime=(timer)=>{
    let arr=[]
    // for(let i=0;i<7;i++){
    //     let time=new Date(timer+24*3600*1000*i).toString()
    //     let week=time.substring(0,3)

    // }
    let time=new Date(timer).toString()
    let week=time.substring(0,3)
    let date=time.substring(10,16)
    // console.log(time)
    console.log(time,getDay(week))
}