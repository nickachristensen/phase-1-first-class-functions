function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function Fn() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {      
    }
}


