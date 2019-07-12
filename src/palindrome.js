module.exports = (phrase) => {
    return phrase.split('').reverse().join('') === phrase;
}