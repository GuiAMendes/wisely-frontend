import confetti, { Shape } from "canvas-confetti";

export function launchPinkConfetti() {
  confetti({
    particleCount: 100,
    spread: 80,
    shapes: ["star"],
    origin: { y: 0.6 },
    colors: ["#ff69b4", "#ffb6c1"],
  });
}

export function launchErrorConfetti() {
  confetti({
    particleCount: 30,
    angle: 90,
    spread: 60,
    origin: { y: 0.4 },
    shapes: ["circle"],
    colors: ["#ff4d4f", "#d32f2f"],
    scalar: 1.2,
  });
}

export function sprinklePinkJoy() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 20,
    spread: 360,
    ticks: 150,
    zIndex: 9999,
    shapes: ["star", "circle"] as Shape[],
    scalar: 1.2,
    colors: ["#ff69b4", "#ffc0cb", "#ffe4e1", "#ffb6c1"],
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    confetti({
      ...defaults,
      particleCount: 10,
      origin: {
        x: randomInRange(0, 1),
        y: randomInRange(0, 1),
      },
    });
  }, 200);
}
