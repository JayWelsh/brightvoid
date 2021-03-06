import numeral from 'numeral';
import { createBrowserHistory, createHashHistory } from 'history';

export const priceFormat = (number, decimals = 2, currency = "$", prefix = true) => {
    let decimalString = "";
    for(let i = 0; i < decimals; i++){
        decimalString += "0";
    }
    if (currency.length > 1) {
        prefix = false;
    }
    let format = '0,0.' + decimalString;
    if (prefix) {
        return currency + numeral(number).format(format);
    } else {
        return numeral(number).format(format) + " " + currency;
    }
}

export const buildSalesActionsOptions = (variants, keys) => {
    let returnObj = {};
    let localKeys = Object.keys(keys);
    if(localKeys && (localKeys.constructor === Array)) {
        for(const variant of variants) {
            let variantID = variant._id;
            returnObj[variantID] = {};
            for(const key of localKeys) {
                returnObj[variantID][key] = variant[key];
            }
        }
    }
    return returnObj;
}

export const groupImageCollectionByProductID = (imageCollections) => {
    let returnCollectionGroupedByProductID = [];
    for(const collection of imageCollections){
        let productID = collection.product._id;
        returnCollectionGroupedByProductID[productID] = collection.images;
    }
    return returnCollectionGroupedByProductID;
}

export const isPrefixWWW = () => {
  if(window.location.href.indexOf("www.") > -1) {
    return true
  }else{
    return false;
  }
}

export function configureHistory() {
    return window.matchMedia('(display-mode: standalone)').matches
        ? createHashHistory()
        : createBrowserHistory()
}

export const numberFormat = (number) => {
    let format = '0,0.00';
    return numeral(number).format(format);
}