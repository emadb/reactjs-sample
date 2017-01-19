var Storage = function (type) {
  return {
    _data       : {},
    setItem     : function(id, val) { return this._data[type+id] = String(val); },
    getItem     : function(id) { return this._data.hasOwnProperty(type+id) ? this._data[type+id] : undefined; },
    removeItem  : function(id) { return delete this._data[type+id]; },
    clear       : function() { return this._data = {}; }
  };
};

var localStorage = new Storage('local');
var sessionStorage = new Storage('session');

module.exports = function(window) {
  window.localStorage = localStorage;
  window.sessionStorage = sessionStorage;
  // window.localStorage.__proto__ = localStorage;
  // window.sessionStorage.__proto__ = sessionStorage;
}