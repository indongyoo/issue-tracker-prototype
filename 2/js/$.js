!function() {
  const { curry2, find, defaults, method } = Functional;

  const baseSel = method => (sel, parent = document) => parent[method](sel);

  const $ = baseSel('querySelector');
  $.find = curry2($);
  $.all = baseSel('querySelectorAll');
  $.findAll = curry2($.all);

  $.el = html => {
    const parent = document.createElement('div');
    parent.innerHTML = html;
    return parent.children.length == 1 ? parent.children[0] : parent.children;
  };

  $.append = curry2(method('appendChild'));

  const addEvent = method('addEventListener');

  $.on = function(el, eventName, sel, f) {
    if (typeof el == 'string') return el => $.on(el, ...arguments);
    if (typeof sel != 'string') return addEvent(...arguments);

    el.addEventListener(eventName, e => go(
      el,
      $.findAll(sel),
      find(el => el.contains(e.target)),
      ct => ct && f(defaults({ originalEvent: e, currentTarget: ct, delegateTarget: el }, e))
    ));
  };

  window.$ = $;
} ();