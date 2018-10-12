Page({
  data: {
    reservelist: [],
    menuslist:[
    ],
    logourl:'../../images/Logo1.png',
    status:[
      '等待商家接单',
      '商家已接单',
      '商品已入柜',
      '商品已取出',
      '商品派送中',
      '订单已完成'
      ]
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData: function () {
    this.setData({
      menuslist:[
        {"imageurl":'../../images/waitpay.png'},
        {"imageurl":'../../images/waituse.png'},
        {"imageurl":'../../images/waitcomment.png'},
        {"imageurl":'../../images/helpget.png'},
        {"imageurl":'../../images/totalorders.png'}
      ],
      reservelist: [
        {
          "id": 1,
          "name": "奥尔良烤肉拌饭（一食堂）",
          "time": "2018-08-25 11:00",
          "gettime":"11:30 - 12:00",
          "price": "32",
          "reserver": "诸葛小六",
          "position": "一食堂2楼北侧26号柜",
          "imgurl": "../../images/photo1.jpg",
          "state":0,
          "orderstatus":"商品已入柜",
          "info":"超时未取餐按2元/小时计费",
          "number":"21861"
        },
        {
          "id": 2,
          "name": "奥尔良烤肉拌饭（一食堂）",
          "position":"中国银联研发楼2楼小食堂3窗口",
          "time": "2018-07-05 18:00",
          "gettime": "18:30 - 19:00",
          "price": "16",
          "reserver": "夏梦璃",
          "imgurl": "../../images/photo2.jpg",
          "info": "超时未取餐按2元/小时计费",
          "state": 0,
          "orderstatus": "商家已接单",
          "number": "23861"
        },
        {
          "id": 3,
          "name": "奥尔良烤肉拌饭（一食堂）",
          "position": "中国银联研发楼2楼主食堂4窗口",
          "time": "2016-06-01 07:00",
          "gettime": "07:20 - 07:40",
          "price": "23",
          "reserver": "张HK",
          "imgurl": "../../images/photo3.jpg",
          "info": "超时未取餐按2元/小时计费",
          "state": 1,
          "orderstatus": "商品已取出",
          "number": "24861"
        },
        {
          "id": 4,
          "name": "奥尔良烤肉拌饭（一食堂）",
          "position":"中国银联研发楼2楼小食堂2窗口",
          "time": "2016-05-21 23:59",
          "gettime": "12:30 - 13:00",
          "price": "26",
          "info": "超时未取餐按2元/小时计费",
          "reserver": "康运维",
          "imgurl": "../../images/photo4.jpg",
          "state": 1,
          "orderstatus": "订单已完成",
          "number": "22861"
        },
        {
          "id": 5,
          "name": "奥尔良烤肉拌饭（一食堂）",
          "position": "中国银联研发楼2楼主食堂5窗口",
          "time": "2016-04-03 13:14",
          "gettime": "13:30 - 13:50",
          "price": "21",
          "reserver": "师杰",
          "info": "超时未取餐按2元/小时计费",
          "imgurl": "../../images/photo5.jpg",
          "state": 1,
          "orderstatus": "订单已完成",
          "number": "25861"
        },
        {
          "id": 6,
          "name": "奥尔良烤肉拌饭（一食堂）",
          "position": "中国银联研发楼2楼主食堂6窗口",
          "time": "2016-03-17 08:09",
          "gettime": "08:30 - 08:50",
          "price": "11",
          "reserver": "荣博世",
          "imgurl": "../../images/photo6.jpg",
          "info": "超时未取餐按2元/小时计费",
          "state": 1,
          "orderstatus": "订单已完成",
          "number": "26861"
        }
      ]
    })
  }
})
