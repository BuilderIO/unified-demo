"use client"
//import { useComposable, useCart } from 'hooks'
// import { Logo } from 'components/logo'
// import { CartIcon } from 'components/cart'
import { IoCartOutline } from 'react-icons/io5'
import { Image } from '@builder.io/react';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Link,
} from '@chakra-ui/react'
// import { LoginAction } from './login-action'
// import { cmsNavLinks } from './_data'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { MenuItem } from '../Menu/MenuItem'
import NextLink from 'next/link'

export const Header = () => {
  // const { cart } = useCart()
  // const { cartDrawer, menuDrawer } = useComposable()
  const router = useSearchParams();
  console.log('ROUTER', router )
  const slug = ''//router?.query?.slug || 'home';

  const cmsNavLinks = [{name: 'Men', slug: 'men'}, {name: 'Women', slug: 'women'}, {name: 'Kids', slug: 'kids'}]
  return (
    <Box as="header" borderBottomWidth="1px" height={'4rem'} backgroundColor={'rgba(0, 0, 0, .25)'} color='white'>
      <Container maxW="container.xl">
        <Grid
          alignItems={'center'}
          templateColumns={'repeat(3, 1fr)'}
          height={'4rem'}
          padding={'0 35px'}
        >
          <Box display={{ base: 'flex', md: 'none' }}>
            <Center>
              <Button
                name="menu"
                aria-label="menu"
                width={'40px'}
                variant="unstyled"
                // onClick={() =>
                //   menuDrawer?.isOpen
                //     ? menuDrawer.onClose()
                //     : menuDrawer.onOpen()
                // }
              >
                <HamburgerIcon width={'26px'} height={'26px'} />
              </Button>
            </Center>
          </Box>
          <Flex
            alignItems={'center'}
            justifyContent={{ base: 'center', md: 'left' }}
            
          >
            <Link as={NextLink} href="/" width={'50%'} >
              <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F160d3724e72b4f88af781e0887df5601" alt="Builder.io Logo" loading="lazy" />
            </Link>
          </Flex>
          <Box
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            justifyContent="center"
          >
            {cmsNavLinks.map((el) => {
              return (
                <MenuItem
                  label={el.name}
                  href={`/category/${el.slug}`}
                  key={el.slug}
                  state={el.slug === slug ? 'Active' : 'Default'}
                  rootProps={{
                    height: 'full',
                  }}
                />
              )
            })}
          </Box>
          <Box
            display="flex"
            alignItems={'center'}
            justifySelf="flex-end"
            gap={3}
          >
            <Box display={{ base: 'none', md: 'flex' }}>
              {/* <LoginAction /> */}
            </Box>
            <Button
              variant="unstyled"
              // aria-label={`${cart.quantity} items in your shopping cart`}
              height="auto"
              width="auto"
              ml={5}
              mr={2}
              // aria-expanded={cartDrawer.isOpen}
              // onClick={() => cartDrawer.onOpen()}
            >
              {/* <CartIcon cartQuantity={cart.quantity} /> */}
              <IoCartOutline aria-hidden size={'26px'} />
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}