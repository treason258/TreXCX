//tools.js
var common = require('../../utils/common.js');
var tag = 'tools.js'

//获取应用实例
var app = getApp()
Page({
  //生命周期
  onLoad: function (options) {
    common.log(tag, 'onLoad | options -> ' + options)
  },
  onReady: function () {
    common.log(tag, 'onReady')
  },
  onShow: function () {
    common.log(tag, 'onShow')
  },
  onHide: function () {
    common.log(tag, 'onHide')
  },
  onUnload: function () {
    common.log(tag, 'onUnload')
  },
  onPullDownRefresh: function () {
    common.log(tag + 'onPullDownRefresh')
  },
  onReachBottom: function () {
    common.log(tag, 'onReachBottom')
  },
  onShareAppMessage: function () {
    common.log(tag, 'onShareAppMessage')
  },
  customData: {
    hello: 'Helo tools.js!'
  },
  //变量
  data: {
    hi: '工具大合集！',
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
  },
  //点击事件处理
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
})
