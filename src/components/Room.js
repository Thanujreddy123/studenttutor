import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomid } = useParams();
  const elementRef = useRef(null);
  const zegoClientRef = useRef(null);
  const startMeeting = () => {
    const myMeeting = async () => {
      const appID = 740922983;
      const serverSecret = "e540cd8864b84cfba7d5eafeb64278e8";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomid,
        Date.now().toString(),
        "nikhil"
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zegoClientRef.current = zc;

      zc.joinRoom({
        container: elementRef.current,
        sharedLinks: [
          {
            title: 'Copy Link',
            //url: `http://localhost:3000/room/${roomid}`,
            url: `${window.location.origin}/room/${roomid}`, 
          }
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneOnOneCall,
        },
        callbacks: {
          onUserJoin: (user) => {
            // Implement logic to admit user to the video call
            zc.admit(user.userID);
          },
        },
      });
    };

    myMeeting();
  };

  useEffect(() => {
    startMeeting();
  }, [roomid]);

  return (
    <div>
      <div ref={elementRef} />
    </div>
  );
};

export default Room;
