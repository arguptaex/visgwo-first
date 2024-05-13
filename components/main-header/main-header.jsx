"use client";

import Link from "next/link";
import "./main-header.css";

import logoimg from "@/assets/logo3.png"

import React from 'react'
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainHeader = () => {

    const path = usePathname();
    console.log("path is ",path)

  return (
    <section className="main-header-section">

        <div className="container">
            <header className="header-tag">

                <div className="header-logo">
                    <Image className="logo-image" src={logoimg} alt="Logo img" width={100} priority></Image>

                    <img className="logo-img" src={logoimg.src} alt="logo" />

                </div>

                <nav className="navbar">
                    <ul>
                        <li className={path==='/'? "active main-header-list" : "main-header-list" }><Link href="/">Home</Link></li>
                        <li className={path==='/about'? "active main-header-list" : "main-header-list" }><Link href="/about">About</Link></li>
                        <li className={path==='/contact'? "active main-header-list" : "main-header-list" }><Link href="/contact">Contact Us</Link></li>
                        <li className={path==='/products'? "active main-header-list" : "main-header-list" }><Link href="/products">Products</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    </section>
  )
}

export default MainHeader