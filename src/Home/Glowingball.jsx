import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Glowingball() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 0,  
    });
  
    const handleScroll = () => {
      Aos.refresh();
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const startBlinking = () => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 200);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(15, Math.sqrt(deltaX ** 2 + deltaY ** 2) / 15);

      const eyeX = Math.cos(angle) * distance;
      const eyeY = Math.sin(angle) * distance;

      setEyePosition({ x: eyeX, y: eyeY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const blinkInterval = setInterval(() => {
      startBlinking();
    }, Math.random() * (6000 - 4000) + 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  

  return (
    <>
  {/* <section style={{ height: "100vh" }}>
  <h1 className="text-white">Welcome to my site</h1>
</section>

<section data-aos="fade-up" data-aos-delay="500">
  <h2 className="text-black ">Main Scroll par aaunga!</h2>
</section>

<section data-aos="zoom-in" data-aos-delay="500">
  <h2 className="text-black">Main 300ms delay se aaunga!</h2>
</section> */}

    {/* // <div style={styles.container}> */}
      <div style={styles.crystalBall}>
        <div style={styles.glassOverlay}></div>

        <div style={styles.reflection}></div>

        <div
          style={{
            ...styles.eye,
            height: isBlinking ? "0px" : "30px",
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            left: "50px",
            top: "70px",
            transition: "height 0.2s ease-in-out",
          }}
        ></div>

        <div
          style={{
            ...styles.eye,
            height: isBlinking ? "0px" : "30px",
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            right: "50px",
            top: "70px",
            transition: "height 0.2s ease-in-out",
          }}
        ></div>
      </div>
    {/* // </div> */}
    </>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0A1A",
  },
  crystalBall: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 60% 40%, rgba(255, 0, 127, 0.9), rgba(34, 0, 102, 0.9), rgba(0, 255, 255, 0.9))",
    boxShadow:
      "0 0 80px rgba(255, 0, 127, 0.8), 0 0 100px rgba(0, 255, 255, 0.7), 0 0 120px rgba(34, 0, 102, 0.6)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  glassOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.4) 10%, rgba(255,255,255,0.1) 60%, rgba(0,0,0,0.2) 90%)",
    mixBlendMode: "overlay",
    opacity: 0.95,
  },
  // reflection: {
  //   position: "absolute",
  //   width: "50%",
  //   height: "50%",
  //   borderRadius: "50%",
  //   top: "12%",
  //   left: "15%",
  //   background:
  //     "radial-gradient(circle, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.3) 80%)",
  //   opacity: 0.8,
  // },
  eye: {
    width: "18px",
    height: "30px",
    background: "#fff",
    borderRadius: "50%",
    position: "absolute",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
};

export default Glowingball;