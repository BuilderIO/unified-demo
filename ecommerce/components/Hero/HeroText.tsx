"use client"
import NextLink from 'next/link'
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  HStack,
  StackProps
} from '@chakra-ui/react'

export interface HeroTextProps {
  root?: BoxProps
  eyebrow?: BoxProps & { text?: any}
  title?: BoxProps & { text?: any}
  body?: BoxProps & { text?: any}
  ctaButtonBox?: StackProps,
  ctaButtonPrimary?: ButtonProps & { text?: any, url?: any }
  ctaButtonSecondary?: ButtonProps & { text?: any, url?: any }
}


export const HeroText = ({
  eyebrow,
  title,
  body,
  ctaButtonPrimary,
  ctaButtonSecondary,
  ctaButtonBox,
  root
}: HeroTextProps) => {
  const renderCtaButtonBox = Boolean(
    ctaButtonPrimary ||
    ctaButtonSecondary
  )
  console.log('ITEMS BUTTONS: ', {ctaButtonBox, ctaButtonPrimary, ctaButtonSecondary })

  return (
    <Box  {...root}>
      {eyebrow && <Box {...eyebrow} >{eyebrow.text}</Box>}
      {title && <Box my={2} {...title}>{title.text}</Box>}
      {body && <Box {...body}>{body.text}</Box>}

      {renderCtaButtonBox && (
        <HStack
          mt={6}
          spacing={4}
          display="flex"
          flexWrap="wrap"
          {...ctaButtonBox}
        >
        <>
            {ctaButtonPrimary && (
            <Button
                href={ctaButtonPrimary?.url ?? ''}
                as={NextLink}
                {...ctaButtonPrimary}
            >{ctaButtonPrimary?.text}</Button>
            )}
            {ctaButtonSecondary && (
            <Button
                href={ctaButtonSecondary?.url ?? ''}
                as={NextLink}
                {...ctaButtonSecondary}
            >{ctaButtonSecondary?.text}</Button>
            )}
        </>
        </HStack>
      )}
    </Box>
  )
}
