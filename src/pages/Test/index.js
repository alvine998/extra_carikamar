import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import store from '../../Store';
import uuid from 'uuid';
import {getItems} from '../../Actions/itemAction';
import {PropTypes} from 'prop-types';

class Testing extends Component {
	state = {};

	componentDidMount() {
		this.props.getItems();
	}
	render() {
		const {items} = this.state;
		return (
			<div style={{margin:50}}>
				<Row>
					<Button variant="primary">Get</Button>
					<Button variant="primary">Post</Button>
					<Button variant="primary">Update</Button>
					<Button variant="primary">Delete</Button>
				</Row>
			</div>
		);
	}
}

Testing.prototype = {
	getItems: PropTypes.func.isRequired,
	items: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	items: state.items
});

export default connect(mapStateToProps, {getItems})(Testing);
