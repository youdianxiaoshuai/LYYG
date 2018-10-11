Page({
  data: {
    servicedetail: {},
    totalTime:300,
    countDownDay:99,
    countDownHour:23,
    countDownMinute:59,
    countDownSecond:59
  },
  onLoad: function (options) {
    const i = options.id;
    const name = options.name
    const imageurl = options.imageurl
    this.setData({
      servicedetail: {
        "name": name,
        "imgurl": imageurl
      }
    })
    wx.setNavigationBarTitle({
      title: this.data.servicedetail.name
    })
  },
  onReady: function () {
    var totalSecond = this.data.totalTime;

    var interval = setInterval(function () {
      var second = totalSecond;
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '活动已结束',
        });
        this.setData({
          countDownDay: '00',
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);
  }


})