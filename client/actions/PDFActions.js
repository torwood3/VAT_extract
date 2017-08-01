import * as types from './ActionTypes';

export function addInvoice(files) {
    return {type: types.ADD_INVOICE, files};
}