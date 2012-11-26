# BEMHTML core library

[![Build Status](https://secure.travis-ci.org/bem/bemhtml.png?branch=master)](https://travis-ci.org/bem/bemhtml)

BEMHTML is an XSLT inspired template language that helps to write BEM-oriented templates to generate HTML
in a declarative way.

`bemhtml` library provides:

- `bemhtml` block with [core templates](https://github.com/bem/bemhtml/blob/master/common.blocks/bemhtml/bemhtml.bemhtml)
- `bemhtml` tech module for use with `bem build` command of [BEM tools](https://github.com/bem/bem-tools) to help
  compiling of templates into JavaScript
- `bemjson2html` tech module for use with `bem create` command to help building static `.html` from static `.bemjson.js`
  and compiled `.bemhtml.js` bundle files

The core of BEMHTML compiler is implemented using [OmetaJS](https://github.com/veged/ometa-js)
and [xjst](https://github.com/veged/xjst).

## Quick syntax example

```js
// Override rendering of `link` block
block link {

    // Specify block tag
    tag: 'a'

    // Specify block html attributes
    attrs: {
        return { href: this.ctx.url }
    }

}
```
