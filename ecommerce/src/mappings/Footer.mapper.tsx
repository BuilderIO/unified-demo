import { figmaMapping } from "@builder.io/dev-tools/figma";
import Footer from "@/src/components/Layout/Footer";

figmaMapping({
  componentKey: "df8ccf9e902602249fa68217953daab094570bba",
  mapper(figma) {
    return (
      <Footer>
        <FooterContent>{figma.$children[0]?.$children[0]}</FooterContent>
        <FooterNavigation>
          {figma.$findOneByName("Menu Options")?.$children.map((item) => (
            <FooterLink href="#">{item}</FooterLink>
          ))}
        </FooterNavigation>
        <FooterActions>
          <ShoppingCartIcon />
          <Button>
            {figma.$findOneByName("Sign In Button")?.$children[0]}
          </Button>
        </FooterActions>
        <FooterLogo>
          {figma.$children[1]?.$findOneByName("SHOPAHOLIC")}
        </FooterLogo>
      </Footer>
    );
  },
});
