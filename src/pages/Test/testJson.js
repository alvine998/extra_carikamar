import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { Col, Row } from 'react-bootstrap';
import { Card, CardDeck } from 'react-bootstrap';
class TestingDB extends Component {
	constructor(props) {
		super(props);
		this.state = { profiles: [] };
	}

	componentDidMount() {
		axios
			.get(API_URL + 'api/items')
			.then((res) => {
				console.log('Response', res.data);
				const profiles = res.data;
				this.setState({ profiles });
			})
			.catch((err) => {
				console.log('====================================');
				console.log(err);
				console.log('====================================');
			});
    }
    
    masukkan = (value) => {
        console.log("Ini " + value);
    }
	render() {
		const { profiles } = this.state;
		return (
			<div>
				<Row>
					{profiles &&
						profiles.map((profile) => (
							<Col md={4} xs={6} className="mb-4">
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Id: {profile.id}</Card.Title>
										<Card.Text>Email: {profile.nama}</Card.Text>
									</Card.Body>
									<Card.Footer>
										<small className="text-muted">No Ponsel: {profile.nohp}</small>
									</Card.Footer>
								</Card>
							</Col>
						))}
				</Row>
			</div>
		);
	}
}

export default TestingDB;
