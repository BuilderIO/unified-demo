
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface HeaderProps {
  headerData: any;
}

const Header = async ({ headerData }: HeaderProps) => {
  return (
    <header>
      <div>
        <a href="/page2">
          <h1>{headerData === 'header1' ? 'Header Template 1' : 'Header Template 2'}</h1>
        </a>
     </div>
      <div>{headerData}</div>
    </header>
  );
};

export default Header;
