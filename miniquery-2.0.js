/**
* miniQuery Extended v1.0
* A jQuery-like, extensible, native JavaScript-based DOM helper library
* Includes basic methods + extra traversal, size, scroll and input helpers
*/

function $(selector) {
    const elements =
            typeof selector === 'string'
            ? document.querySelectorAll(selector)
            : selector instanceof Node
            ? [selector]
            : selector instanceof NodeList || Array.isArray(selector)
            ? Array.from(selector)
            : [];

    return {
        // Event handling

        // Add event listener to elements
        on(event, callback) {
            elements.forEach(el => el.addEventListener(event, callback));
            return this;
        },

        // Remove event listener from elements
        off(event, callback) {
            elements.forEach(el => el.removeEventListener(event, callback));
            return this;
        },

        // Manually trigger event
        trigger(eventName) {
            elements.forEach(el => el.dispatchEvent(new Event(eventName, {bubbles: true})));
            return this;
        },

        // Class handling

        // Add class to elements
        addClass(className) {
            elements.forEach(el => el.classList.add(className));
            return this;
        },

        // Remove class from elements
        removeClass(className) {
            elements.forEach(el => el.classList.remove(className));
            return this;
        },

        // Toggle class or element visibility
        toggle(className) {
            if (className) {
                elements.forEach(el => el.classList.toggle(className));
            } else {
                elements.forEach(el => {
                    el.style.display = getComputedStyle(el).display === 'none' ? 'block' : 'none';
                });
            }
            return this;
        },

        // Check if element has the given class
        hasClass(className) {
            return [...elements].some(el => el.classList.contains(className));
        },

        // Content handling

        // Get or set text content
        text(value) {
            if (value === undefined)
                return elements[0]?.textContent;
            elements.forEach(el => (el.textContent = value));
            return this;
        },

        // Get or set HTML content
        html(value) {
            if (value === undefined)
                return elements[0]?.innerHTML;
            elements.forEach(el => (el.innerHTML = value));
            return this;
        },

        // Get or set input value
        val(value) {
            if (value === undefined)
                return elements[0]?.value;
            elements.forEach(el => (el.value = value));
            return this;
        },

        // Get or set attribute
        attr(name, value) {
            if (value === undefined)
                return elements[0]?.getAttribute(name);
            elements.forEach(el => el.setAttribute(name, value));
            return this;
        },

        // Remove attribute
        removeAttr(name) {
            elements.forEach(el => el.removeAttribute(name));
            return this;
        },

        // Get or set property
        prop(name, value) {
            if (value === undefined)
                return elements[0]?.[name];
            elements.forEach(el => (el[name] = value));
            return this;
        },

        // Get or set data attribute
        data(name, value) {
            if (value === undefined)
                return elements[0]?.dataset?.[name];
            elements.forEach(el => (el.dataset[name] = value));
            return this;
        },

        // Display

        // Show element
        show(display = 'block') {
            elements.forEach(el => (el.style.display = display));
            return this;
        },

        // Hide element
        hide() {
            elements.forEach(el => (el.style.display = 'none'));
            return this;
        },

        // Fade in
        fadeIn(duration = 300) {
            elements.forEach(el => {
                el.style.opacity = 0;
                el.style.display = 'block';
                el.style.transition = `opacity ${duration}ms ease`;
                requestAnimationFrame(() => (el.style.opacity = 1));
            });
            return this;
        },

        // Fade out
        fadeOut(duration = 300) {
            elements.forEach(el => {
                el.style.transition = `opacity ${duration}ms ease`;
                el.style.opacity = 0;
                setTimeout(() => (el.style.display = 'none'), duration);
            });
            return this;
        },

        // Slide toggle animation
        slideToggle(duration = 300) {
            elements.forEach(el => {
                const isHidden = getComputedStyle(el).maxHeight === '0px';
                el.style.transition = `max-height ${duration}ms ease`;
                el.style.overflow = 'hidden';
                if (isHidden) {
                    el.style.display = 'block';
                    el.style.maxHeight = el.scrollHeight + 'px';
                } else {
                    el.style.maxHeight = '0px';
                    setTimeout(() => (el.style.display = 'none'), duration);
                }
            });
            return this;
        },

        // DOM manipulation

        // Append content
        append(content) {
            elements.forEach(el => {
                if (typeof content === 'string') {
                    el.insertAdjacentHTML('beforeend', content);
                } else if (content instanceof HTMLElement) {
                    el.appendChild(content);
                }
            });
            return this;
        },

        // Prepend content
        prepend(content) {
            elements.forEach(el => {
                if (typeof content === 'string') {
                    el.insertAdjacentHTML('afterbegin', content);
                } else if (content instanceof HTMLElement) {
                    el.insertBefore(content, el.firstChild);
                }
            });
            return this;
        },

        // Remove elements
        remove() {
            elements.forEach(el => el.remove());
            return this;
        },

        // Empty element content
        empty() {
            elements.forEach(el => (el.innerHTML = ''));
            return this;
        },

        // Detach element for reuse
        detach() {
            const detached = [];
            elements.forEach(el => {
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                    detached.push(el);
                }
            });
            return $(detached);
        },

        // Clone elements
        clone() {
            const clones = [...elements].map(el => el.cloneNode(true));
            return $(clones.length === 1 ? clones[0] : clones);
        },

        // DOM traversal

        // Get sibling elements
        siblings() {
            const sibs = [];
            elements.forEach(el => {
                [...el.parentNode.children].forEach(child => {
                    if (child !== el && !sibs.includes(child)) {
                        sibs.push(child);
                    }
                });
            });
            return $(sibs);
        },

        // Get parent elements
        parents() {
            const result = [];
            elements.forEach(el => {
                let parent = el.parentElement;
                while (parent) {
                    if (!result.includes(parent)) {
                        result.push(parent);
                    }
                    parent = parent.parentElement;
                }
            });
            return $(result);
        },

        // Get next sibling
        next() {
            const nextElements = [...elements].map(el => el.nextElementSibling).filter(Boolean);
            return $(nextElements);
        },

        // Get previous sibling
        prev() {
            const prevElements = [...elements].map(el => el.previousElementSibling).filter(Boolean);
            return $(prevElements);
        },

        // Select first element
        first() {
            return $(elements[0]);
        },

        // Select last element
        last() {
            return $(elements[elements.length - 1]);
        },

        // Filtering and searching

        // Filter elements using callback
        filter(callback) {
            const filtered = [...elements].filter((el, i) => callback(el, i));
            return $(filtered);
        },

        // Exclude elements by selector
        not(selector) {
            const filtered = [...elements].filter(el => !el.matches(selector));
            return $(filtered);
        },

        // Select element by index
        eq(index) {
            return $(elements[index]);
        },

        // Find child elements
        find(selector) {
            let found = [];
            elements.forEach(el => found.push(...el.querySelectorAll(selector)));
            return $(found);
        },

        // Find closest matching parent
        closest(selector) {
            const matches = [];
            elements.forEach(el => {
                const match = el.closest(selector);
                if (match && !matches.includes(match)) {
                    matches.push(match);
                }
            });
            return $(matches);
        },

        // Iterate over elements
        each(callback) {
            elements.forEach((el, i) => callback(el, i));
            return this;
        },

        // Check element matches selector
        is(selector) {
            if (!elements.length)
                return false;
            const el = elements[0];
            if (selector.startsWith(':')) {
                switch (selector) {
                    case ':checked':
                        return el.checked === true;
                    case ':disabled':
                        return el.disabled === true;
                    case ':visible':
                        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
                    default:
                        return false;
                }
            }
            return el.matches(selector);
        },

        // Focus first element
        focus() {
            elements[0]?.focus();
            return this;
        },

        // Remove focus
        blur() {
            elements[0]?.blur();
            return this;
        },

        // Get or set scrollTop (vertical)
        scrollTop(value) {
            if (value === undefined)
                return elements[0]?.scrollTop;
            elements.forEach(el => (el.scrollTop = value));
            return this;
        },

        // Get or set scrollLeft (horizontal)
        scrollLeft(value) {
            if (value === undefined)
                return elements[0]?.scrollLeft;
            elements.forEach(el => (el.scrollLeft = value));
            return this;
        },

        // Get or set height
        height(value) {
            if (value === undefined)
                return elements[0]?.offsetHeight;
            elements.forEach(el => (el.style.height = typeof value === 'number' ? `${value}px` : value));
            return this;
        },

        // Get or set width
        width(value) {
            if (value === undefined)
                return elements[0]?.offsetWidth;
            elements.forEach(el => (el.style.width = typeof value === 'number' ? `${value}px` : value));
            return this;
        },

        // Serialize form data to URL-encoded string
        serialize() {
            if (elements.length === 0 || elements[0].nodeName !== 'FORM')
                return '';
            return new URLSearchParams(new FormData(elements[0])).toString();
        },

        // Wrap element with new HTML
        wrap(wrapperHTML) {
            elements.forEach(el => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = wrapperHTML.trim();

                const firstChild = wrapper.firstElementChild;
                if (!firstChild)
                    return;

                const parent = el.parentNode;
                parent.insertBefore(firstChild, el);
                firstChild.appendChild(el);
            });

            return this;
        },

        // Unwrap element from its parent
        unwrap() {
            elements.forEach(el => {
                const parent = el.parentNode;
                if (!parent || parent === document.body)
                    return;

                const grandparent = parent.parentNode;
                grandparent.insertBefore(el, parent);
                parent.remove();
            });

            return this;
        },

        // Toggle a class on elements depending on its presence
        toggleClass(className, force = undefined) {
            elements.forEach(el => {
                if (force === true) {
                    el.classList.add(className);
                } else if (force === false) {
                    el.classList.remove(className);
                } else {
                    el.classList.toggle(className);
                }
            });
            return this;
        },

        // Get or set CSS style
        css(prop, value) {
            if (typeof prop === 'string' && value === undefined) {
                // Query
                return elements[0] ? getComputedStyle(elements[0])[prop] : undefined;
            }

            elements.forEach(el => {
                if (typeof prop === 'object') {
                    // Setting multiple styles at once
                    for (let key in prop) {
                        el.style[key] = prop[key];
                    }
                } else if (typeof prop === 'string') {
                    // Setting a single style
                    el.style[prop] = value;
                }
            });

            return this;
        },

        // Get or set CSS custom properties
        cssVar(nameOrObject, value = undefined) {
            // multiple variables at once
            if (typeof nameOrObject === 'object') {
                for (const name in nameOrObject) {
                    if (name.startsWith('--')) {
                        elements.forEach(el => {
                            el.style.setProperty(name, nameOrObject[name]);
                        });
                    }
                }
                return this;
            }

            // Querying a single variable
            if (value === undefined) {
                return elements[0]
                        ? getComputedStyle(elements[0]).getPropertyValue(nameOrObject).trim()
                        : undefined;
            }

            // Setting a single variable
            if (nameOrObject.startsWith('--')) {
                elements.forEach(el => {
                    el.style.setProperty(nameOrObject, value);
                });
            }

            return this;
        },

        // Animate numeric CSS properties over time
        animate(styles, duration = 400) {
            elements.forEach(el => {
                const start = {};
                const end = {};
                const unit = {};

                for (const prop in styles) {
                    const computed = getComputedStyle(el)[prop];
                    const match = computed.match(/^([\d.]+)([a-z%]*)$/i);

                    if (match) {
                        start[prop] = parseFloat(match[1]);
                        unit[prop] = match[2] || '';
                        end[prop] = parseFloat(styles[prop]);
                    }
                }

                const startTime = performance.now();

                function step(now) {
                    const progress = Math.min((now - startTime) / duration, 1);

                    for (const prop in styles) {
                        const value = start[prop] + (end[prop] - start[prop]) * progress;
                        el.style[prop] = value + unit[prop];
                    }

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                }

                requestAnimationFrame(step);
            });

            return this;
        },

        // Return form fields as array of objects
        serializeArray() {
            if (elements.length === 0 || elements[0].nodeName !== 'FORM')
                return [];

            const form = elements[0];
            const result = [];

            Array.from(form.elements).forEach(el => {
                if (!el.name || el.disabled || el.type === 'file' || el.type === 'submit' || el.type === 'button')
                    return;
                if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked)
                    return;

                result.push({
                    name: el.name,
                    value: el.value
                });
            });

            return result;
        },

        // Return form fields as key-value object
        serializeObject() {
            if (elements.length === 0 || elements[0].nodeName !== 'FORM')
                return {};

            const form = elements[0];
            const result = {};

            Array.from(form.elements).forEach(el => {
                if (!el.name || el.disabled || el.type === 'file' || el.type === 'submit' || el.type === 'button')
                    return;
                if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked)
                    return;

                const name = el.name;
                const value = el.value;

                // Multiple fields with the same name (e.g. tags[])
                if (result.hasOwnProperty(name)) {
                    if (!Array.isArray(result[name])) {
                        result[name] = [result[name]];
                    }
                    result[name].push(value);
                } else {
                    result[name] = value;
                }
            });

            return result;
        },

        // Animate color transition on a CSS property
        colorAnimate(property = 'backgroundColor', toColor = '#ffffff', duration = 400) {
            const parseColor = (color) => {
                const ctx = document.createElement('canvas').getContext('2d');
                ctx.fillStyle = color;
                const computed = ctx.fillStyle;

                const m = computed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : [255, 255, 255];
            };

            const toRGB = parseColor(toColor);

            elements.forEach(el => {
                const fromRGB = parseColor(getComputedStyle(el)[property]);
                const startTime = performance.now();

                function step(now) {
                    const progress = Math.min((now - startTime) / duration, 1);
                    const current = fromRGB.map((start, i) =>
                        Math.round(start + (toRGB[i] - start) * progress)
                    );
                    el.style[property] = `rgb(${current.join(',')})`;

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                }

                requestAnimationFrame(step);
            });

            return this;
        },

        // Toggle given attribute on elements
        toggleAttr(name) {
            elements.forEach(el => {
                if (el.hasAttribute(name)) {
                    el.removeAttribute(name);
                } else {
                    el.setAttribute(name, '');
                }
            });
            return this;
        },

        // Check if any element has the given attribute
        hasAttr(name) {
            return [...elements].some(el => el.hasAttribute(name));
        },

        // Smooth scroll to element over given duration
        scrollTo(duration = 500) {
            elements.forEach(el => {
                const top = el.getBoundingClientRect().top + window.pageYOffset;
                const start = window.scrollY;
                const startTime = performance.now();

                function step(now) {
                    const progress = Math.min((now - startTime) / duration, 1);
                    window.scrollTo(0, start + (top - start) * progress);
                    if (progress < 1)
                        requestAnimationFrame(step);
                }

                requestAnimationFrame(step);
            });

            return this;
        }

    };
}

