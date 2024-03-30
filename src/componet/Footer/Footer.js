/** @format */

import React from "react";
import Image from "next/image";
import styles from "../Footer/sytles.module.css"
// import facebook from "../assets/svg/Facebook.svg";
// import Linkedin from "../../public/assets/svg/Linkedin.svg";
// import Instagram from "../../public/assets/svg/Instagram.svg";
import Link from "next/link";


function Footer() {
    return (
        <footer className={styles.outermostfooter}>
            <div className={styles.footer} aria-labelledby='footer-heading'>
                <div className={styles.mainContainer}>
                    <div className={styles.parentWraper}>
                        {/* 1 */}
                        <div className={styles.firstDiv}>
                            <div className={styles.firstDivWraper}>
                                <div className='mb-[10px]'>
                                    <ul role='list' className={styles.unorderList}>
                                        <li className={styles.footerMainLinks}>
                                            <Link href='#'>Find a sitter</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='pb-[10px]'>
                                    <ul role='list' className={styles.unorderList}>
                                        <li className={styles.footerMainLinks}>
                                            <Link href='#'>Find a house</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className={styles.footerMainLinks}>Discover</h3>
                            <ul role='list' className={styles.unorderList}>
                                <li className={styles.footerLinks}>
                                    <div role="button" >Reserve for Others</div>
                                </li>
                                <li className={styles.footerLinks}>
                                    <a href='#' title='Restaurants near me'>Restaurants near me</a>
                                </li>
                                <li className={styles.footerLinks}>
                                    <a href='#' title='Delivery near me'>Delivery near me</a>
                                </li>
                                <li className={styles.footerLinks}>
                                    <a href='#' title='Restaurants Open Now'>Restaurants Open Now</a>
                                </li>
                            </ul>

                        </div>
                        {/* 2 */}
                        <div className={styles.secondDiv}>
                            <div className={styles.secondDivWraper}>
                                <div className=''>
                                    <h3 className={styles.footerMainLinks}>
                                        <Link href='/index'>የኛ Shop</Link>
                                    </h3>
                                    <ul role='list' className={styles.unorderList}>
                                        <li className={styles.footerLinks}>
                                            <div role="button" >About Us</div>
                                        </li>
                                        <li className={styles.footerLinks}>
                                            <div role="button" >Careers</div>
                                        </li>
                                        <li className={styles.footerLinks}>
                                            <div role="button" >Press</div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            {/* 3 */}
                            <div className={styles.thirdDiv}>
                                <h3 className={styles.footerMainLinks}>More</h3>
                                <ul role='list' className={styles.unorderList}>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop for iOS'>የኛ Shop for iOS</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop for Android'>የኛ Shop for Android</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <div role="button" >Affiliate Program</div>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <div role="button" >Contact Us</div>
                                    </li>
                                </ul>

                            </div>
                            {/* 4 */}
                            <div className={styles.thirdDiv}>
                                <h3 className={styles.footerMainLinks}>Our Sites</h3>
                                <ul role='list' className={styles.unorderList}>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop.jp'>የኛ Shop.jp</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop.de'>የኛ Shop.de</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop.es'>የኛ Shop.es</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop.ca'>የኛ Shop.ca</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='#' title='የኛ Shop.hk'>የኛ Shop.hk</a>
                                    </li>
                                </ul>

                            </div>
                            {/* 5 */}
                            <div className={styles.thirdDiv}>
                                <h3 className={styles.footerMainLinks}>Business</h3>
                                <ul role='list' className={styles.unorderList}>

                                    <li className={styles.footerLinks}>
                                        <div role="button" >Delight more diners</div>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <div role="button" className="lowercases  font-bold" >Join us Now </div>
                                    </li>

                                    <div className='my-[28px]'>
                                        <h3 className={styles.footerMainLinks}>Follow Us</h3>
                                        <ul role='list' className={styles.unorderList}>
                                            <div className=' flex'>
                                                <span className='pr-4 xl:pr-[29px]'>
                                                    <img src="banner-1.jpg" alt='facebook' />
                                                </span>
                                                <span className='pr-4 xl:pr-[29px]'>
                                                    <img src="banner-1.jpg" alt='linkedin' />
                                                </span>
                                                <span className='pr-4 xl:pr-[29px]'>
                                                    <img src="banner-1.jpg" alt='instagram' />
                                                </span>
                                            </div>
                                        </ul>
                                    </div>
                                </ul>
                            </div>

                        </div>
                        <div className={styles.largeButtonWraper}>

                        </div>
                    </div>
                    <div className={styles.copyrightsWraper}>
                        <div className={styles.line}></div>
                        <div className={styles.copyrighttextWraper}>
                            <p className={styles.copyrighttext}>
                                &copy; &nbsp; Copyright © 2023 የኛ Shop Ethiopia Ecommerce PTA Ltd Level 22, 150 Gambia Street, Addis Ababa - All rights reserved.
                            </p>
                            <p className={styles.copyrighttext}>ABN: 47 046 784 798</p>
                        </div>
                        <div className={styles.smallButtonWraper}>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;