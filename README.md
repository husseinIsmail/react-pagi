# react-pagi
A simple React pagination component.

Give me this:
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
Use me like this:
```
import Pagination from '@react-pagi';

<Pagination pageLinks={pageLinks} />
```

And you will get this:

![demo screenshot](https://github.com/husseinIsmail/react-pagi/blob/main/public/demo-screenshot.png?raw=true)

Throw me in any container and I'll manage to be centered.

### Description

- The react-pagi component takes an array of sub routes for your paginated content and displays it as numbered links.

- It renders a placeholder wherever there's more than 2 numbers ahead to the active element page or the last one.

- The active page element is detected by checking the current pathname in the browser.

- The arrows provide Next & Prev functionalities.

- Have 0 dependencies.


### Check out live demo:
[Github Pages react-pagi](https://husseinismail.github.io/react-pagi/)
