import React from 'react'
import './Photo1.css'
import Carousel from 'react-bootstrap/Carousel'


//DJ Photos
class Photo2 extends React.Component {
    render() {
        return (
            <div className="Photo">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/DJ2.JPG")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/DJ1.JPG")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/DJ3.JPG")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="photo-item"
                            src={require("../../Assets/Photos/DJ4.JPG")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Photo2;