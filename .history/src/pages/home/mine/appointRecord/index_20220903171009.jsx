import { View, Text } from '@tarojs/components'
import {AtButton} from 'taro-ui';
import {useDispatch,useSelector} from 'react-redux';
import {alertShow} from '../../../../store/alertModal';
import AlertModal from '../../../../components/alertModal';

import './index.scss'

export default function Index () {

  const dispatch=useDispatch()
  const alertModal=useSelector(state=>state.alertModal)

  const concelRecord=()=>{
    dispatch(alertShow({
      title:'提示',
      text:['是否取消该书籍借阅','《牧羊少年的奇幻漂流》']
    }))
  }

    let record=[
      {type:'功能阅读预约',time:'2021/01/18',name:'亲子预约',vip:'预约会员',phone:'18680704968',appointDay:'2022年08月23日', appointTime:'17:00-19:00 17:00-19:00 17:00-19:00'}
    ]
  
    return (
      <View className='appoint-record'>
        {
          record.map(item=>
            <View className='record-view font-default-style' key={item.time+item.type}>
              <View className='title'>
                <Text className='title-left'>{item.type}</Text>
                <Text className='title-right'>{item.time}</Text>
              </View>
              <View className='record-info'>
                <View>预约项目：<Text>{item.name}</Text></View>
                <View>预约会员：<Text>{item.vip}</Text></View>
                <View>预约手机：<Text>{item.phone}</Text></View>
                <View>
                  <Text style={{whiteSpace:'nowrap'}}>预约时间：</Text>
                  <Text>{item.appointDay}</Text>
                </View>
                <View>{item.appointTime}</View>
              </View>
              <AtButton circle className='record-btn'  type='primary' onClick={concelRecord}>取消预约</AtButton>
            </View>
          )
        }
        
        {
          alertModal.visible?<AlertModal />:null
        }
        <AlertModal></AlertModal>
      </View>
    )
  }

