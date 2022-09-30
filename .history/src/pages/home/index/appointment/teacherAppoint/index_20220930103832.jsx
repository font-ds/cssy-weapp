import {useState} from 'react';
import {View ,Swiper ,SwiperItem,ScrollView} from '@tarojs/components';
import Taro, { getCurrentInstance} from '@tarojs/taro';
import { AtAvatar, AtButton } from 'taro-ui'
import { useDispatch, useSelector } from 'react-redux';
import  { show} from '../../../../../store/modal'
import { getTime } from '../../../../../utils/getTime'
import Modal from '../../../../../components/modal'

import './index.scss'

export default function ContentAppoint() {

const dispatch=useDispatch()
  const data =JSON.parse(decodeURIComponent(getCurrentInstance().router.params.data))
  const info = useSelector(state => state.img)
  const [swiperCurrent, setSwiperCurrent] = useState(0)
  const [indexArr,setIndexArr]=useState([])
  let [days, setDays] = useState(info.times)
  
  let topChoose=getTime(new Date().getTime())

  const changeState = (outIndex, flag, index) => { 
    if (!flag) return
    else if (indexArr.length != 0 && indexArr[0] != outIndex) {
      return dispatch(show({
        title: '选择失败',
        text: ['每次预约只能选择同一天的时段', '请重新选择']
      }))
    }
    else if (indexArr.length == 4) { 
      return dispatch(show({
        title: '选择失败',
        text: ['每次预约最多选择四个时段']
      }))
    }
    let arr = [...days]
    let inArr = [...arr[outIndex]]
    let newIndexArr=[...indexArr]
    if (flag === 1) {
      newIndexArr.pop()
      inArr[index] = true
    }
    else {
      newIndexArr.push(outIndex)
      inArr[index] = 1
    }
    arr[outIndex]=[...inArr]
    setDays([...arr])
    setIndexArr([...newIndexArr])
  }

  return (
    <View className='teacher-appoint'>
      <View className='teacher-info'>
        <AtAvatar className='avator' size='large' circle image={info.url}></AtAvatar>
        <View className='info-right'>
          <View className='info-name'>{ data.name}</View>
          <View className='info-detail'>{ info.content}</View>
        </View>
      </View>

      <View className='time-title'>选择预约时段 （您可预约一周内时间段）</View>

      <View className='choose-time'>
          {
            topChoose.map((item,index)=>(
              <View key={item.english+index}  className='choose-item' onClick={()=>setSwiperCurrent(index)}>
                <View className='top' style={{color:index?'black':'#20C58D'}}>{item.week}</View>
                <View className='bottom' 
                  style={{
                    backgroundColor:swiperCurrent==0&&index==0?'#20C58D':swiperCurrent==index?'rgba(101, 124, 133, 0.2)':'#fffff',
                    color:index?'black':swiperCurrent==0?'white':'#20C58D'
                  }}
                >{item.day}</View>
              </View>
            ))
          }
        </View>

      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        disableTouch
        current={swiperCurrent}
        onChange={({detail})=>{setSwiperCurrent(detail.current)}}
        style={{height:'100%'}}
      >
          {
            topChoose.map((item,index)=>(
              <SwiperItem style={{ height: '100%' }} key={index}>
                <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
                <View className='current-time'>
                  当前预约日期： {topChoose[swiperCurrent].detailTime}
                </View>
                <View className='grid-contioner'>
                  {days[index].map((dayItem, dayIndex) => {
                    return <View className={dayItem === 1 ? 'choosed' : dayItem ? '' : 'not-choose'} key={'time' + dayIndex} onClick={()=>changeState(index,dayItem,dayIndex)}>
                      {10 + Math.floor(dayIndex / 2)}:{0 + (dayIndex % 2) * 3}0 -{" "}
                      {10 + Math.floor((dayIndex + 1) / 2)}:
                      {0 + ((dayIndex + 1) % 2) * 3}0
                    </View>
                  })}
                  </View>
                </ScrollView>
              </SwiperItem> 
              
           ))
          } 
      </Swiper>
      
      <AtButton className='btn' type='primary'
        onClick={() => {
          if (indexArr.length == 0) return dispatch(show({ title: '操作失败', text: ['至少选择一个时间段', '请选择后重试'] }))
          let chooseDay = []
          days[indexArr[0]].map((item,index) => { 
            if(item===1) return chooseDay.push(index)
          })
          let newData = encodeURIComponent(JSON.stringify({tutor_id:data.tutor_id,date:indexArr[0],periods:chooseDay}))
          Taro.navigateTo({ url: '/pages/home/index/components/appointDetail/index?type=2&data='+newData })
        }}
      >下 一 步</AtButton>

      <Modal></Modal>
    </View>
  )
}
