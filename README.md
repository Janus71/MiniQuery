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

## 🌐 Keywords

`javascript` `dom` `jquery-alternative` `utility-library` `micro-library` `vanilla-js` `frontend`

## 📄 License

MIT License

---

Built by [@Janus71](https://github.com/Janus71) with ❤️ for developers who want a simpler, focused DOM utility library.

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr><td><code>on(event, callback)</code></td><td>Add event listener to selected elementents.</td><td><pre>$('#button').on('click', () =&gt; alert('Click!'));</pre></td></tr>
<tr><td><code>off(event, callback)</code></td><td>Remove event listener.</td><td><pre>$('#button').off('click', callback);</pre></td></tr>
<tr><td><code>addClass(className)</code></td><td>Add CSS class.</td><td><pre>$('.box').addClass('highlight');</pre></td></tr>
<tr><td><code>removeClass(className)</code></td><td>Remove CSS class.</td><td><pre>$('.box').removeClass('highlight');</pre></td></tr>
<tr><td><code>toggle(className)</code></td><td>Toggle class or visibility.</td><td><pre>$('.box').toggle('active');</pre></td></tr>
<tr><td><code>hasClass(className)</code></td><td>Check if the elementent has the specified class.</td><td><pre>$('.box').hasClass('highlight');</pre></td></tr>
<tr><td><code>text(value)</code></td><td>Get/set textual content.</td><td><pre>$('#title').text('New text');</pre></td></tr>
<tr><td><code>html(value)</code></td><td>Get/set HTML content.</td><td><pre>$('#content').html('<strong>Hello</strong>');</pre></td></tr>
<tr><td><code>val(value)</code></td><td>Get/set input value.</td><td><pre>$('#name').val('Anna');</pre></td></tr>
<tr><td><code>attr(name, value)</code></td><td>Get/set attribute.</td><td><pre>$('img').attr('alt', 'Image description');</pre></td></tr>
<tr><td><code>removeAttr(name)</code></td><td>Remove attribute.</td><td><pre>$('img').removeAttr('alt');</pre></td></tr>
<tr><td><code>prop(name, value)</code></td><td>Get/set property.</td><td><pre>$('#check').prop('checked', true);</pre></td></tr>
<tr><td><code>data(name, value)</code></td><td>Handle data attribute.</td><td><pre>$('.element').data('type', 'info');</pre></td></tr>
<tr><td><code>show(display)</code></td><td>Show elementent.</td><td><pre>$('#box').show();</pre></td></tr>
<tr><td><code>hide()</code></td><td>Hide elementent.</td><td><pre>$('#box').hide();</pre></td></tr>
<tr><td><code>fadeIn(duration)</code></td><td>Fade in with animation.</td><td><pre>$('#info').fadeIn(300);</pre></td></tr>
<tr><td><code>fadeOut(duration)</code></td><td>Fade out with animation.</td><td><pre>$('#info').fadeOut(300);</pre></td></tr>
<tr><td><code>slideToggle(duration)</code></td><td>Toggle slide animation.</td><td><pre>$('#menu').slideToggle(300);</pre></td></tr>
<tr><td><code>append(content)</code></td><td>Append content to the end.</td><td><pre>$('#list').append('<li>Item</li>');</pre></td></tr>
<tr><td><code>prepend(content)</code></td><td>Prepend content to the beginning.</td><td><pre>$('#list').prepend('<li>First</li>');</pre></td></tr>
<tr><td><code>remove()</code></td><td>Remove elementent from the DOM.</td><td><pre>$('.remove').remove();</pre></td></tr>
<tr><td><code>empty()</code></td><td>Empty the elementent content.</td><td><pre>$('#box').empty();</pre></td></tr>
<tr><td><code>detach()</code></td><td>Detach elementent from DOM for reuse.</td><td><pre>let element = $('#box').detach();</pre></td></tr>
<tr><td><code>clone()</code></td><td>Clone elementent.</td><td><pre>let new = $('#button').clone();</pre></td></tr>
<tr><td><code>siblings()</code></td><td>Get sibling elementents.</td><td><pre>$('#element').siblings();</pre></td></tr>
<tr><td><code>parents()</code></td><td>Get parent elementents.</td><td><pre>$('#element').parents();</pre></td></tr>
<tr><td><code>next()</code></td><td>Next sibling elementent.</td><td><pre>$('#element').next();</pre></td></tr>
<tr><td><code>prev()</code></td><td>Previous sibling elementent.</td><td><pre>$('#element').prev();</pre></td></tr>
<tr><td><code>first()</code></td><td>Get first elementent.</td><td><pre>$('.element').first();</pre></td></tr>
<tr><td><code>last()</code></td><td>Get last elementent.</td><td><pre>$('.element').last();</pre></td></tr>
<tr><td><code>filter(callback)</code></td><td>Filter elementents based on condition.</td><td><pre>$('li').filter((el, i) =&gt; i % 2 === 0);</pre></td></tr>
<tr><td><code>not(selector)</code></td><td>Exclude elementents matching selector.</td><td><pre>$('div').not('.active');</pre></td></tr>
<tr><td><code>eq(index)</code></td><td>Select elementent by index.</td><td><pre>$('li').eq(2);</pre></td></tr>
<tr><td><code>find(selector)</code></td><td>Find child elementents.</td><td><pre>$('#nav').find('a');</pre></td></tr>
<tr><td><code>closest(selector)</code></td><td>Closest matching parent.</td><td><pre>$('input').closest('form');</pre></td></tr>
<tr><td><code>each(callback)</code></td><td>Iterate over each elementent.</td><td><pre>$('p').each((el, i) =&gt; console.log(el));</pre></td></tr>
<tr><td><code>is(selector)</code></td><td>Check elementent matching selector.</td><td><pre>$('#check').is(':checked');</pre></td></tr>
<tr><td><code>focus()</code></td><td>Set focus.</td><td><pre>$('#name').focus();</pre></td></tr>
<tr><td><code>blur()</code></td><td>Remove focus.</td><td><pre>$('#name').blur();</pre></td></tr>
<tr><td><code>scrollTop(value)</code></td><td>Set vertical scroll.</td><td><pre>$(window).scrollTop(100);</pre></td></tr>
<tr><td><code>scrollLeft(value)</code></td><td>Set horizontal scroll.</td><td><pre>$(window).scrollLeft(50);</pre></td></tr>
<tr><td><code>height(value)</code></td><td>Get/set height.</td><td><pre>$('#box').height(200);</pre></td></tr>
<tr><td><code>width(value)</code></td><td>Get/set width.</td><td><pre>$('#box').width(300);</pre></td></tr>
<tr><td><code>serialize()</code></td><td>Serialize form data to URL encoding.</td><td><pre>let data = $('form').serialize();</pre></td></tr>
<tr><td><code>wrap(elementent)</code></td><td>Wrap the selected elementent with new HTML.</td><td><pre>$('.box').wrap(elementent);</pre></td></tr>
<tr><td><code>unwrap(elementent)</code></td><td>Remove the parent but keep the child.</td><td><pre>$('.box').unwrap();</pre></td></tr>
<tr><td><code>toggleClass(value)</code></td><td>Toggle the given class on the elementent.</td><td><pre>$('.box').toggleClass('active');</pre></td></tr>
<tr><td><code>css(drop, value)</code></td><td>Get/set CSS styles.</td><td><pre>
        $('.box').css({
            color: 'white',
            backgroundColor: 'black',
            padding: '10px'
          });
            const color = $('.box').css('color');
            console.log('Text color:', color);
            </pre></td></tr>
<tr><td><code>cssVar(value)</code></td><td>Get/set CSS variables.</td><td>
<pre>
                Querying a single variable:
                const color = $(':root').cssVar('--main-color');
        
                Setting a single variable:
                $('body').cssVar('--main-color', '#00f');
        
                To set multiple variables at once:
                $('body').cssVar({
                    '--main-color': '#0f0',
                    '--font-size': '18px'
                  });
        
            </pre>
</td></tr>
<tr><td><code>animate({...}, time);</code></td><td>Animate numeric CSS properties over time.</td><td>
<pre>
                The width of the .box increases to 300px and its transparency decreases to 0.5 in 400 ms:
        
                $('.box').animate({
                width: '300px',
                opacity: 0.5
              }, 400);
            </pre></td></tr>
<tr><td><code>serializeArray()</code></td><td>Return form fields as array of JS objects.</td><td>
<pre>
                const data = $('form').serializeArray();

                console.log(data);
                // [
                //   { name: 'name', value: 'John' },
                //   { name: 'email', value: 'joe@example.com' },
                //   ...
                // ]
            </pre></td></tr>
<tr><td><code>serializeObject()</code></td><td>Return form fields as key-value object.</td><td>
<pre>
                const data = $('form').serializeObject();

                console.log(data);
                // {
                //   name: "John",
                //   email: "joe@example.com",
                //   tags: ["html", "css"]
                // }
        
                can be used:
                JSON.stringify($('form').serializeObject())
            </pre></td></tr>
<tr><td><code>colorAnimate(property = 'backgroundColor', toColor = '#ffffff', duration = 400)</code></td><td>Animate color on given CSS property (e.g. backgroundColor).</td><td>
<pre>
                Changes the backgroundColor to the given color in 600ms:
        
                $('.box').colorAnimate('backgroundColor', '#00ffcc', 600);
        
                Supported formats:
                    #hex, #rrggbb
                    rgb(r,g,b)
                   CSS colors (e.g. "red", "orange") also work because the RGB will be extracted from the canvas
            </pre></td></tr>
<tr><td><code>toggleAttr(name)</code></td><td>Toggle given attribute on elementents.</td><td>
<pre>
                If the button is disabled, it removes it — if not, it adds it:
        
                $('#myButton').toggleAttr('disabled');
            </pre></td></tr>
<tr><td><code>hasAttr(name)</code></td><td>Check if any elementent has the given attribute.</td><td>
<pre>
                 if ($('#myButton').hasAttr('disabled')) {
                    console.log('The button is disabled.');
                  }
            </pre></td></tr>
<tr><td><code>scrollTo(duration = 500) </code></td><td>Smoothly scroll to elementent over duration.</td><td>
<pre>
                This scrolls to the #article element in 700ms:
        
                 $('#article').scrollTo(700);
        
                 They also work together:
                 $('#article')
                    .toggleAttr('aria-expanded')
                    .scrollTo(500);
            </pre></td></tr>
<tr><td><code>ajax({...})</code></td><td>Generic AJAX request.</td><td><pre>
$.ajax({
  url: '/api',
  method: 'POST',
  data: { name: 'Bob' }
});</pre></td></tr>
<tr><td><code>get(url, params)</code></td><td>Simple GET request.</td><td><pre>$.get('/data', { id: 1 });</pre></td></tr>
<tr><td><code>post(url, data)</code></td><td>Simple POST request.</td><td><pre>    $.post('url', {
                key1: 'value1',
                key2: 'value2'
            })
            .then(data =&gt; {
                console.log('Server response:', data);
            })
            .catch(error =&gt; {
                console.error('AJAX error:', error);
            });</pre></td></tr>
<tr><td><code>ready(callback)</code></td><td>Run function on DOM ready.</td><td><pre>$.ready(() =&gt; console.log('Ready!'));</pre></td></tr>
<tr><td><code>reload(force)</code></td><td>Reload page.</td><td><pre>$.reload();</pre></td></tr>
<tr><td><code>redirect(url)</code></td><td>Redirect to new URL.</td><td><pre>$.redirect('/login');</pre></td></tr>
</tbody>
</table>

