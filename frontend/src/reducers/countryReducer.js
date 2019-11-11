import axios from 'axios'
import  {country_list } from "../containers/country_data"
const CHANGE_COUNTRY = 'CHANGE_COUNTRY'
const CHANGE_TRENDS = 'CHANGE_TRENDS'


export default function reducer(state, action) {
    if (!state)
        state = {
        country: '',
        trends: []
        }

    switch (action.type) {
        case CHANGE_COUNTRY:
            return { ...state, country: action.country }
        case CHANGE_TRENDS:
            return { ...state, trends: action.trends }
        default:
            return state;
    }
}

export const changeCountry = (country) => {
    return {type: CHANGE_COUNTRY, country}
}


// Get trends from server and dispatch an action to change current state
export const getTrends = (country) => {
    return (dispatch) => {
        let code = get_country_code(country)
        console.log("dispatch getTrends: url: ", '/', code)
        const host = 'http://127.0.0.1:8088'
        axios.get(host+'/'+code)
            .then((response) => {
                const action = changeTrends(response.data.trends)
                dispatch(action)
            })
    }
}

export const changeTrends = (trends) => {
    return {
        type: CHANGE_TRENDS,
        trends
    }
}


const get_country_code = (name) => {
    let code = ''
    country_list.forEach( (item) => {
        if (item.country_name === name)
            code = item.country_code
    })
    return code
}