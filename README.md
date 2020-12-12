# Doug's Video Chat!

[![Douglas MacKrell](https://www.douglasmackrell.com/Doug-Portfolio-Social.png)](https://dougmackrell.com)

**Douglas MacKrell** is a NYC based Full Stack Web Developer who is currently looking for work! 

## THE PROBLEM
Implementing PeerJS for the very first time

## THE SOLUTION
This web app uses WebRTC facilitated through PeerJS on a shared sever to make peer-to-peer many-to-many video calls

** **

## FEATURES

* Upon loading localhost:3000, a roomID is created and stored in the URL
* Once the augmented URL (localhost:3000/:roomId) is visited by a second browser on the same network, a call is accepted and instantly opened once the userId is shared
* When a user disconnects from either browser, the connection is ended and the video stream is removed from display

## FUTURE FEATURES

* Simple styling
* Deployment

## TECHNICAL MILESTONES

* Learning how to properly create a PeerJS server that runs in tandem on the primary server
* Learning how to collect and use the unique userId created by PeerJS

## TECHNOLOGIES USED

* **JavaScript**
* **HTML5**
* **Express**
* **Node**
* **PeerJS**
* **WebRTC**
* **Socket.io**
* **uuid**

## LOCAL SETUP

**NOTE: You must install [Node.js](https://nodejs.org) in your computer for this to run.**

You can check to see if you already have Node.js by typing `node -v` in your terminal. If your shell/terminal doesn't complain and you see version numbers you are good to go.

1. Clone this repo into a folder of your choice:

       `git clone https://github.com/DouglasMacKrell/dougs-video-chat.git`

2. Install dependencies for the app from inside the cloned folder:

       `npm install`

3. To launch the App, inside the root folder run:

       `npm run devStart`

4. A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open [one](/issues)

---

### Please check out one of my favorite projects, [DougTV!](https://dougtv.herokuapp.com)

---

[![DougTV Social Media](https://dougtv.herokuapp.com/DougTV-Social.png)](https://dougtv.herokuapp.com)

---

<details>
    <summary>
        Before you leave, please take note:
    </summary>

You're the best! Thank you for visiting!

Please give this project a star and be sure to check out my [YouTube Channel](https://youtube.com/BigMacKrell)!

</details>
