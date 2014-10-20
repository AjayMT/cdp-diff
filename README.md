
# cdp-diff
This is the tool used by [Cheese](http://github.com/AjayMT/cheese) to create diffs for the [Cheese Diff Protocol (CDP)](https://github.com/AjayMT/cheese/wiki/CDP). This module can be used independently in node.js as well as the browser.

## Installation
### node
```sh
$ npm install --save cdp-diff
```

### browser
Use [bower](http://bower.io):
```sh
$ bower install --save cdp-diff
```

Or download `./lib/cdp-diff.js` and put it in a script tag.

## API
### diff.createDiff(old, new)
Create a diff between two objects, `old` and `new`. Applying this diff to `old` will turn `old` into `new`. This function returns the diff that was created.

### diff.applyDiff(diff, obj)
Apply a diff (`diff`) to an object (`obj`). `diff` must be created by `diff.createDiff`, or must follow the same format. This function **does not** copy the object (`obj`) before applying the diff, so whatever object this function is called with will be modified. This function returns the modified object.

### diff.copyObject(obj)
Copy an object (`obj`). This function returns a copy of the object.

## License
MIT License. See `./LICENSE` for details.
