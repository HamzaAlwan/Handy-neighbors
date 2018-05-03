import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


class Intro extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			redirect: false
		}

	}

	render(){


	const { redirect } = this.state;
   if (redirect) {
     return <Redirect to='/signin'/>;
   }
		return (
		<div style={{'marginTop':'120px'}}>
		
		<Grid >
		 <Row className="show-grid">
		    <Col md={6}>
		    <h1 id='txt'>User Signup :</h1>
			    <a  href="#/userSignup" style={{textDecoration: 'none'}}>
							<img style={{'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick'}} src="https://images.clipartuse.com/f115a3553867818f419319a62311d331_broken-fender-clip-art-vector-images-illustrations-istock_612-383.jpeg" height="100%" width="100%"/>
				</a>
			</Col>
			<Col md={6}>
			<h1 id='txt'>Mechanic Signup :</h1>
				<a   href="#/signup" style={{textDecoration: 'none'}}>
					<img style={{'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick'}} src="https://media.istockphoto.com/vectors/auto-mechanic-vector-id495279953?k=6&m=495279953&s=612x612&w=0&h=--8i5pbVdpIKWLUg9PPSXfhrSCja1HVPuBoDUaI8sT8=" height="351px" width="100%"/>
				</a>
			</Col>
		</Row>
		</Grid>
		</div>
		
		)
	}

	}
export default Intro