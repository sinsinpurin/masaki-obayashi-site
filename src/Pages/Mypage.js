import React from 'react'
import Menubar from './Menubar'
import ContentManager from './ContentManager'
import './Mypage.css'

class Mypage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentName: "Top"
        }
    }
    handleClick(col) {
        this.setState({ contentName: col })
    }
    render() {
        return (
            <>
                <Menubar clickMenu={(col) => this.handleClick(col)} />
                <div className="mypage">
                    <ContentManager contentName={this.state.contentName} />
                </div>
            </>
        )
    };
}

export default Mypage;