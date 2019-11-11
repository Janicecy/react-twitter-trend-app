import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import Trend from './Trend'
class TrendList extends Component{
    static propTypes = {
        trends: PropTypes.array
    }

    static defaultProps = {
        trends: []
    }
    render() {
        return (
            <div className='trend-list'>
                <Table selectable columns='4'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Trend</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.trends.map((trend, i) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{i+1}</Table.Cell>
                                <Trend trend={trend} key={i} index={i}/>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            </div>
        )
    }
}

export default TrendList