// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    list: new Array(4),
    tabs: new Array(5),
    goods: new Array(10),
    current: 0,
    visible: false
  },
  handleTap: function (e:any)
  {
    let current = e.currentTarget.dataset.index;
    this.setData({
      current,
      visible: true
    })
  },
  close(){
    this.setData({
      visible: false
    })
  }
})
