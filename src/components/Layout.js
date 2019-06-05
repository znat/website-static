/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.png"
import iconTwitter from "../../static/images/icon-twitter.png"
import iconLinkedin from "../../static/images/icon-linkedin.png"
import iconGitHub from "../../static/images/icon-github.png"
import iconInstagram from "../../static/images/icon-instagram.png"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"HiStaff"}>
                                        <img src={logo}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>A software that was created with the goal of solving the problems of Human Resources in small and medium-sized businesses.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>HiStaff</h4>
                                    <ul>
                                        <li><Link to="/about" title={"About Us"}>About</Link></li>
                                        <li><a href="https://histaff.io/blog" title={"HiStaff Blog"}>Blog</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                        <li><Link to="/privacy" title={"Privacy policy"}>Privacy</Link></li>
                                        <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://twitter.com/histaffio" target={"_blank"} title={"Twitter"}><img src={iconTwitter}/></a>
                                    <a href="https://www.linkedin.com/company/histaff/" target={"_blank"} title={"linkedIn"}><img src={iconLinkedin}/></a>
                                    <a href="https://github.com/histaff" target={"_blank"} title={"GitHub"}><img src={iconGitHub}/></a>
                                    <a href="https://www.instagram.com/histaff.io/" target={"_blank"} title={"Instagram"}><img src={iconInstagram}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://histaff.io" title={"HiStaff"}>HiStaff</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
