
const makeInputArray = collection => { 
    return (collection instanceof Array ? collection.slice() : Object.values(collection));
};

const myEach = (collection, callback) => {
    const newCollection = makeInputArray(collection);
    
    for ( let i=0; i < newCollection.length; i++) {
            callback(newCollection[i]);
        };
    return collection;
};


const myMap = (collection, callback) => {
    const newCollection = makeInputArray(collection);
    const alteredCollection = [];
    for (let i=0; i < newCollection.length; i++) {
        alteredCollection.push(callback(newCollection[i]));
    };
    return alteredCollection;
};



const myReduce = (collection, callback, acc) => {
    let newCollection = makeInputArray(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let i=0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
};

const myFind = (collection, predicate) => {
    let newCollection = makeInputArray(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) === true) {
            return newCollection[i];
        }
    }
}


const myFilter = (collection, predicate) => {
    let newCollection = makeInputArray(collection);

    let arr = [];

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) === true) {
            arr.push(newCollection[i]);
        }
    }
    return arr;
}



const mySize = collection => {
    let newCollection = makeInputArray(collection);

    return newCollection.length;
}


const myFirst = function (arr, stop=false) {
    return stop ? arr.slice(0, stop) : arr[0];
};
    

const myLast = (arr, start=false) => {
    return start ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
};



const myKeys = object => {
    return Object.keys(object);
}

const myValues = object => {
    return Object.values(object);
}
