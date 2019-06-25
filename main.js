var app = new Vue({
  el: '#app',
  data: {
    ws: null,
    state: true
  },
  created () {
    this.ws = new WebSocket("ws://pm.tada.team/ws")
    this.ws.onmessage = function(event) {
      app.state = JSON.parse(event.data).state === 1
      console.log(app.state)
    }
  },
  methods: {
    changeState: function () {
      this.state = !this.state
      var data = {'state': this.state ? 1 : 0}
      this.ws.send(JSON.stringify(data))
    }
  }
})

