# Markdown Previewer

This is a simple React powered app that lets you live preview for Github-flavored markdown in the browser.  

## [Live demo](https://markdown-previewer-bxaruqjxby.now.sh/)

## Installation

Before trying to run the project, make sure to initialize the folder by running ```npm install```.
This will take care of install all the project dependencies.  
After this you can run ```npm start``` to run the dev server locally which will be available at ```localhost:3000```.  

## Project Structure

```
.
├── package.json
├── public
│   └── index.html
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   ├── MarkdownAnalyzer.js
    │   ├── markdownDummyInput.js
    │   └── MarkdownOutput.js
    └── index.js
```
## Deployment

I have added the ability to deploy the app if you'd like to see it running on somewhere other than localhost.

It's using [Now](https://zeit.co/now) and the [serve](https://github.com/zeit/serve) package to make a simple
deployment. To install now, run ```npm install -g now```. After that simply run ```now``` from the root of the project.