'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to Up Package generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'username',
        message: 'What\'s your name ?',
        store: true
      },
      {
        type: 'list',
        name: 'template',
        message: 'What type of package you want to create ?',
        choices: [
          'react-component',
          'react-antd-component',
        ],
        default: "react-component",
        store: true
      },
      {
        type: 'input',
        name: 'package',
        message: 'What\'s the complete name of your package in npm ?'
      },
      {
        type: 'input',
        name: 'component',
        message: 'What\'s the name of your main component ?',
        default: "MyComponent"
      },
      {
        type: 'input',
        name: 'vendor',
        message: 'What\'s your github nickname ?',
        store: true
      },
      {
        type: 'input',
        name: 'target',
        message: 'Where do you want to put this package ?',
        default: ".",
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.props.template}/`),
      this.destinationPath(`${this.props.target}/${this.props.package}`),
      this.props
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
