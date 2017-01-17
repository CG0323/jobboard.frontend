# jobboard.frontend
Angular2 single page application, deployed on Nginx. Users can view the latest job opportunities in a "Car Comparison" way, quickly view the required competencies before openning the detailed job page. Skill columns are customizable. Users can also add/edit skill detecting rules. Some statistic features are also available.

------
## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Source code structure](#source-code-structure)
- [Implementation key points](#implementation-key-points)
- [Deployment key points](#deployment-key-points)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Source code structure
```
|-- jobboard.frontend
    |-- angular-cli.json
    |-- fabfile.py
    |-- karma.conf.js
    |-- package.json
    |-- protractor.conf.js
    |-- README.md
    |-- tslint.json
    |-- src
        |-- favicon.ico
        |-- index.html
        |-- main.ts
        |-- polyfills.ts
        |-- styles.css
        |-- test.ts
        |-- tsconfig.json
        |-- app
        |   |-- app.component.css
        |   |-- app.component.html
        |   |-- app.component.spec.ts
        |   |-- app.component.ts
        |   |-- app.module.ts
        |   |-- app.routes.ts
        |   |-- rxjs-operators.ts
        |   |-- home
        |   |   |-- home.component.css
        |   |   |-- home.component.html
        |   |   |-- home.component.spec.ts
        |   |   |-- home.component.ts
        |   |-- insight
        |   |   |-- insight.component.css
        |   |   |-- insight.component.html
        |   |   |-- insight.component.spec.ts
        |   |   |-- insight.component.ts
        |   |-- job
        |   |   |-- job.component.css
        |   |   |-- job.component.html
        |   |   |-- job.component.spec.ts
        |   |   |-- job.component.ts
        |   |-- shared
        |   |   |-- interfaces.ts
        |   |   |-- services
        |   |   |   |-- data.service.spec.ts
        |   |   |   |-- data.service.ts
        |   |   |-- utils
        |   |       |-- config.service.ts
        |   |       |-- items.service.ts
        |   |-- skill
        |       |-- skill.component.css
        |       |-- skill.component.html
        |       |-- skill.component.spec.ts
        |       |-- skill.component.ts
        |-- assets
        |   |-- .gitkeep
        |   |-- img
        |       |-- system-design.png
        |-- environments
            |-- environment.prod.ts
            |-- environment.ts
```
## Implementation key points

## Deployment key points