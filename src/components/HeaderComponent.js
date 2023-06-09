import React, { Component } from 'react'
import logo from "../img/logo.png"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <img src={logo} className='logo'></img>
                </header>
            </div>
        )
    }
}

export default HeaderComponent