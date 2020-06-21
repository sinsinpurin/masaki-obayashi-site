import React from 'react'
import './Wantgo.css'

class Wantgo extends React.Component {
    render() {
        return (
            <>
                <div className="wantgo">
                    <div className="wantgo-content">
                        <img src={require("../../Assets/wantgo.png")} alt={"wantgo"} className="wantgo-img"></img>
                        <div className="wantgo-text">
                            <div className="wantgo-title">
                                Wantgo
                            </div>
                            <div className="wantgo-detail">
                                たまたま見つけたお店<br />
                                行きたいって思うけど<br />
                                そのまま忘れてしまったりすることが... <br />
                                <br />
                                いつでも気軽に行きたいところをメモして、<br />
                                旅行のときの予定を立てやすくしたり <br />
                                今度行きたいところを共有したり<br />
                                行きたい場所、やりたいことを<br />
                                家族、彼女、友達と気軽に共有できるアプリ<br />
                                <br />
                                現在、開発中<br />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Wantgo;