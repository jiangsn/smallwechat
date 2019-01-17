//index.js

const api = require('../../utils/translate.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: '',
    translateResult: '译文',
    language: ['英语', '粤语', '文言文', '韩语', '日语'],
    index: '0',
    hash: [{}],
  },

  textSetCopyStrtap: function (e) {
    let copytext = e.currentTarget.dataset.textstr
    console.log(e)
    wx.setClipboardData({
      data: copytext,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: res.data,
              icon: 'success'
            })
          }
        })
      }
    })


  },

  translate: function (e) {
    this.setData({ query: e.detail.value, })
    let to = '';
    switch (this.data.language[this.data.index]) {
      case '英语':
        to = 'en';
        break;
        to = 'yue';
      case '粤语':
        to = 'yue';
        break;
      case '文言文':
        to = 'wyw';
        break;
      case '韩语':
        to = 'kor';
        break;
      case '日语':
        to = 'jp';
        break;
    }

    api.translate(this.data.query, { 'from': 'auto', 'to': to }).then(res => {
      if (!res.error_code) {
        this.setData({ translateResult: res.trans_result[0].dst })
      } else {
        this.setData({ translateResult: '译文' })
      }
    })

  },
  bindPickerChange: function (e) {
    this.setData({ index: e.detail.value })
    console.log(this.data.language[this.data.index])
    let to = '';
    switch (this.data.language[this.data.index]) {
      case '英语':
        to = 'en';
        break;
        to = 'yue';
      case '粤语':
        to = 'yue';
        break;
      case '文言文':
        to = 'wyw';
        break;
      case '韩语':
        to = 'kor';
        break;
      case '日语':
        to = 'jp';
        break;
    }
    api.translate(this.data.query, { 'from': 'auto', 'to': to }).then(res => {
      if (!res.error_code) {
        this.setData({ translateResult: res.trans_result[0].dst })
      } else {
        this.setData({ translateResult: '' })
      }

      //     
    })

  },

  translateResult: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

