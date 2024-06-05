'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const NavLink = ({href, children}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? 'active' : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
