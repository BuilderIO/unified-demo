"use client"
import { Box, BoxProps, ButtonProps } from '@chakra-ui/react'
import { HeroImage, HeroImageProps } from './HeroImage'
import { HeroText, HeroTextProps } from './HeroText'

export interface HeroProps {
  image?: HeroImageProps
  overlayBackground?: string | null
  text?: HeroTextProps
  textPosition?: HeroTextPosition
  theme?: HeroTheme,
}

type HeroTextPosition = 'left' | 'center' | 'right'
type HeroTheme = 'dark' | 'light'

export const Hero = ({
  text,
  image,
  textPosition = 'center',
  theme = 'dark',
  overlayBackground = overlayBackgroundValue[theme],
}: HeroProps) => {
  const textPositionProps = getTextPositionProps()

  return (
    <Box
      position="relative"
      display="flex"
      flexWrap="wrap"
      alignItems="stretch"
      minHeight={['500px', null, null, '650px']}
    >
      <HeroImage
        root={{
          pointerEvents: 'none',
          ...image?.root,
          ...parentSizeProps,
        }}
        imageBox={{
          ...image?.imageBox,
          ...parentSizeProps,
        }}
        overlayBackground={overlayBackground}
        {...image}
      />
      <HeroText
        root={{
          p: [6, null, 16],
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ...textPositionProps[textPosition],
        }}
        eyebrow={{
          textStyle: ['Desktop/Eyebrow'],
          textColor: theme === 'dark' ? ['text'] : ['background'],
          ml: textPosition === 'center' ? 'auto' : undefined,
          mr: textPosition === 'center' ? 'auto' : undefined,
          text: text?.eyebrow
        }}
        title={{
          textStyle: ['Desktop/XL', null, 'Desktop/XL', null, 'Desktop/2XL'],
          textColor:
            theme === 'dark'
              ? ['text', null, 'text', null, 'text']
              : ['background', null, 'background', null, 'background'],
            text: text?.title
        }}
        body={{
          textStyle: ['Desktop/Body-L', null, 'Desktop/Body-XL'],
          textColor:
            theme === 'dark'
              ? ['text', null, 'text', null, 'text']
              : ['background', null, 'background', null, 'background'],
            text: text?.body

        }}
        ctaButtonBox={{
            justifyContent: textPosition === 'center' ? 'center' : undefined,
        }}
        ctaButtonPrimary={{
          variant: theme === 'dark' ? 'solid' : 'solid-alt',
          ...text?.ctaButtonPrimary,
        }}
        ctaButtonSecondary={{
          variant: theme === 'dark' ? 'outline' : 'outline-alt',
          ...text?.ctaButtonSecondary,
        }}
      />
    </Box>
  )
}

const parentSizeProps: BoxProps = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
}

const getTextPositionProps = (): Record<HeroTextPosition, BoxProps> => {
  return {
    left: {
      width: ['100%', '100%', '50%'],
    },
    center: {
      width: ['100%', '100%', '75%'],
      margin: '0 auto',
      textAlign: 'center',
    },
    right: {
      width: ['100%', '100%', '50%'],
      marginLeft: ['auto', 'auto', '50%'],
    },
  }
}

const overlayBackgroundValue: Record<HeroTheme, string> = {
  light: 'rgba(0, 0, 0, 0.4)',
  dark: 'rgba(255, 255, 255, 0.2)',
}
