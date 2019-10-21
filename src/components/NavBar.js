import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../App.css'
import { Row, Col, PageHeader } from 'antd'
import { Menu, Icon } from 'antd';


const { SubMenu } = Menu;

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <Row gutter={[8,16]}>
                    <Col span={8}>
                <PageHeader title='Youtube Search' />
                    </Col>
                    <Col span={16}>
                <Menu mode="horizontal" style={{ textAlign: 'right', color: 'red'}}>
                    <Menu.Item key='search'><Icon type="search" />Search</Menu.Item>
                    <Menu.Item key='liked'><Icon type="like" />Liked</Menu.Item>
                    <Menu.Item key='account'><Icon type="setting" />Account</Menu.Item>
                </Menu>
                    </Col>

                </Row>
            </header>
        )
    }
}