// Global helpers

// DOMContentLoaded event
$.ready = function (callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

// Page reload
$.reload = function (force = false) {
    window.location.reload(force);
};

// Redirect
$.redirect = function (url) {
    window.location.href = url;
};

// AJAX method
$.ajax = function ( {
url,
        method = 'GET',
        data = null,
        headers = {},
        responseType = 'json',
        onSuccess,
        onError
}) {
    method = method.toUpperCase();
    let body = null;
    let contentType = headers['Content-Type'] || 'application/x-www-form-urlencoded';

    if (method === 'GET' && data) {
        const query = new URLSearchParams(data).toString();
        url += (url.includes('?') ? '&' : '?') + query;
    } else if (data) {
        if (contentType === 'application/json') {
            body = JSON.stringify(data);
        } else {
            body = new URLSearchParams(data).toString();
        }
    }

    return fetch(url, {
        method,
        headers: {
            'Content-Type': contentType,
            'X-Requested-With': 'XMLHttpRequest',
            ...headers
        },
        body: method === 'GET' ? null : body
    })
            .then(res => {
                if (!res.ok)
                    throw new Error('Hálózati hiba: ' + res.status);
                return responseType === 'json' ? res.json() : res.text();
            })
            .then(data => {
                if (typeof onSuccess === 'function')
                    onSuccess(data);
                return data;
            })
            .catch(err => {
                if (typeof onError === 'function')
                    onError(err);
                else
                    console.error(err);
            });
};

// For GET requests
$.get = function (url, params = {}) {
    const query = new URLSearchParams(params).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    return fetch(fullUrl, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then(res => {
        if (!res.ok)
            throw new Error('Hiba: ' + res.status);
        return res.json();
    });
};

// For POST requests
$.post = function (url, data = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: new URLSearchParams(data).toString()
    }).then(res => res.json());
};

// Export globally
window.$ = $;