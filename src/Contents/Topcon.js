import React from 'react'
import './Topcon.css'

class Topcon extends React.Component {
    render() {
        return (
            <div className="topcon">
                <div className="myname">
                    Masaki
                    Obayashi
                    <div className="profession">
                        Engineer/DJ
                    </div>
                </div>

                <div>
                    <img src={require("../Assets/Image1.JPG")} alt={"Image1"} className="image1"></img>
                </div>
            </div >
        )
    }
}

export default Topcon;