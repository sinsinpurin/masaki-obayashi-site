import React from 'react'
import './Phocon.css'
import Photo1 from './Photo/Photo1'
import Photo2 from './Photo/Photo2'

class Phocon extends React.Component {
    render() {
        return (
            <>
                <div className="Phocon">
                    <div className="phocon-title">
                        Photo
                    </div>
                    <div className="phocon-detail">
                        夕焼け空が好きです。
                    </div>
                    <Photo1 />
                    <div className="phocon-detail" style={{ paddingTop: 30 }}>
                        DJをするのが趣味です
                    </div>
                    <Photo2 />
                </div>
            </>
        )
    }
}

export default Phocon;