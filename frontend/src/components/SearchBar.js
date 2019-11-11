import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class SearchBar extends Component{
    static propTypes = {
        OnClick: PropTypes.func
    }
    constructor () {
        super()
        this.state = {
            keyword: ''
        }
    }
    handleOnClick = () => {
        if (this.props.OnClick)  {
            this.props.OnClick(this.state.keyword)
        }

    }

    handleOnInputChange = (event) => {
        this.setState({keyword: event.target.value})
    }
    render() {
        return (
            <div>
                <Input
                    size='small'
                    icon={{name: 'search', circular: true, link: true,}}
                    placeholder='Search by keyword'
                    onChange={this.handleOnInputChange}
                    value={this.state.keyword}
                    style={{marginRight: '20px'}}
                />
                <Button inverted color='red' onClick={this.handleOnClick} basic>
                    Search
                </Button>
            </div>
        )
    }
}

export default SearchBar