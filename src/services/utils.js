const groupBy = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }), 
    {},
  );

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const safeCopy = (element) => {
    return JSON.parse(JSON.stringify(element));
}

function toUnicode(theString) {
  return String.fromCodePoint("0x" + theString);
}

export {
    groupBy,
    shuffleArray, 
    safeCopy,
    toUnicode
};