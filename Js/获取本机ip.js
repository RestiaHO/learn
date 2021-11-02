function findIP (callback) {
    let myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection // compatibility for firefox and chrome
    // eslint-disable-next-line
    let pc = new myPeerConnection({iceServers: []})
    let noop = function () {}
    let localIPs = {}
    let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g

    function ipIterate (ip) {
        if (!localIPs[ip]) callback(ip)
        localIPs[ip] = true
    }
    pc.createDataChannel('')
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
        if (line.indexOf('candidate') < 0) return
        line.match(ipRegex).forEach(ipIterate)
        })
        pc.setLocalDescription(sdp, noop, noop)
    })
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return
        ice.candidate.candidate.match(ipRegex).forEach(ipIterate)
    }
}

// 获取ip地址
this.findIP(function (ip) {
    console.log(ip, 'ip')
})
  