import React, { Component } from 'react'
import { Header, Segment, Icon } from "semantic-ui-react"
import DropdownButton from './DropdownButton'
import SearchBar from '../components/SearchBar'
import { changeCountry } from '../reducers/countryReducer'
import PropTypes from "prop-types"

class MyHeader extends Component {
    static propTypes = {
    }

    handleSearchBarOnClick = (keyword) => {

    }

    handleButtonOnChange = (country) => {
        changeCountry(country)
    }


    render() {
        return (
            <Segment clearing color='black' inverted style={{padding: '1em 1em 0 1em'}}>
                <Header as='h1'  floated='left' >
                    <Icon size='massive' name='twitter'/>
                </Header>
                <Header as='h6'  floated='left' style={{marginRight: '20px'}}>
                    <p style={{fontSize:"13px"}}>GET <br/>
                        LATEST <br/>
                        TRENDS
                    </p>
                </Header>
            <Header as='h5' floated='left'>
              <DropdownButton/>
            </Header >
              <Header as='h5' floated='left'>
                  <SearchBar onClick={this.handleSearchBarOnClick}/>
              </Header>
                <Header as='h1' floated='right'>
                    <a href="https://github.com/janicecy/">
                        <Icon name='github'/>
                    </a>
                </Header>
            </Segment>
        )
    }
}

export default MyHeader