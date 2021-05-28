const vm = new Vue({
  el: '#app',
  data: {
    city: '',
    weatherList:[]
  },
  methods: {
    
    searchWeather() {
      let that = this
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city='
        + this.city)
        .then(function (response) {
          
          that.weatherList= response.data.data.forecast
        })
        .catch(function (err) { })
    }
  }
})
