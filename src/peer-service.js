import Peer from "peerjs";
import { peerConfig } from "./config";

let peer = null;
let localStream = null;
let mediaConnection = null;

function getLocalStream() {
  return navigator.mediaDevices.getUserMedia({ video: false, audio: true })
    .then(stream => localStream = stream)
}

export function createPeer(code, cb) {
  peer = new Peer(code, peerConfig);

  peer.on("open", id => {
    cb.open(id);
  });

  peer.on("close", () => {
    localStream && localStream.getTracks().forEach(t => t.stop());
    cb.close();
  });

  peer.on("error", err => {
    cb.error(err);
  });

  peer.on("call", connection => {
    mediaConnection = connection;
    cb.call(mediaConnection.peer);
  });
}

export function answerPeer(cb) {
  getLocalStream()
    .then(stream => {
      mediaConnection.answer(stream);

      mediaConnection.on("stream", stream => {
        cb.stream(stream);
      });
    });
}

export function destroyPeer() {
  peer.destroy();
}

export function callPear(rmCode, cb) {
  getLocalStream()
    .then(stream => {
      const mediaConnection = peer.call(rmCode, localStream);

      mediaConnection.on("stream", stream => {
        cb.stream(stream);
      });
    });
}
