import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../App.css'
import { Row, Col, PageHeader, Input, Menu, Icon } from 'antd'


const { Search } = Input;

export default class NavBar extends Component {
    state = {
        search : false
    }

    toggleSearch = () => {
        let search = !this.state.search
        this.setState({search})
    }
    render() {
        return (
            <header>
                <Row gutter={[16,16]}>
                    <Col span={8}>
                        <PageHeader title='Youtube Search' />
                    </Col>
                   {this.state.search ? <Col span={9} style={{marginTop: '17px', marginRight: '20px'}}>
                        <Search placeholder="input search text" enterButton />
                    </Col> : null
                   }
                    <Col span={6}>
                <Menu mode="horizontal" style={{ float: 'right', color: 'red'}}>
                    <Menu.Item key='search' onClick={this.toggleSearch}><Icon type="search" />Search</Menu.Item>
                    <Menu.Item key='liked'><Icon type="like" />Liked</Menu.Item>
                    <Menu.Item key='account'><Icon type="setting" />Account</Menu.Item>
                </Menu>
                    </Col>

                </Row>
            </header>
        )
    }
}
