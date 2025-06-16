// External Libraries
import React, { useState } from 'react'
import { CardContainer, CardInner, CardFront, CardBack } from './styles'

interface FlashCardProps {
  front: string
  back: string
}

export const FlashCard: React.FC<FlashCardProps> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <CardContainer onClick={() => setFlipped(prev => !prev)}>
      <CardInner flipped={flipped}>
        <CardFront>{front}</CardFront>
        <CardBack>{back}</CardBack>
      </CardInner>
    </CardContainer>
  )
}
