import React from 'react'
import './Djcon.css'
import Spinner from 'react-spinkit';

class Djcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            count: 0,
            mixnum: 5
        };
    }
    hideSpinner = () => {
        if (this.state.count >= this.state.mixnum) {
            this.setState({
                loading: false
            });
        } else {
            this.setState((state, prop) => {
                return { count: state.count + 1 };
            });
        }
    };

    render() {
        return (
            <>
                <div className="mix-loading-spinner">
                    {this.state.loading ? (
                        <Spinner name="cube-grid" color="aqua" />
                    ) : null}
                </div>
                <div className="Djcon">
                    <img src={require("../Assets/Djimg1.JPG")} alt={"DJimg"} className="Djimg1"></img>
                    <p className="djmix-title">
                        DJ MIX
                </p>
                    <p className="djmix-detail">
                        DJ mixをmixcloudに投稿しています。
                    </p>
                    <div className="djmix-desktop-ver">
                        <ul className="mixlist">
                            <li>
                                <iframe width="100%" height="200" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FMK1_%2Fmk1-mix5%2F" frameBorder="0" title="mix5" onLoad={this.hideSpinner}></iframe>
                            </li>
                            <li>
                                <iframe width="100%" height="200" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FMK1_%2Fmk1-mix6%2F" frameBorder="0" title="mix6" onLoad={this.hideSpinner}></iframe>
                            </li>
                            <li>
                                <iframe width="100%" height="200" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FTDU_DJ%2Ffrenzynet-podcast-51-by-mk1%2F" frameBorder="0" title="frenzy#51" onLoad={this.hideSpinner}></iframe>
                            </li>
                            <li>
                                <iframe width="100%" height="200" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FTDU_DJ%2Ffrenzynet-podcast-56-by-mk1%2F" frameBorder="0" title="podcast56" onLoad={this.hideSpinner}></iframe>
                            </li>
                            {/* <li>
                                <iframe width="100%" height="200" src="https://www.mixcloud.com/widget/follow/?u=%2FMK1_%2F&hide_followers=1" frameBorder="0" title="mymixcloud" onLoad={this.hideSpinner}></iframe>
                            </li> */}
                        </ul>
                    </div>
                    <div className="djmix-mobile-ver">
                        <ul className="mixlist">
                            <li>
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FMK1_%2Fmk1-mix5%2F" frameBorder="0" title="mix5" loading="lazy" onLoad={this.hideSpinner}></iframe>
                            </li>
                            <li>
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FMK1_%2Fmk1-mix6%2F" frameBorder="0" title="mix6" onLoad={this.hideSpinner}></iframe>
                            </li>
                            <li>
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FTDU_DJ%2Ffrenzynet-podcast-51-by-mk1%2F" frameBorder="0" title="frenzy#51" onLoad={this.hideSpinner}></iframe>
                            </li>
                            <li>
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FTDU_DJ%2Ffrenzynet-podcast-56-by-mk1%2F" frameBorder="0" title="podcast56" onLoad={this.hideSpinner}></iframe>
                            </li>
                            {/* <li>
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/follow/?u=%2FMK1_%2F&hide_followers=1" frameBorder="0" title="mymixcloud" onLoad={this.hideSpinner}></iframe>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Djcon;