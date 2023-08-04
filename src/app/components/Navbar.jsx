'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Title({ title, children }) {
  return (
    <li className="relative group">
      <a className="relative inline-block px-4 py-2 transition-all duration-500 ease-in-out cursor-pointer min-w-max group-hover:font-bold">
        <span className="absolute w-16 ml-3 h-[5px] bottom-0 left-0 transform scaleY-0 transition-transform duration-300 origin-bottom group-hover:scaleY-100 group-hover:bg-orange"></span>
        <span className="relative z-10">{title}</span>
      </a>
      <div className='absolute w-24 h-10'></div>
      <ul className="absolute left-0 invisible hidden p-2 mt-4 space-y-1 text-black transition-opacity duration-200 ease-in-out transform translate-y-1 bg-white border shadow-md opacity-0 md:block border-gray group-hover:opacity-100 group-hover:visible">
        {children}
      </ul>
    </li>
  )
}


function SubMenu({ subTitle, children }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const handleSubMenuToggle = (subTitle) => {
    if (subTitle === 'SUB TITLE 3 >') {
      setIsSubMenuOpen(!isSubMenuOpen)
    }
  }

  return (
    <li
      className={`relative mt-1 group border-gray cursor-pointer`}
      onClick={(e) => handleSubMenuToggle(subTitle)}
    >
      <a
        className={`relative block px-2 py-1 text-left transition-colors duration-200 rounded min-w-max group ${isSubMenuOpen && subTitle === 'SUB TITLE 3 >' ? 'font-bold' : ''}`}
      >
        <span className="relative z-10">{subTitle}</span>
      </a>
      <div className="absolute w-32 h-20"></div>
      {isSubMenuOpen && (
        <ul className={`absolute p-2 mt-1 space-y-1 text-black transition-opacity duration-200 ease-in-out transform translate-x-3 bg-white rounded shadow-md opacity-0 top-[-30px] left-full group-hover:opacity-100  ${isSubMenuOpen ? "visible " : "invisible"}`} >
          {children}
        </ul>
      )}
    </li>
  )
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className=''>
      <div className="w-full bg-orange" >
        <nav className="flex items-center justify-between h-10 max-w-6xl px-2 mx-auto bg-orange">
          <div className="flex gap-2 font-bold">
            <p className="text-sm text-darkred md:text-base">CALL US NOW!</p>
            <p className="text-sm text-white md:text-base">385.154.11.28.35</p>
          </div>
          <div className="flex gap-2 font-bold">
            <Link href="/login" className="text-sm bg-none text-darkred md:text-base">LOGIN</Link>
            <Link href="/signup"  className="text-sm text-white md:text-base">SIGNUP</Link>
          </div>
        </nav>
      </div>
      <div className="!bg-lightgray w-full">
        <nav className="max-w-6xl py-8 mx-auto">
          <div className="flex flex-row items-center justify-between px-4 sm:px-2">
            <div className="">
              <p className="font-mono text-3xl font-bold tracking-tighter sm:text-5xl">YOUR<span className="text-orange">LOGO</span></p>
            </div>
            <div className={`block cursor-pointer md:hidden `} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            {isMobileMenuOpen && (
              <MobileMenu
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            )}
            <div className={`w-full mt-4 md:w-1/2 hidden md:mt-0 md:flex z-50`}>
              <ul className="flex flex-wrap items-center text-sm text-center -ml-28 lg:-ml-5 md:flex-none">
                <Title title="TITLE 1">
                  <SubMenu subTitle="Sub TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu  >
                </Title>
                <Title title="TITLE 2">
                  <SubMenu subTitle="SUB TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu >
                </Title>
                <Title title="TITLE 3">
                  <SubMenu subTitle="SUB TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu >
                </Title>
                <Title title="TITLE 4">
                  <SubMenu subTitle="SUB TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu >
                </Title>
                <Title title="TITLE 5">
                  <SubMenu subTitle="SUB TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu >
                </Title>
                <Title title="TITLE 6">
                  <SubMenu subTitle="SUB TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu >
                </Title>
                <Title title="TITLE 7">
                  <SubMenu subTitle="SUB TITLE 1" />
                  <SubMenu subTitle="SUB TITLE 2" />
                  <SubMenu subTitle="SUB TITLE 3 >" >
                    <SubMenu subTitle="SUBMENU 1" />
                    <SubMenu subTitle="SUBMENU 2" />
                    <SubMenu subTitle="SUBMENU 3" />
                  </SubMenu >
                </Title>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

const MobileMenu = ({ setIsMobileMenuOpen }) => {
  return (
    <div className='absolute inset-0 bg-lightgray'>
      <div className='absolute cursor-pointer right-3 top-3' onClick={() => setIsMobileMenuOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19.354 18.354l-5.354-5.354 5.354-5.354-1.414-1.414-5.354 5.354-5.354-5.354-1.414 1.414 5.354 5.354-5.354 5.354 1.414 1.414 5.354-5.354 5.354 5.354z" />
        </svg>

      </div>
      <div className="absolute left-3 top-2">
        <p className="font-mono text-3xl font-bold tracking-tighter sm:text-5xl">YOUR<span className="text-orange">LOGO</span></p>
      </div>
      <ul className="flex flex-col pt-5 space-y-3 mt-14 ">
        <Title title="TITLE 1">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3" />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
        <Title title="TITLE 2">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3" />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
        <Title title="TITLE 3">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3" />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
        <Title title="TITLE 4">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3" />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
        <Title title="TITLE 5">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3" />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
        <Title title="TITLE 6">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3" />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
        <Title title="TITLE 7">
          <SubMenu subTitle="SUBMENU 1">
            <SubMenu subTitle="SUBMENU 1" />
            <SubMenu subTitle="SUBMENU 2" />
            <SubMenu subTitle="SUBMENU 3 " />
          </SubMenu>
          <SubMenu subTitle="Sub TITLE 2" />
          <SubMenu subTitle="Sub TITLE 3 >" />
        </Title>
      </ul>
    </div>
  )
}