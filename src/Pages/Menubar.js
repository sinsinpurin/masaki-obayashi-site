import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Menubar.css'

class Menubar extends React.Component {
    render() {
        return (

            <Container>
                <Row className="menu">
                    <Col className="Mcol" onClick={() => this.props.clickMenu("Top")}>Top</Col>
                    <Col className="Mcol" onClick={() => this.props.clickMenu("Profile")}>Profile</Col>
                    <Col className="Mcol" onClick={() => this.props.clickMenu("Develop")}>Develop</Col>
                    <Col className="Mcol" onClick={() => this.props.clickMenu("DJ")}>DJ</Col>
                    <Col className="Mcol" onClick={() => this.props.clickMenu("Photo")}>Photo</Col>
                </Row>
            </Container>
        );
    }
}

export default Menubar;