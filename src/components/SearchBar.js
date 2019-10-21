import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'

const { Search } = Input

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    handleSearch = (value, evnt) => {
        evnt.preventDefault()
        this.setState({term: value})

        // console.log(this.state.term)
        
        this.props.handleSearchBarSubmit(this.state.term)

    }

    handleInput = (evnt) => {
        this.setState({term: evnt.target.value})
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.handleSearchBarSubmit(this.state.term)
    }

    render() {
        return (
            // <Search onSearch={this.handleSearch} placeholder="input search text" enterButton />
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='input search text here' onChange={this.handleInput} />
                <input type='submit' value='search' />
            </form>
        )
    }
}
