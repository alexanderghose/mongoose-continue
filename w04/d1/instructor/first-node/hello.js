let helloVar = "hello world"
function helloRaymond() {
    console.log("hello raymond")
}

// normally we can export a javascript object
// javascript objects have properties, that are
// key-value pairs.

module.exports = {
    helloVar: helloVar, // exporting x
    helloRaymondFunc: helloRaymond
}