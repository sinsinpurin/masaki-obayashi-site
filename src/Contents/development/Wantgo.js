import React from 'react'
import './Wantgo.css'

class Wantgo extends React.Component {
    render() {
        return (
            <>
                <div className="wantgo">
                    <div className="wantgo-content">
                        <ul className="list-content">
                            <li>
                                <div>
                                    <img src={require("../../Assets/wantgo.png")} alt={"wantgo"} className="wantgo-img"></img>
                                </div>
                            </li>
                            <li>
                                <div className="wantgo-text">
                                    <div className="wantgo-title">
                                        WantGo
                                    </div>
                                    <div className="wantgo-detail">
                                        <div className="wantgo-sub-detail">
                                            たまたま見つけたお店 行きたいって思うけど<br />
                                            そのまま忘れてしまったりすることが... <br />
                                            <br />
                                            いつでも気軽に行きたいところをメモして、<br />
                                            旅行のときの予定を立てやすくしたり <br />
                                            今度行きたいところを共有したり<br />
                                        </div>
                                        行きたい場所 <br />
                                        やりたいことを<br />
                                        家族、彼女、友達と気軽に共有できるアプリ<br />
                                        <br />
                                        現在、開発中<br />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Wantgo;