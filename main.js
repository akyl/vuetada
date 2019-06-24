var ws = new WebSocket("ws://pm.tada.team/ws")
ws.onopen = function(event) {
    console.log('open')
}
ws.onmessage = function(event) {
    console.log(event.data)
    state = JSON.parse(event.data).state
}

var app = new Vue({
    el: '#app',
    data: {
        state: true
    },
    methods: {
        changeState: function () {
            this.state = !this.state
            var data = {'state': this.state ? 1 : 0}
            ws.send(JSON.stringify(data))
        }
    }
})

