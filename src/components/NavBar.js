import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;

export class NavBar extends Component {
    render() {
        return (
            <header>
            <Menu mode="horizontal"style={{marginLeft: '20em'}}>
                <Menu.Item disabled key='title'>Youtube Search</Menu.Item>
                <Menu.Item key='search'><Icon type="search" />Search</Menu.Item>
                <Menu.Item key='liked'><Icon type="like" />Liked</Menu.Item>
                <Menu.Item key='account'><Icon type="setting" />Account</Menu.Item>
            </Menu>
            </header>
        )
    }
}

export default NavBar
