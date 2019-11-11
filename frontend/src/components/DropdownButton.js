import { Dropdown } from "semantic-ui-react";
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DropdownButton extends Component{
    static propTypes = {
        onChange: PropTypes.func,
        stateOptions: PropTypes.array
    }

    handleOnChange = (e, { value }) => {
        if (this.props.onChange)
            this.props.onChange(value)
    }

    render() {
        return (
            <div>
                <Dropdown
                    placeholder='Country' search selection
                    options={this.props.stateOptions}
                    onChange={this.handleOnChange} />
            </div>
        );
    }

}

export default DropdownButton