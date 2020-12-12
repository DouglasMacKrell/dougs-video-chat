const socket = io('/')
const myPeer = new Peer(undefined, {
  host: location.hostname,
  port: "3001",
  path: '/peerjs'
});

myPeer.on("open", function (id) {
  console.log("My peerID is: " + id);
});

socket.emit('join-room', ROOM_ID, 10)

socket.on('user-connected', userId => {
    console.log('User connected: ' + userId)
})

