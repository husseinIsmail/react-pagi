# react-pagi
A simple React pagination component.

You provide this:
```
const pageLinks = [
  '/blog',
  '/blog/page/2',
  '/blog/page/3',
  '/blog/page/4',
  '/blog/page/5',
  '/blog/page/6',
  '/blog/page/7',
  '/blog/page/8'
];
```
I provide this:

![demo screenshot](public/demo-screenshot.png)

Throw me in any container and I'll manage to be centered.

### Description

- The react-pagi component takes an array of sub routes for your paginated content and displays it as numbered links.

- It renders a placeholder wherever there's more than 2 numbers ahead to the active element page or the last one.

- The active page element is detected by checking the current pathname in the browser.

- The arrows provide Next & Prev functionalities.

- Have 0 dependencies.
