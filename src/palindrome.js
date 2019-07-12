module.exports = (phrase) => {
    return phrase.trim().length > 0 && phrase.split('').reverse().join('') === phrase;
}