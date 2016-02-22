# Contributing

<br>

## Table of contents

1. [Found a bug?](#found-a-bug)
2. [Need a feature?](#need-a-feature)
3. [Want to contribute by writing code?](#want-to-contribute-by-writing-code)

<br>

## Found a bug?

That's great. If you find something that doesn't work as expected or you see some errors being thrown, please take a moment to enter a new issue into our [GitHub Issue Tracker](https://github.com/dominique-mueller/burgerlicious/issues).

In order to make the issue more informative you might add some of the following information:

- Steps to reproduce the problem
- Details about operating system & browser you're using
- Include screenshots (maybe also of the browser dev tools, e.g. the console)

When opening a new issue, a template will be presented to you. Please try to stick to this template but in some cases you may change or extend the issue.

<br>

## Need a feature?

Well, the project isn't finished. A project is never finished. So if you find yourself needing a feature that doesn't exist yet, you can also add a feature request in our [GitHub Issue Tracker](https://github.com/dominique-mueller/burgerlicious/issues).

<br>

## Want to contribute by writing code?

That's awesome. Please do. You can totally update code or even write new code.

### Code quality rules

- Comment your code (if necessary)
- Please use a strict 120 character per line limit
- Please align your code style to the existing one
- The code orients itself to [this CSS styleguide](https://github.com/mdo/code-guide) as well as [this JavaScript styleguide](https://github.com/estelle/javascript)
- Releases are always based on [semantic versioning](https://github.com/mojombo/semver/blob/master/semver.md)

### Git rules

We're following the strict concept of "Git Flow". Learn more about how the branching model under Git Glow works [with this cheatcheet](http://danielkummer.github.io/git-flow-cheatsheet/) or on other places in the internet. Git Flow operations should be part of you git installation per default.

### Setting up the development environment

#### NodeJS

Before continuing please make sure you have [NodeJS](https://nodejs.org/en/) installed as it is required for running Gulp. You can find the install instructions of NodeJS for your operating system [right here](https://nodejs.org/en/download/).

#### Gulp

In this project we're using the popular task runner [Gulp](http://gulpjs.com/) to automate development tasks like transpiling, formating, validating and minifiying CSS and JavaScript files. You can install Gulp and all the necessary plugins by simply opening your command line, navigating to the main project folder and running `npm install` in your command line.

You also may need to install Gulp as well as [Babel](https://babeljs.io/) globally on your machine in order to make Gulp work properly. To do that you need to run `npm install -g gulp@3.9.x babel-core@6.5.x babel-preset-es2015@6.5.x` in your command line.

#### Gulp tasks

During development you can use the following Gulp tasks via the command line:

- `gulp build`<br>is the main build task. It does everything, from transpiling over formatting and linting to minimizing. This task manipulates the files in the `src` as well as creates / updates files in the `build` directory.

- `gulp codecheck`<br>is the linting and formatting part of the build process. This task only manipulates the files in the `src` directory.

#### Travis CI

We're using [Travis CI](https://travis-ci.org/) for Continuous Integration as well as Continuous Deployment. You don't need to install of configure anything for that. Travis CI is responsible for:

- Everytime code gets pushed into the "develop" or a "release/..." branch, Travis will run the Gulp build process and creates the `build` folder with all its content.
- Everytime a new version gets released (with a tag on master branch only), Travis will publish the new version automatically on NPM

You can take a look at all the Travis CI build [on this page](https://travis-ci.org/dominique-mueller/burgerlicious) without the need to register / login.
