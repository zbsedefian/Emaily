import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="left brand-logo">Emaily</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="auth/google">Login with Google</a></li>
                        <li><a href="auth/linkedin">Login with Linkedin</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header