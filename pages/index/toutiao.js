//toutiao.js
var TAG = 'toutiao.js'
//获取应用实例
var app = getApp()
Page({
  //生命周期
  onLoad: function () {
    console.log(TAG + ' | onLoad');
    this.resetData();
    this.loading();
    this.getTypeData(app.page);
  },
  onShow: function (e) {
    console.log(TAG + ' | onShow');
    console.log(TAG + ' | wx.getSystemInfo');
    wx.getSystemInfo({
      success: (res) => {
        console.log(TAG + ' | wx.getSystemInfo -> success | res -> ' + res);
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  //变量
  data: {
    title: [],
    imgUrls: [],
    author: [],
    date: [],
    requestUrl: 'top',
    cssActive: 0,
    dataId: 0,
    windowHeight: '',
    windowWidth: '',
    page: 0,
  },
  //下拉刷新
  pullDownRefresh: function (e) {
    console.log(TAG + ' | 下拉刷新');
    this.onLoad();
  },
  //上拉加载
  pullUpLoad: function (e) {
    app.page += 5;
    this.setData({
      page: app.page
    })
    console.log(TAG + ' | 上拉加载' + app.page);
    this.loading();
    this.getTypeData(app.page);
  },
  //点击TAB
  check: function (e) {
    console.log(TAG + ' | check | e.target.dataset.id -> ' + e.target.dataset.id);
    console.log(TAG + ' | check | e.target.id -> ' + e.target.id);
    app.cssActive = e.target.dataset.id
    app.requestUrl = e.target.id;
    this.resetData();
    this.setData({
      dataId: app.cssActive,
      title: app.title,
      imgUrls: app.imgUrls,
      author: app.author,
      date: app.date,
      requestUrl: app.requestUrl,
      page: app.page
    })
    this.loading();
    this.getTypeData(app.page);
  },
  getTypeData: function (page) {
    console.log(TAG + ' | wx.request');
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=' + app.requestUrl + '&key=3b2f1817a3494b6f1e558f24fbf00aeb',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {}, // 设置请求的 header
      success: (res) => {
        console.log(TAG + ' | wx.request -> success | res -> ' + res);
        var data = res.data.result.data;
        for (var i = page; i < page + 5; i++) {
          app.title.push(data[i].title);
          app.imgUrls.push(data[i].thumbnail_pic_s);
          app.author.push(data[i].author_name);
          app.date.push(data[i].date);
          app.url.push(data[i].url);
        }
        this.setData({
          title: app.title,
          imgUrls: app.imgUrls,
          author: app.author,
          date: app.date,
          page: app.page,
        })
      },
      fail: function () {
        console.log(TAG + ' | wx.request -> fail');
      },
      complete: function () {
        console.log(TAG + ' | wx.request -> complete');
        wx.hideToast();
      }
    })
  },
  resetData: function () {
    app.title = [];
    app.imgUrls = [];
    app.author = [];
    app.title = [];
    app.date = [];
    app.page = 0;
  },
  loading: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  },
})