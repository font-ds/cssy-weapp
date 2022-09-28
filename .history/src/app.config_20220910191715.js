export default {
  pages: [
    'pages/home/index/index',

    'pages/home/mine/index',
    
    'pages/index',

    'pages/login/index',

    'pages/home/index/borrow/bookDetail/index',

    'pages/home/index/borrow/index',


    'pages/home/index/components/appointDetail/index',

    'pages/home/index/appointment/teacherAppoint/index',

    'pages/home/index/appointment/readAppoint/index',

    'pages/home/index/appointment/index',

    'pages/home/mine/coupon/index',

    'pages/home/mine/lendRecord/index',

    'pages/home/mine/appointRecord/index',


    'pages/home/mine/power/index',


    'pages/home/index/appointment/contentAppoint/index',
    
    'pages/home/index/borrow/search/index',


    'pages/home/online/index',



  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: "#626567",
    selectedColor: "#20C58D",
    backgroundColor: "#FBFBFB",
    borderStyle: "white",
    
    list: [{
      pagePath: 'pages/home/index/index',
      text: "首页服务",
      iconPath: "assets/index-noselect.png",
      selectedIconPath: 'assets/index-select.png',
    },
    {
      pagePath: 'pages/home/online/index',
      text: "电子书馆",
      iconPath: "assets/online-noselect.png",
      selectedIconPath: "assets/online-select.png"
    },
    {
      pagePath: 'pages/home/mine/index',
      text: "会员中心",
      iconPath: "assets/mine-noselect.png",
      selectedIconPath: "assets/mine-select.png"
    },]
  },
  
}
