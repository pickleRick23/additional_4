module.exports = function multiply(a, b) {
  if (a == 0 || b == 0) return "0";
  a = a.split("");
  b = b.split("");
  a = a.reverse();
  b = b.reverse();

  if (a.length > b.length) {
    t = a;
    a = b;
    b = t;
  }

  var n = a.length, m = b.length, p = new Array(m * 2);
  for (i = 0; i < p.length; i++) p[i] = 0;

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      p[i + j] += a[i] * b[j];
    }
  }

  for (i = 0; i < p.length; i++) {
    if (p[i] > 9) {
      p[i + 1] += Math.floor(p[i] / 10);
      p[i] = p[i] % 10;
    }
  }

  for (i = p.length - 1; i > 0 && p[i] == 0; i--) p.pop();
  p = p.reverse();
return p.join("");
}
