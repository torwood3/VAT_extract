import React, { Component } from 'react';
import UploadPDF from '../containers/UploadPDFContainer';

export default class App extends Component {
    constructor(){
        super();
        this.state = {}
    }

    onClick() {
        let data = new FormData(this.props.files);

        fetch("/api/extract-vat-numbers", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/pdf"
            },
            credentials: "same-origin"
        }).then(function(response) {
            console.log(response.text())
        }, function(err) {
            console.log(err.message)
        })
    }

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <h1> VAT Extractor</h1>
        <UploadPDF></UploadPDF>
          <label>
              TVA to ignore:
              <input type="text" name="name" />
          </label>
          <button onClick={this.onClick.bind(this)}>Extract</button>

        <p>Result : </p>
      </div>
    );
  }
}
