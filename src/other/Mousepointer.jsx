import React ,{ useState, useEffect }from 'react'




function Mousepointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300); 
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: position.y - 15 + "px",
          left: position.x - 15 + "px",
          width: "30px",
          height: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          transition: "transform 0.1s ease-out",
          transform: isClicked ? "scale(1.5)" : "scale(1)",
        }}
      ></div>

      {isClicked && (
        <div
          style={{
            position: "fixed",
            top: position.y - 25 + "px",
            left: position.x - 25 + "px",
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "ripple 0.3s ease-out",
          }}
        ></div>
      )}

      <style>
        {`
          @keyframes ripple {
            from {
              transform: scale(0);
              opacity: 1;
            }
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default Mousepointer