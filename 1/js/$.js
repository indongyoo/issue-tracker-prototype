!function() {
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

  $.append = curry2((parent, child) => parent.appendChild(child));

  $.addEvent = (target, eventName, f) => target.addEventListener(eventName, f);

  $.on = function(delegateTarget, eventName, sel, f) {
    if (arguments.length == 3) return delegateTarget => $.on(delegateTarget, ...arguments);

    delegateTarget.addEventListener(eventName, function(e) {
      const currentTarget = find(el => el.contains(e.target), $.findAll(sel, delegateTarget));
      if (currentTarget) {
        // TODO 중복 제거
        const newEvent = {};
        for (const key in e) newEvent[key] = e[key];

        Object.assign(newEvent, { originalEvent: e, currentTarget, delegateTarget });
        f(newEvent);
      }
    });
  };

  window.$ = $;
} ();