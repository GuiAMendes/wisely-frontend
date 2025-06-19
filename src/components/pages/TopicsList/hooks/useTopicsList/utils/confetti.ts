
import confetti from 'canvas-confetti'

export function launchPinkConfetti() {
  confetti({
    particleCount: 100,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#ffb6c1'], 
  })
}
