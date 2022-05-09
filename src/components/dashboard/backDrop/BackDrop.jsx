import React, { Component } from 'react'
import ShareModal from '../sharemodal/ShareModal'
export default class BackDrop extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                <button className="btn btn-primary" onClick={this.openModalHandler}>Open Modal</button>
                <ShareModal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler} >
                </ShareModal>

            </React.Fragment>
        )
    }
}
