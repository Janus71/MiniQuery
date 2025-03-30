# MiniQuery

**MiniQuery** is a lightweight, extensible, jQuery-inspired DOM utility library built with pure JavaScript.  
It provides a familiar syntax and powerful features without the overhead of larger libraries.

## 🚀 Features

- Easy DOM selection and manipulation
- Class, attribute, and style management
- Event handling (`on`, `off`, `trigger`)
- Animation helpers (`fadeIn`, `fadeOut`, `slideToggle`, `scrollTo`, `animate`, `colorAnimate`)
- Form utilities: `.serialize()`, `.serializeArray()`, `.serializeObject()`
- AJAX shortcuts: `$.ajax()`, `$.get()`, `$.post()`
- Utility functions: `wrap`, `unwrap`, `scrollTo`, `toggleAttr`, `cssVar`, etc.
- Chainable API just like jQuery
- No dependencies – works with vanilla JS

## 📦 Getting Started

Include it in your HTML:

```html
<script src="miniquery-2.0.min.js"></script>
```

Use it like jQuery:

```javascript
$('.box').addClass('highlight').fadeIn(400);
$('#form').on('submit', e => {
  e.preventDefault();
  const data = $('#form').serializeObject();
  console.log(data);
});
```

## 📘 Documentation

Check the [examples and usage table](docs/table.html) for a full overview of methods, descriptions and code snippets.

## 🧩 CDN (optional)

You can also serve it via CDN if you host it somewhere, or copy it to your public assets.

<!-- Include MiniQuery via jsDelivr CDN -->

```html
<script src="https://cdn.jsdelivr.net/gh/Janus71/MiniQuery/miniquery-2.0.min.js"></script>
```

CDN URL (direct link):  
https://cdn.jsdelivr.net/gh/Janus71/MiniQuery/miniquery-2.0.min.js

## 🌐 Keywords

`javascript` `dom` `jquery-alternative` `utility-library` `micro-library` `vanilla-js` `frontend`

## 🔧 API Overview

MiniQuery provides a wide range of DOM utilities, including:

### Selection and Traversal

- `$(selector)`
- `.find(selector)`
- `.closest(selector)`
- `.parents()`, `.siblings()`, `.next()`, `.prev()`, `.first()`, `.last()`

### Class and Style

- `.addClass(name)`
- `.removeClass(name)`
- `.toggleClass(name)`
- `.hasClass(name)`
- `.css(prop, value)` / `.css({})`
- `.cssVar('--name', value)`

### DOM Manipulation

- `.html()`, `.text()`, `.val()`
- `.attr()`, `.removeAttr()`, `.prop()`, `.data()`, `.hasAttr()`
- `.append()`, `.prepend()`, `.wrap()`, `.unwrap()`, `.remove()`, `.empty()`, `.clone()`, `.detach()`

### Events

- `.on(event, callback)`
- `.off(event, callback)`
- `.trigger(event)`

### Forms

- `.serialize()`
- `.serializeArray()`
- `.serializeObject()`

### Animation

- `.fadeIn(duration)`
- `.fadeOut(duration)`
- `.slideToggle(duration)`
- `.animate({...}, duration)`
- `.colorAnimate(property, toColor, duration)`
- `.scrollTo(duration)`

### AJAX

- `$.ajax({ ... })`
- `$.get(url, params)`
- `$.post(url, data)`

### Utilities

- `$.ready(callback)`
- `$.reload()`
- `$.redirect(url)`

## 📁 Files

| File                  | Description                    |
|-----------------------|--------------------------------|
| `miniquery-2.0.js`    | Full source with comments      |
| `miniquery-2.0.min.js`| Minified version for production|

## 📄 License

MIT License

---

Built by [@Janus71](https://github.com/Janus71) with ❤️ for developers who want a simpler, focused DOM utility library.


