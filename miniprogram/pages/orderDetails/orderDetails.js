Page({
  data: {
    servicedetail: {},
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
  }
})