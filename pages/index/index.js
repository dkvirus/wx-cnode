Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics', //仅为示例，并非真实的接口地址
      success: function (res) {
        that.setData({ articles: res.data.data });
      }
    })
  },
  detail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  }
})