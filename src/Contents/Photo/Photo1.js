import React from 'react'
import './Photo1.css'
import Carousel from 'react-bootstrap/Carousel'

class Photo1 extends React.Component {

    render() {
        return (
            <div className="Photo">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/Photo1-1.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>My Hometown</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/disney-sea.jpg")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Disney Sea</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/panel-sky.jpg")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Sunset sky</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Photo1;