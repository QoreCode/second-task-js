const maxIndexOfSymbol = (haystack, ...needle) => {
    const indexes = [ ...needle ].map(
        (symbol) => symbol.length === 1
        ? haystack.lastIndexOf(symbol)
        : -1
    );
    return Math.max(...indexes);
};

module.exports = maxIndexOfSymbol;