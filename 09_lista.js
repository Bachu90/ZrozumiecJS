var numbers = [1, 2, 3];

function arrayToList(array) {
    var list = null;

    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            "value": array[i],
            "rest": list
        }
    }

    return list;
}

console.log(arrayToList(numbers));
