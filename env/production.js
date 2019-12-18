let token = null;

module.exports = {
  grant_type: 'grant_type=password&username=test1%40test2.com&password=Aa234567%21',
  expiringTokenMilisec: 86000 * 1000, //almost 24hours,
  token: null,
  getToken: function () { return token; },
  setToken: function (newToken) { token = newToken; }
}

