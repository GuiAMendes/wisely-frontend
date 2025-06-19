import confetti from "canvas-confetti";

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
