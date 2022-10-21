import React from 'react'
import confetti from "canvas-confetti";

export function canvasConfetti() {
   const randomInRange = (min, max) => {
        return (
            Math.random() * (max - min) + min
        )
      }
    return (
        confetti({
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          particleCount: randomInRange(50, 100),
          origin: { y: 0.6 }
        })
    )  
}
