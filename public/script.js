const socket = io("/");
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined, {
  host: location.hostname,
  port: "3001",
  path: "/peerjs",
});

const myVideo = document.createElement('video')
myVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream)

    myPeer.on("call", call => {
        call.answer(stream)
    })

    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream)
    })
})

myPeer.on("open", function (id) {
  socket.emit("join-room", ROOM_ID, id);
  console.log("My peerID is: " + id);
});

// socket.on("user-connected", (userId) => {
//   console.log("User connected: " + userId);
// });

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream)
    const video = document.createElement("video")
    call.on("stream", userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
    call.on("close", () => {
        video.remove()
    })
}

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}