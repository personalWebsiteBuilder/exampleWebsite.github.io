import React, { useState } from 'react';
import Link from 'next/link';

import { NavigationButton } from './NavigationButton';
import colors from '../common/colors'

export const Navbar = () => {

    const [isNavOpen, setNavIsOpen] = useState(false);

    const toggleNav = () => {
        setNavIsOpen(!isNavOpen);
      };
    
      const closeNav = () => {
        if (isNavOpen) setNavIsOpen(false);
      };

    return (
        <>
        <header>
            <div className="container">
                <div classname="left">
                  <Link href="/">
                    <a className="link" onClick={closeNav}>
                      <span className="link-text">Home</span>
                    </a>
                </Link>
                </div>
                <button className={`toggle-button ${isNavOpen ? 'is-open' : ''}`}
                    type="button"
                    onClick={toggleNav}>
                    <span className="toggle-bar" />
                    <span className="toggle-bar" />
                    <span className="toggle-bar" />
                </button>
                <nav className={isNavOpen ? 'is-open' : null}>
                    <div className="middle">
                        <Link href="/example-websites">
                            <a className="link" onClick={closeNav}>
                                <span className="link-text">Why us?</span>
                            </a>
                        </Link>
                        <Link href="/get-started">
                            <a className="link" onClick={closeNav}>
                                <span className="link-text">Get started!</span>
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
        <style jsx>{`
         header {
            background-color: ${colors.purple};
            margin: 0 auto;
            display: flex;
            width: 100%;
            border-width: 0 0 1px;
            border: 1px solid transparent;
            position: fixed;
            top: 0;
            min-height: 50px;
        }

        @media (min-width: 768px) {
            header {
              min-height: 60px;
            }
          }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
        }

        @media (min-width:768px) {
            .container {
                min-height: 60px;
                flex-direction: row;
                justify-content: space-between
              }
        }

        .toggle-button {
            position: relative;
            padding: 9px 10px;
            background-color: transparent;
            height: 40px;
            width: 40px;
        }

        @media (min-width: 768px) {
            .toggle-button {
              display: none;
            }
        }

        nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.6s ease-in-out;
        }

        @media (min-width: 768px) {
            nav {
              flex: 1;
              flex-direction: row;
              max-height: 0;
              width: auto;
              padding-bottom: 0;
            }
        }
        
        nav.is-open {
            max-height: 600px;
            height: auto;
            padding-bottom: 5px;
          }

          .middle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
          }

          @media (min-width: 768px) {
            .middle {
              flex: 1;
              flex-direction: row;
              width: auto;
              padding: 0;
              justify-content: flex-start;
              margin-left: 40px;
            }
          }

          a {
            margin: 10px;
          }

          .link {
            font-size: 25px;
            font-weight: 900;
            color: white;
            margin-top: 10px;
            text-decoration: none;
          }

        `}</style>
        </>
    )
}
