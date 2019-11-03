/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */

import Constants from './Constants'

const { width, height } = Constants

export const titleCase = (str) => {
    const newStr = str.toLowerCase().split(' ');
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = `${newStr[i].charAt(0).toUpperCase()}${newStr[i].slice(1)}`;
    }
    return newStr.join(' ');
}

export const formatMoney = (amount) => {
    const decimalCount = 0
    const decimal = '.'
    const thousands = ','
    const negativeSign = parseInt(Math.abs(Number(amount) || 0), 10) < 0 ? '-' : ''

    const i = parseInt(Math.abs(Number(amount) || 0).toFixed(decimalCount), 10).toString()
    const j = (i.length > 3) ? i.length % 3 : 0

    const formartedCurrency = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')

    return formartedCurrency
}

export const scaledSize = (size) => {
    // Use iPhone6 as base size which is 375 x 667
    const baseWidth = 375
    const baseHeight = 667
    const scaleWidth = width / baseWidth
    const scaleHeight = height / baseHeight
    const scale = Math.min(scaleWidth, scaleHeight)
    return Math.ceil((size * scale))
}

export const hashString = (str) => {
    const stringified = str.toString()
    let result
    for (let i = 0, h = 0xdeadbeef; i < stringified.length; i += 1) {
        h = Math.imul(h ^ stringified.charCodeAt(i), 2654435761)
        result = (h ^ h >>> 16) >>> 0
    }
    return result
}
