import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  {country_list } from "./country_data"
import DropdownButton from '../components/DropdownButton'
import { getTrends, changeCountry, changeTrends } from '../reducers/countryReducer'
import {connect} from "react-redux"

class DropdownButtonContainer extends Component{
    static propTypes = {
        getTrends: PropTypes.func,
        trends: PropTypes.array,
        country: PropTypes.string,
        changeCountry: PropTypes.func,
        changeTrends: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            stateOptions: []
        }
    }

    _loadStateOptions = () => {
        return country_list.map((country, index) => {
            return {
                text: country.country_name,
                key: index,
                value: country.country_name
            }
        })
    }

    componentWillMount() {
        const stateOptions = this._loadStateOptions()
        this.setState({ stateOptions })
    }

    componentDidMount() {
        this._loadTrends("Worldwide")
    }

    handleCountryOnChange = (country) =>{
        this._loadTrends(country)
        this.props.changeCountry(country)
    }

    _loadTrends = (country) => {
        // if trends are cached more than 5 mins, an action will be dispatched to fetch new trends
        if (localStorage.getItem(country)) {
            const { trends, createdTime } = JSON.parse(localStorage.getItem(country))
            let duration = (+Date.now() - createdTime) / 1000
            if (Math.round(duration) < 300) {
                this.props.changeTrends(trends)
                return
            }
        }
        localStorage.removeItem(country)
        this.props.getTrends(country)
    }

    render() {
        return (
            <DropdownButton
                stateOptions={this.state.stateOptions}
                onChange={this.handleCountryOnChange}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trends: state.trends,
        country: state.country
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTrends: (country) => dispatch(getTrends(country)),
        changeCountry: (country) => dispatch(changeCountry(country)),
        changeTrends: (trends) => dispatch(changeTrends(trends))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownButtonContainer)