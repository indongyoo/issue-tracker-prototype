!function() {
  const curry2 = f => (..._) => _.length < 2 ? (..._2) => f(..._, ..._2) : f(..._);

  const pipe = (...fs) => arg => reduce((arg, f) => f(arg), arg, fs);

  const go = (arg, ...fs) => reduce((arg, f) => f(arg), arg, fs);

  function *valuesIterObj(obj) {
    if (!obj) return;
    for (const key in obj) yield obj[key];
  }

  function *entriesIterObj(obj) {
    if (!obj) return;
    for (const key in obj) yield [key, obj[key]];
  }

  function iterColl(coll) {
    return coll && coll[Symbol.iterator] ?
      coll[Symbol.iterator]() :
      valuesIterObj(coll);
  }

  const reduce = curry2((f, acc, coll) => {
    const iter = iterColl(coll === undefined ? acc : coll);
    acc = coll === undefined ? iter.next().value : acc;
    for (const val of iter) acc = f(acc, val);
    return acc;
  });

  const find = curry2((f, coll) => {
    for (var val of coll) if (f(val)) return val;
  });

  const push = curry2((arr, ...items) => (arr.push(...items), arr));

  const map = curry2((f, coll) =>
    reduce((arr, v) => go(v, f, push(arr)), [], coll)
  );

  const set = (obj, k, v) => typeof k == 'string' ? (obj[k] = v, obj) : set(obj, ...k);

  const baseExtend = set => (target, ...objs) =>
    reduce(reduce(set), target, map(entriesIterObj, objs));

  const extend = baseExtend(set);
  const defaults = baseExtend((target, [k, v]) => target.hasOwnProperty(k) ? target : set(target, k, v));

  const method = name => (obj, ..._) => obj[name](..._);

  window.Functional = {
    curry2, pipe, go,
    map, reduce, find,
    iterColl, valuesIterObj, entriesIterObj,
    set, extend, defaults,
    method
  };
  Object.assign(window, window.Functional);
} ();
