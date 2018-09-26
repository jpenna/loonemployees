# Employees List

Test App for MCON.

## Get Started

```
npm start
```

Start listening on http://localhost:5006

```
npm test
```

Run and watch tests

```
npm run coverage
```

Run test coverage

```
npm run build
```

Build project to /build folder

## The application

This is a simple application built with `React.js` and `Bulma` style framework, bundled and transpiled with `Webpack` and `Babel`.

For tests it was used `mocha`, `chai`, `sinon` and `enzyme` (lib to render React components).

### Requirements

#### Function Requirements

> 1. Each item has an employee name and bio content.

OK (+ optional `image`)

> 2. By default, bio content is hidden.

I decided to show a small summary of the bio, just 1 line below the name.

If I was doing only `name` and `bio`, I could have used the `<details>` tag, but I didn't think it would make sense in this case where I am basically showing all the components of the element.

> 3. By clicking on the employee name, it expands/collapses the item&#39;s bio content.

OK (clicking on the `card`)

> 4. Only one item can be expanded at a time (expanding one will collapse the others).

OK

> 5. Additionally by clicking on the content, an action occurs (can be an alert with item data).

Clicking the content changes the background color to a random color.

#### Non-functional Requirements

> 1. Unit tests are used to test the component&#39;s logic.

OK

> 2. Angular JS framework is prefferred. Another JS Framework is fine as well.

React.js. I have worked with Angular 1 and React is better. I didn't bother learning the later versions because React more than suffice for my current needs.

> 3. Readable code is important. A standard for coding style is selected and maintained (eslint/jshint/...). Added descriptive comments where needed.

OK (eslint)

> 4. Use a Git repository (e.g. github) allows to check the history of the project.

OK

> 5. Readme.md is included with a description of the build process, and how to run the unit tests.

OK

### Improvements

Some improvements that could be done:

#### Functionality

- Separate `items.json` from rest of the application. It shouldn't be bundled together, but be a separated file which would be sent on request. This would make editing the employees list easier (any method of separating it using Webpack doesn't make it any better).

#### Tests

- `Istanbul` is calculating the coverage wrong for the `class` components (have to remove the /* istanbul ignore next */). [Github issue](https://github.com/istanbuljs/nyc/issues/374) 


#### Style

- Add border to bio text element on hover
- Handle focus border on employee box click better (don't show give feedback on click)
- Add feedback on hover box (remove if opened)
- Responsive: make better use of the box space on mobile (image is taking the whole column and text is shrank on the right)

#### Deploy

- Add libs for validation and auto-fixing before commits with `husky`, `prettier`...
- Configure Webpack to warn and prevent builds of bad formatted files
