Page({
  data: {
    cloud: "",
    items: [
      { 
        name: 'FastUnionPay', 
        value: '银联卡快捷支付',
        imageurl: 'cloud://lyyg-e9073e.6c79-lyyg-e9073e/fastunionpay.png'
      },
      { 
        name: 'CloudUnionPay', 
        value: '云闪付', 
        checked: 'true',
        imageurl: 'cloud://lyyg-e9073e.6c79-lyyg-e9073e/cloudunionpay.png',
      },
    ],
    showPayPwdInput: false,  //是否展示密码输入层
    pwdVal: '',  //输入的密码
    payFocus: true, //文本框焦点
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  onLoad: function () {
    this.setData({
      cloud: getApp().cloud
    })
  },
  /**
   * 显示支付密码输入层
   */
  showInputLayer: function () {
    this.setData({ showPayPwdInput: true, payFocus: true });
  },
  /**
   * 隐藏支付密码输入层
   */
  hidePayLayer: function () {

    var val = this.data.pwdVal;

    this.setData({ showPayPwdInput: false, payFocus: false, pwdVal: '' }, function () {
      wx.showToast({
        title: "付款成功",
      });
      setTimeout(function(){
      wx.navigateBack({
        delta:2
      })},1000);
    });

  },
  /**
   * 获取焦点
   */
  getFocus: function () {
    this.setData({ payFocus: true });
  },
  /**
   * 输入密码监听
   */
  inputPwd: function (e) {
    this.setData({ pwdVal: e.detail.value });

    if (e.detail.value.length >= 6) {
      this.hidePayLayer();
    }
  }
})
