import React from 'react'
import Topcon from '../Contents/Topcon'
import Procon from '../Contents/Procon'
import Djcon from '../Contents/Djcon'
import Devcon from '../Contents/Devcon'
import Phocon from '../Contents/Phocon'

class ContentManager extends React.Component {
    constructor(props) {
        super(props)
        this.ContentHundler(this.props.contentName)
    }
    ContentHundler(contentName) {
        if (contentName === "Top" || contentName === null) {
            return (
                <Topcon />
            )
        } else if (contentName === "Profile") {
            return (
                <Procon />
            )
        } else if (contentName === "Develop") {
            return (
                <Devcon />
            )
        } else if (contentName === "DJ") {
            return (
                <Djcon />
            )
        } else if (contentName === "Photo") {
            return (
                <Phocon />
            )
        }
    }
    render() {
        let content = this.ContentHundler(this.props.contentName)
        return (
            <>
                {content}
            </>
        )
    }
}

export default ContentManager