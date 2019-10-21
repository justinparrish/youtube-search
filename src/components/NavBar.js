import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../App.css'
import { Row, Col, PageHeader, Input, Menu, Icon } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const { Search } = Input;

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <Row gutter={[16,16]}>
                    <Col span={8}>
                        <PageHeader title='Youtube Search' />
                    </Col>
                   <Col span={9} style={{marginTop: '17px', marginRight: '20px'}}>
                        <Search placeholder="input search text" enterButton />
                    </Col>
                    <Col span={6}>
                <Menu mode="horizontal" style={{ float: 'right', color: 'red'}}>
                    <Menu.Item key='home'><Icon type="home" />Home</Menu.Item>
                    <Menu.Item key='liked'><Icon type="like" />Liked</Menu.Item>
                    <Menu.Item key='account'><Icon type="setting" />Account</Menu.Item>
                </Menu>
                    </Col>

                </Row>
            </header>
        )
    }
}
