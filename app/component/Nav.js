"use client"
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-white flex items-center justify-between border-b border-gray-400 py-8 px-10">
      <a href="/">
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.998 20H9.99805V17H11.998V20ZM17.362 17.778L15.241 15.657L16.655 14.243L18.777 16.365L17.364 17.778H17.362ZM4.63405 17.778L3.21905 16.364L5.33905 14.242L6.75405 15.656L4.63405 17.777V17.778ZM10.998 15.007C8.23302 15.0059 5.99231 12.7637 5.99305 9.99867C5.99378 7.23364 8.23568 4.99263 11.0007 4.993C13.7657 4.99337 16.007 7.23497 16.007 10C16.0043 12.7649 13.763 15.0053 10.998 15.007ZM10.998 6.993C9.33759 6.9941 7.99231 8.34087 7.99305 10.0013C7.99378 11.6618 9.34025 13.0074 11.0007 13.007C12.6612 13.0066 14.007 11.6605 14.007 10C14.0054 8.33918 12.6589 6.99355 10.998 6.993ZM20.998 11H17.998V9H20.998V11ZM3.99805 11H0.998047V9H3.99805V11ZM16.654 5.758L15.241 4.343L17.362 2.221L18.777 3.636L16.655 5.757L16.654 5.758ZM5.34105 5.758L3.22105 3.637L4.63605 2.223L6.75605 4.345L5.34205 5.757L5.34105 5.758ZM11.998 3H9.99805V0H11.998V3Z" fill="#2E3A59"/>
      </svg>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
