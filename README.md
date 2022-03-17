# A-Frame Showroom Example

Boilerplate for creating WebVR scenes with [A-Frame](https://aframe.io).

Alternatively, check out the [A-Frame Starter on
glitch.com](https://glitch.com/~aframe) for a more interactive way on getting
started.

## Getting Started

There are two easy options for obtaining this A-Frame scene. It's then up to you to make it your own!

### Option 1: run local

- clone project or download zip
- extract /resources/pool/jacuzzi/jacuzzi.zip in same directory (you can overwrite readme.txt)

in console:

    npm install && npm start

select view:
- open vr [__http://localhost:3000/__](http://localhost:3000/)
- configview: [__http://localhost:3000/configview.html__](http://localhost:3000/configview.html)

If you wish to serve the site from a different port:

    PORT=8000 npm start


<hr>

### Option 2: run on web

go to [https://glitch.com/~buttoned-psychedelic-collarbone](https://glitch.com/~buttoned-psychedelic-collarbone)

## Publishing your scene

If you don't already know, GitHub offers free and awesome publishing of static sites through __[GitHub Pages](https://pages.github.com/)__.

To publish your scene to your personal GitHub Pages:

    npm run deploy

And, it'll now be live at __http://`your_username`.github.io/__ :)

<hr>

To know which GitHub repo to deploy to, the `deploy` script first looks at the optional [`repository` key](https://docs.npmjs.com/files/package.json#repository) in the [`package.json` file](package.json) (see [npm docs](https://docs.npmjs.com/files/package.json#repository) for sample usage). If the `repository` key is missing, the script falls back to using the local git repo's remote origin URL (you can run the local command `git remote -v` to see all your remotes; also, you may refer to the [GitHub docs](https://help.github.com/articles/about-remote-repositories/) for more information).

<hr>

## License

This program is free software and is distributed under an [MIT License](LICENSE).
