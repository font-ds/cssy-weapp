// 返回周几
const getDay=(day)=>{
   switch(day){
    case 0:
        return '日'
    case 1:
        return '一'
    case 2:
        return '二'
    case 3:
        return '三'
    case 4:
        return '四'
    case 5:
        return '五'
    case 6:
        return '六'
   }
}

// 返回七天日期
export const getTime=(timer)=>{
    let arr=[]
    // for(let i=0;i<7;i++){
    //     let time=new Date(timer+24*3600*1000*i)
    //     let week=time.substring(0,3)

    // }
    let time=new Date(timer)
    let year=time.getFullYear()
    let month=time.getMonth()
    let day=time.getDate()
    let week=time.getDay()
    // let date=time.substring(10,16)
    // console.log(time)
    console.log(time,`${year}/${month}/${day}`,getDay(week))
}