import Dropzone from 'react-dropzone'
import React, { Component } from 'react';

export default class UploadPDF extends Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

    onDrop(files) {
        this.props.onDrop(files);
        files.key = this.state.files.length;
        this.setState({
            files
        });
    }

    onDropRejected() {
        console.log("Merci de mettre un PDF :)");
    }

    render() {
        console.log(this.props)
        return (
            <section>
                <div className="dropzone">
                    <Dropzone
                        onDrop={this.onDrop.bind(this)}
                        onDropRejected={this.onDropRejected.bind(this)}
                        accept=".pdf"
                        multiple={true}>
                        <p>Click to select your invoices</p>
                        <p>or</p>
                        <p>Drag&Drop your invoices here</p>
                    </Dropzone>
                </div>
            </section>
        );
    }
}