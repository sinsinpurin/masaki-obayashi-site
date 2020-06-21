import React from 'react'
import './Devcon.css'
import Wantgo from './development/Wantgo'
import Ethwal from './development/Ethwal'

class Devcon extends React.Component {
    render() {
        return (
            <div className="Devcon">
                <p className="develop-text">
                    Development
                </p>
                <ul className="dev-list">
                    <li style={{ paddingBottom: 40 }}>
                        <Wantgo />
                    </li>
                    <li style={{ paddingBottom: 40 }}>
                        <Ethwal />
                    </li>
                </ul>
            </div >
        )
    }
}

export default Devcon;