import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import TrendList from '../components/TrendList'

class TrendListContainer extends Component{
    static propTypes = {
        trends: PropTypes.array,
        country: PropTypes.string
    }

    static defaultProps = {
        trends: []
    }
    // save trends to localstorage
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps.trends)
        if (localStorage.getItem(nextProps.country))
            return
        let item = { trends: nextProps.trends, createdTime: +Date.now() }
        console.log("Store trends into storage")
        localStorage.setItem(this.props.country, JSON.stringify(item))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentDidMount() {
        //this._loadTrends()
    }

    render() {
        return (
            <TrendList trends={this.props.trends} />
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
        init: null
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendListContainer)