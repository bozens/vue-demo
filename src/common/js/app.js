var app = {
  localStorage: {
    storage: window.localStorage,
    set:function(key, value) {
      this.storage.setItem(key, value);
    },
    get: function (key) {
      return this.storage.getItem(key);
    },
    remove: function (key) {
      this.storage.removeItem(key);
    },
    clear: function () {
      this.storage.clear();
    }
  }


}
