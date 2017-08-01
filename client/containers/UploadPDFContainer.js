import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import UploadPDF from '../components/UploadPDF';
import {addInvoice} from '../actions/PDFActions';

const mapStateToProps = (state, ownProps) => {
    return {
        files: state.pdf.files
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDrop: (files) => {
            dispatch(addInvoice(files))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadPDF);
