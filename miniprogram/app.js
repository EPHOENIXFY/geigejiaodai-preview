App({
  globalData: { user: null },
  onLaunch() {
    const user = wx.getStorageSync('flag_user')
    if (user) this.globalData.user = user
  },
  ensureUser() {
    let user = this.globalData.user || wx.getStorageSync('flag_user')
    if (!user) {
      user = { id: `local-${Date.now()}`, name: '我' }
      this.globalData.user = user
      wx.setStorageSync('flag_user', user)
    }
    return user
  }
})
