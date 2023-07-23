toLine = (str) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};

toHump = (str) => {
  return str.replace(/_(\w)/g, (_, l) => {
    return l.toUpperCase();
  });
};

console.log(toLine("BestWishes"));
console.log(toHump("best_rubbish_list"));
strArrNum = (para) => {
  let arr = [];
  Array.isArray(para) ? (arr = para) : (arr = para.split(""));
  return arr.reduce((p, v) => {
    if (p[v]) {
      p[v] += 1;
    } else {
      p[v] = 1;
    }
    return p;
  }, {});
};
