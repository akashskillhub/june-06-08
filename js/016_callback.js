
// x        => callback
// demo     => higher order function
function demo(x) {
    x()
}
function test() {
    console.log("Test function call");
}
demo(test)
