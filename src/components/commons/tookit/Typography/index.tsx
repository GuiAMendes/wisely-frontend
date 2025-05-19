// External Libraries
import React from 'react'

// Utils
import { TYPOGRAPHY_STYLES_MAPPER } from './constants'

// Types
import { TypographyProps } from './types'

// Styles
import { Container } from './styles'

export const Typography: React.FC<TypographyProps> = props => {
  // Constants
  const { as, variant, children } = props

  // Functions
  function getAriaLevel() {
    if (!variant.includes('h')) return

    const level = variant.replace('h', '')

    return parseInt(level)
  }

  
  return (
    <Container
      as={as}
      aria-level={getAriaLevel()}
      {...{
        ...TYPOGRAPHY_STYLES_MAPPER[variant],
        ...props
      }}
    >
      {children}
    </Container>
  )
}