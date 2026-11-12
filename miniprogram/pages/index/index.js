Page({
  data:{active:[],finished:[]},
  onShow(){ this.load() },
  load(){ const all=wx.getStorageSync('flags')||[]; this.setData({active:all.filter(x=>!x.result),finished:all.filter(x=>x.result)}) },
  create(){ wx.navigateTo({url:'/pages/create/create'}) },
  open(e){ wx.navigateTo({url:`/pages/detail/detail?id=${e.currentTarget.dataset.id}`}) },
  me(){ wx.switchTab ? wx.navigateTo({url:'/pages/me/me'}) : wx.navigateTo({url:'/pages/me/me'}) }
})