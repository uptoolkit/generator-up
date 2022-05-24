# Up Package Generator

> Up package generator to create React Component package or React Hook Package

## Installation

First, install [Yeoman](http://yeoman.io) and generator-up using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-up
```

Then generate your new project:

```bash
yo up
```

## Getting started

The script will generate a Typescript boilerplate based on [Vite.js](https://vitejs.dev/) and with a default example folder (for testing) and a src folder.

Of course, you will need to adapt it to your needs. Most important part will be inside the src folders and package.json folder.

Example with this package : [https://github.com/uptoolkit/up-react](https://github.com/uptoolkit/up-react).

## Publishing your package

When you will publish your package, you will need to define the dependencies that you don't want to be exported with your script. See the documentation here: [https://vitejs.dev/guide/build.html#library-mode](https://vitejs.dev/guide/build.html#library-mode).

There is also a little script helper to publish directly your package.

````bash
cd YourPackageRootFolder
bash publish.sh
````

## License

MIT © [danielsum](https://www.uptoolkit.com)

[npm-image]: https://badge.fury.io/js/generator-up.svg
[npm-url]: https://npmjs.org/package/generator-up
[travis-image]: https://travis-ci.com/uptoolkit/generator-up.svg?branch=master
[travis-url]: https://travis-ci.com/uptoolkit/generator-up
[daviddm-image]: https://david-dm.org/uptoolkit/generator-up.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/uptoolkit/generator-up
