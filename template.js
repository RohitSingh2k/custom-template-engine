String.prototype.render = function (obj) {
    // reference to our string
    let template = this;

    // all values inside the obj
    let values = Object.keys(obj).join(",");

    // extracting values from obj
    eval(`var {${values}} = obj`);

    // evaluating the new string
    let renderString = eval('`' + template + '`');

    // returning the value.
    return renderString;
}

let val = 'My name is ${name}, my age is ${age}';

let obj = {
    name: "Rohit Singh",
    age: 21
}

console.log(val.render(obj));