!function() {
  const curry2 = f => (..._) => _.length < 2 ? (..._2) => f(..._, ..._2) : f(..._);

  const pipe = (...fs) => arg => reduce((arg, f) => f(arg), arg, fs);

  const go = (arg, ...fs) => reduce((arg, f) => f(arg), arg, fs);

  const reduce = curry2((f, acc, coll) => {
    for (const val of coll) acc = f(acc, val);
    return acc;
  });

  const find = curry2((f, coll) => {
    for (var val of coll) if (f(val)) return val;
  });

  Object.assign(window, {
    curry2, pipe, go, reduce, find
  });
} ();
