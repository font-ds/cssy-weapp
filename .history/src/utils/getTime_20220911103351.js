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
    for(let i=0;i<7;i++){
        let currentDay={}
        let time=new Date(timer+24*3600*1000*i)
        currentDay.time=`${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`
        currentDay.week=getDay(time.getDay())
        if(i==0) currentDay.day='今天'
        else if(i==1) currentDay.day='明天'
        else if(i==2) currentDay.day='后天'
        else currentDay.day=getDay()
        arr.push(currentDay)
    }
    console.log(arr)
}