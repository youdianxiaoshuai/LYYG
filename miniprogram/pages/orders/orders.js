Page({
  data: {
    cloud: "",
    reservelist: [],
    menuslist:[
    ],
    logourl:'cloud://lyyg-e9073e.6c79-lyyg-e9073e/Logo1.png',
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
    this.setData({
      cloud: getApp().cloud
    })
    this.fetchData();
  },
  fetchData: function () {
    this.setData({
      menuslist:[
        {"imageurl":'cloud://lyyg-e9073e.6c79-lyyg-e9073e/waitpay.png'},
        {"imageurl":'cloud://lyyg-e9073e.6c79-lyyg-e9073e/waituse.png'},
        {"imageurl":'cloud://lyyg-e9073e.6c79-lyyg-e9073e/waitcomment.png'},
        {"imageurl":'cloud://lyyg-e9073e.6c79-lyyg-e9073e/helpget.png'},
        {"imageurl":'cloud://lyyg-e9073e.6c79-lyyg-e9073e/totalorders.png'}
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
          "imgurl": "cloud://lyyg-e9073e.6c79-lyyg-e9073e/photo1.jpg",
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
          "imgurl": "cloud://lyyg-e9073e.6c79-lyyg-e9073e/photo2.jpg",
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
          "imgurl": "cloud://lyyg-e9073e.6c79-lyyg-e9073e/photo3.jpg",
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
          "imgurl": "cloud://lyyg-e9073e.6c79-lyyg-e9073e/photo4.jpg",
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
          "imgurl": "cloud://lyyg-e9073e.6c79-lyyg-e9073e/photo5.jpg",
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
          "imgurl": "cloud://lyyg-e9073e.6c79-lyyg-e9073e/photo6.jpg",
          "info": "超时未取餐按2元/小时计费",
          "state": 1,
          "orderstatus": "订单已完成",
          "number": "26861"
        }
      ]
    })
  }
})
