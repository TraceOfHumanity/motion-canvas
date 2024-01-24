import React, { useEffect, useRef } from "react";

export const MainBg = () => {
  const canvasRef = useRef(null);
  const n_stars = 200;
  const colors = ["#176ab6", "#fb9b39"];

  for (let i = 0; i < 50; i++) {
    colors.push("#ffa42a");
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const randomInt = (max, min) =>
      Math.floor(Math.random() * (max - min) + min);

    const bg = c.createRadialGradient(
      canvas.width / 2,
      canvas.height * 3,
      canvas.height,
      canvas.width / 2,
      canvas.height,
      canvas.height * 4
    );

    bg.addColorStop(0, "#00050d");
    // bg.addColorStop(0.9, theme === "light" ? "#b3b3b3" : "#00051d");
    // bg.addColorStop(0.8, theme === "light" ? "#000814" : "#32465E");
    // bg.addColorStop(1, theme === "light" ? "#000" : "#000814");

    class Star {
      constructor(x, y, radius, color) {
        this.x = x || randomInt(0, canvas.width);
        this.y = y || randomInt(0, canvas.height);
        this.radius = radius || Math.random() * 4;
        this.color = color || colors[randomInt(0, colors.length)];
        this.dy = -Math.random() * 0.3;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.shadowBlur = randomInt(3, 15);
        c.shadowColor = this.color;
        c.strokeStyle = this.color;
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
      }

      update(arrayStars = []) {
        if (this.y - this.radius < 0) this.createNewStar(arrayStars);

        this.y += this.dy;
        this.draw();
      }

      createNewStar(arrayStars = []) {
        let i = arrayStars.indexOf(this);
        arrayStars.splice(i, 1);
        arrayStars.push(new Star(false, canvas.height + 5));
      }
    }

    let stars = [];

    const init = () => {
      for (let i = 0; i < n_stars; i++) {
        stars.push(new Star());
      }
    };

    init();

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = bg;
      c.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => s.update(stars));
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed w-screen h-screen -z-10" />;
};
