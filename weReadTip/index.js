// components/weCustomer/weReadTip/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示提示框，默认隐藏，请自行根据逻辑设置展示
    show: {
      type: Boolean,
      value: false
    },
    // 是否点击后关闭隐藏界面
    closeOnTap: {
      type: Boolean,
      value: true
    },
    // 标题，两行
    title: {
      type: String,
      value: '这是一个\n顶部的标题'
    },
    // 列表前的图标资源
    listIcon: {
      type: String,
      value: '../assets/list.svg'
    },
    // 功能列表数据，array
    features: {
      type: Array,
      value: [
        '功能说明 001',
        '功能说明 002'
      ]
    },
    // 底部按钮提示文字
    bottomTxt: {
      type: String,
      value: '了解更多 · 在客服会话回复 0'
    },
    // 主题颜色
    themeColor: {
      type: String,
      value: '#67C23A'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle: function (e) {
      if (!this.data.closeOnTap) return;
      this.setData({
        show: !this.data.show
      })
    }
  }
})
