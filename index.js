exerciseRoutine(() => console.log("Stretch! Work that core!"));

function callback() {
    return "Go for a five-mile run";
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return callback;
}

function returnsAnAnonymousFunction(){
    return function () {
    
    }
}