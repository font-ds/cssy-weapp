import {useEffect,useState} from 'react'
import { View, Text, Image } from '@tarojs/components'
import {useDispatch,useSelector} from 'react-redux';
import {AtButton} from 'taro-ui';
import request from '../../../../utils/request'
import {alertHidden, longTimeShow} from '../../../../store/alertModal';
import AlertModal from '../../../../components/alertModal';
import {show} from '../../../../store/modal'
import Modal from '../../../../components/modal'

import blue from '../../../../assets/lead-blue.png';
import green from '../../../../assets/lead-green.png';
import yellow from '../../../../assets/lead-yellow.png';
import './index.scss'

export default function Index () {

  const dispatch=useDispatch()
  // 获取弹窗
  const alertModal=useSelector(state=>state.alertModal)
  const modal=useSelector(state=>state.modal)
  // 书籍列表
  const [list,setList]=useState([])
  // 当前操作书籍
  const [currentBook,setCurrentBook]=useState(null)

  // 获取列表
  const getList=()=>{
    request({
      url:'/front/my/borrow',
      success:res=>{
        console.log(res)
        if(res.statusCode==200) setList(res.data.data)
      },dispatch
    })
  }

  // 延长借阅
  const longTimeBorrow=(time)=>{
    console.log(111,time,currentBook)
    // request({
    //   url:`/front/my/borrow?borrow_id=${currentBook}&extension=${time}`,
    //   method:'post',
    //   success:res=>{
    //     if(res.statusCode==200) {
    //       getList()
    //       dispatch(alertHidden())
    //       dispatch(show({
    //         title:'成功',
    //         text:['已成功延长借阅','请您在截至时间前归还书籍']
    //       }))
    //     }
    //   }
    // })
  }

  // 点击延长借阅
  const longTimeModal=(id)=>{
    console.log(id)
    setCurrentBook(id)
    dispatch(longTimeShow({
      title:'延长借阅',
      text:['选择您想延长该书籍借阅时间','《牧羊少年的奇幻漂流》']
    }))
  }

  useEffect(()=>{
    getList()
  },[])
  
    return (
      <View className='lead-record'>
        {
          list.map(item=>
            <View className='record-view' key={item.borrow_date}>
              <View className='title'>
                <Text className='title-left'>{item.type}</Text><Text className='title-right'>书籍借阅</Text>
              </View>
              <View className='record-info'>
                <View>预约项目：<Text>{item.title}</Text></View>
                <View>预约会员：<Text>{item.user_name}</Text></View>
                <View>预约手机：<Text>{item.phone}</Text></View>
                <View>
                  <Text style={{whiteSpace:'nowrap'}}>预约时间：</Text>
                  <Text>{item.borrow_data}</Text>
                </View>
              </View>
              <View className='btn-view'>
                <View>
                  <Image src={item.state?item.state==1?yellow:green:blue}></Image>
                  <Text >{item.state?item.state==1?'借阅中':'已完成':'带取书'}</Text> 
                </View>
                <AtButton className='record-btn btn-concel'  type='primary' onClick={()=>longTimeModal(item.borrow_id)}>延长订阅</AtButton>
              </View>
            </View>
          )
        }
        

        {
          alertModal.visible?<AlertModal longTimeFunc={(time)=>longTimeBorrow(time)} />:null
        }
        {
          modal.visible?<Modal></Modal>:null
        }
      </View>
    )
  }

