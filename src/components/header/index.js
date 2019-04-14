import React, { Component } from 'react';
import Logo from '../logo/logo'
import BoardsMenu from '../boardsmenu/boardsmenu'
import UserSettings from '../usersettings/usersettings'

class Header extends Component {

    render() {
 return <header  className="masthead">
            <BoardsMenu/>
            <Logo/>
            <UserSettings/>
        </header>
    }
}
export default Header;