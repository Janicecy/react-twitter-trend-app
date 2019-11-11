import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
class Trend extends Component{
    static propTypes = {
        trend: PropTypes.object.isRequired,
        index: PropTypes.number
    }

    static defaultProps = {
        trend: {
            name: '',
        }
    }

    render() {
        const trend = this.props.trend
        return (
                <Table.Cell>
                    {trend.name}
                    <p className='trend-volume'>
                        Tweet count: {trend.volume == null ? '<10000' : trend.volume}
                    </p>
                </Table.Cell>
        )
    }

}

export default Trend