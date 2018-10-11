Page({
  data: {
    reservelist: []
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData: function () {
    this.setData({
      reservelist: [
        {
          "id": 1,
          "name": "中国银联研发楼2楼主食堂1窗口",
          "time": "2018/08/25 11:00",
          "price": "32",
          "reserver": "诸葛小六",
          "imgurl": "../../images/photo1.jpg",
          "state":0
        },
        {
          "id": 2,
          "name": "中国银联研发楼2楼小食堂3窗口",
          "time": "2018/07/05 18:00",
          "price": "16",
          "reserver": "夏梦璃",
          "imgurl": "../../images/photo2.jpg",
          "state": 0
        },
        {
          "id": 3,
          "name": "中国银联研发楼2楼主食堂4窗口",
          "time": "2016/06/01 07:00",
          "price": "23",
          "reserver": "张HK",
          "imgurl": "../../images/photo3.jpg",
          "state": 1
        },
        {
          "id": 4,
          "name": "中国银联研发楼2楼小食堂2窗口",
          "time": "2016/05/21 23:59",
          "price": "26",
          "reserver": "康运维",
          "imgurl": "../../images/photo4.jpg",
          "state": 0
        },
        {
          "id": 5,
          "name": "中国银联研发楼2楼主食堂5窗口",
          "time": "2016/04/03 13:14",
          "price": "21",
          "reserver": "师杰",
          "imgurl": "../../images/photo5.jpg",
          "state": 1
        },
        {
          "id": 6,
          "name": "中国银联研发楼2楼主食堂6窗口",
          "time": "2016/03/17 08:09",
          "price": "11",
          "reserver": "荣博世",
          "imgurl": "../../images/photo6.jpg",
          "state": 1
        }
      ]
    })
  }
})
