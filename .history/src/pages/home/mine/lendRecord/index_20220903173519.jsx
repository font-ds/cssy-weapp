import { View, Text } from '@tarojs/components'
import {useDispatch,useSelector} from 'react-redux';
import {AtButton} from 'taro-ui';

import {longTimeShow} from '../../../../store/alertModal';
import AlertModal from '../../../../components/alertModal';

import './index.scss'

export default function Index () {

  const dispatch=useDispatch()
  const alertModal=useSelector(state=>state.alertModal)

  const longTimeBorrow=()=>{
    dispatch(longTimeShow({
      title:'延长借阅',
      text:['选择您想延长该书籍借阅时间','《牧羊少年的奇幻漂流》']
    }))
  }

    let record=[
      {type:'功能阅读预约',time:'2021/01/18',name:'亲子预约',vip:'预约会员',phone:'18680704968',appointTime:'2022年08月23日 17:00-19:0017:00-19:0017:00-19:00'}
    ]
  
    return (
      <View className='appoint-record'>
        {
          record.map(item=>
            <View className='record-view' key={item.time+item.type}>
              <View className='title'>
                <Text>{item.type}</Text><Text>{item.time}</Text>
              </View>
              <View className='record-info'>
                <View>预约项目：<Text>{item.name}</Text></View>
                <View>预约会员：<Text>{item.vip}</Text></View>
                <View>预约手机：<Text>{item.phone}</Text></View>
                <View>
                  <Text style={{whiteSpace:'nowrap'}}>预约时间：</Text>
                  <Text>{item.appointTime}</Text>
                </View>
              </View>
              <AtButton circle className='record-btn'  type='primary' onClick={longTimeBorrow}>延长订阅</AtButton>
            </View>
          )
        }
        

        {
          alertModal.visible?<AlertModal />:null
        }
      </View>
    )
  }

