import React, { useEffect, useRef, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import firstImage from "./images/first-image.jpeg";
import secondImage from "./images/second-image.jpeg";
import thirdImage from "./images/third-image.jpeg";
import fourthImage from "./images/fourth-image.jpeg";

const images = [firstImage, secondImage, thirdImage, fourthImage];

const Pioneer = () => {
  const [open, setOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const toggleImages = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const interfaceStyle = {
    background: "linear-gradient(90deg, #FF6B6B, #FFE66D, #55DDFF)",
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const contentStyle = {
    textAlign: "center",
  };

  const largeTextStyles = {
    fontSize: "24px",
    marginBottom: "20px",
  };

  const largeButtonStyles = {
    fontSize: "15px",
    padding: "15px 30px", 
    marginTop: "10px",
    cursor: "pointer",
    background: open ? "#FF6B6B" : "#7CD4C9", 
    border: "none",
    borderRadius: "5px",
    color: "white",
  };

  const footerStyle = {
    position: "absolute",
    bottom: "10px",
  };

  return (
    <div style={interfaceStyle}>
      <div style={contentStyle}>
        <h3 style={largeTextStyles}>
          <b>About Travelling?</b>
        </h3>
        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          ref={focusRef}
          style={largeButtonStyles} 
          type="primary"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>

      <BottomSheet
        open={open}
        onDismiss={handleClose}
        blocking={false}
        backgroundColor="yellow"
        header={
          <h3>
            <b>About Travelling?</b>
          </h3>
        }
        snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
      >
        <div className="image-transition" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={images[currentImage]}
            alt={`Image ${currentImage}`}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center", padding: "10px", backgroundColor: "#7CD4C9", borderRadius: "5px" }}>
          <button onClick={toggleImages} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>Next Image</button>
        </div>
        <br />
        <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship, or other means, with or without luggage, and can be one way or round trip.</p>
        <h2>
          <b>Reasons Why Traveling Is Important</b>
        </h2>
        <p>While travel is definitely an indulgence, the returns (although not monetary) are definitely worth the cost. Let's jump into the reasons why travel is a worthy pursuit.</p>
        <h2>
          <b>1. Get out of your comfort zone</b>
        </h2>
        <p>While social media gives you virtual access to the world, you also become increasingly comfortable with your surroundings and miss out on forming connections in the real world.</p>
        <h2>
          <b>2. New cultural experiences</b>
        </h2>
        <p>One of the most important reasons why traveling is important is getting to immerse yourself in the local culture.</p>
        <h2>
          <b>3. You get to relax and unwind</b>
        </h2>
        <p>In today’s world, we often find ourselves trying to climb up the corporate ladder and get ahead in the rat race. While having a successful career is important, you also need to take a break from the grind to relax and rejuvenate. As they say, one step back, two steps forward.</p>
        <div style={footerStyle}>
          <button onClick={handleClose} style={largeButtonStyles}>
            Done
          </button>
        </div>
      </BottomSheet>
    </div>
  );
};

export default Pioneer;