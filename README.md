# Custom templating engine

This is a very popular interview question, to make your own templating engine in javascript.

This is a very simple technique. You just need to be familiar with the `template literals syntax of es6` and the `eval()` function in js.

## Steps to create custom templating engine.

- define a prototype function into `String` class with an object as an argument. Ex : `render(obj)`
- extract all the variables from the argument object.
- use template literals and evaluate the new string.
- return the new string.

### Source code
```JS
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
```
### Output 
```BASH
My name is Rohit Singh, my age is 21
```


