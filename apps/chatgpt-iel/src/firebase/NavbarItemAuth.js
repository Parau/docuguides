import React from 'react';
import { useAuth } from './Auth';
import Link from '@docusaurus/Link';
import {
  IconLogout,
} from '@tabler/icons-react';
import { useLocation } from '@docusaurus/router';


export default function NavbarItemAuth() {
  const { user, auth, signOut } = useAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout Error:", error);
    });
  };

  const linkStyle = {
    textDecoration: 'none', // Removes the default underline
    cursor: 'pointer', // Changes the cursor to a hand
  };
  const iconStyle = {
    verticalAlign: 'middle', // Aligns the icon vertically in the middle
    marginLeft: '0.5rem' // Optional: Adds spacing between text and icon
  };

  const location = useLocation();
  let from = location.pathname;

  return user ? (
    <>
      {user.email}
      <a onClick={handleLogout} style={linkStyle}>
        <IconLogout style={iconStyle} size={18} />&nbsp;
      </a>
    </>
  ) : (
    <a href={`https://criatividade.digital/login?redirect=${from}`} className="navbar__item navbar__link">
      Login
    </a>
  );
}

