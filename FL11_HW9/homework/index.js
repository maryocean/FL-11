// 0
function getNumbers(inputStr) {
    let strArr = inputStr.split('');
    let resultArr = [];
    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i];
        if (element % 1 === 0) {
            resultArr.push(element);
        }
    }
    return resultArr;
}

console.log(getNumbers('2fwd32fs3245gfd'));

// 1
function findTypes() {

    let typeQuantity = {
        undefined: 0,
        object: 0,
        boolean: 0,
        number: 0,
        string: 0,
        function: 0
    }

    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        let type = typeof element;
        if (type === 'object') {
            typeQuantity.object++;
        } else if (type === 'undefined') {
            typeQuantity.undefined++;
        } else if (type === 'boolean') {
            typeQuantity.boolean++;
        } else if (type === 'number') {
            typeQuantity.number++;
        } else if (type === 'string') {
            typeQuantity.string++;
        } else if (type === 'function') {
            typeQuantity.function++;
        } else if (type === 'object') {
            typeQuantity.object++;
        }
    }
    return typeQuantity;
}

console.log(findTypes(null, 5, 'marina', 'taras', 3, 6));

// 2
function logF(inputX) {
    console.log(inputX);
}

function executeforEach(arr, func) {

    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1, 2, 3], logF)

// 3 

function mapArray(arr, func) {
    let resultArr = [];
    executeforEach(arr, function (el) {
        resultArr.push(func(el));
    });
    return resultArr;
}
console.log(mapArray([2, 5, 8],
    function (el) {
        return el + 3
    }));

// 4
function filterArray(arr, func) {
    let resultArr = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            resultArr.push(el);
        }
    });
    return resultArr;
}
console.log(filterArray([2, 5, 8, 10, 2, 1, 6],
    function (el) {
        return el > 3;
    }))



// 5
function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return 'Date: ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//6 
function canConvertToDate(stringDate) {
    let testDate = {
        year: stringDate.substring(0, 4),
        month: stringDate.substring(5, 7),
        day: stringDate.substring(8, 10),
        hours: stringDate.substring(11, 13),
        minutes: stringDate.substring(14, 16),
        seconds: stringDate.substring(17, 19)
    };

    for (const key in testDate) {
        if (testDate.hasOwnProperty(key)) {
            const element = testDate[key];
            if (!(element % 1 === 0)) {
                return false;
            }
        }
    }

    if (testDate.year > 9999
        || testDate.year < 1000
        || testDate.month > 11
        || testDate.month < 0
        || testDate.day > 31
        || testDate.day < 0
        || testDate.hours > 23
        || testDate.hours < 0
        || testDate.minutes > 59
        || testDate.minutes < 0
        || testDate.seconds > 59
        || testDate.seconds < 0) {
        return false;
    }
    return true;
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));


// 7
function daysBetween(date1, date2) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

console.log(daysBetween(new Date('2016-03-02T00:00:00'), new Date('2016-04-19T00:00:00')));

// 8
let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]


function getAmountOfAdultPeople(peopleArr) {
    let agesInDays = [];
    let today = new Date();
    let eighteenYearsBefore = new Date();
    eighteenYearsBefore.setFullYear(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const eighteenYearsInDays = daysBetween(today, eighteenYearsBefore);

    for (let i = 0; i < peopleArr.length; i++) {
        // because input data contains whitespaces
        const birthdayString = peopleArr[i][' birthday '];
        const birthdayDate = new Date(birthdayString);
        let personAgeInDays = daysBetween(today, birthdayDate);
        agesInDays.push(personAgeInDays);
    }

    let resultArr = filterArray(agesInDays, function (ageInDays) {
        return ageInDays > eighteenYearsInDays;
    });

    return resultArr.length;
}

console.log(getAmountOfAdultPeople(data));

// 9
function keys(obj) {
    let outPutArray = [];
    for (let property in obj) {
        outPutArray.push(property)
    }
    console.log(outPutArray);
}

keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

// 10
function values(obj) {
    let outPutArray = [];
    for (let property in obj) {
        outPutArray.push(obj[property])
    }
    console.log(outPutArray);
    return outPutArray;
}

values({ keyOne: 1, keyTwo: 2, keyThree: 3 });
