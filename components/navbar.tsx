import { NextComponentType } from "next";
import Link from "next/link";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    display: inline;

    a {
      display: inline-block;
      color: white;
      text-align: center;
      text-decoration: none;
      padding: 1rem;
      font-size: 1.5rem;
      margin: 0 1rem;

      &:hover {
        background-color: #ffbbff;
      }
    }

    .float-right {
      float: right;
    }
  }
`;

const Navbar: NextComponentType = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
        <li>
          <Link href='/login'>
            <a className='float-right'>Login</a>
          </Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
