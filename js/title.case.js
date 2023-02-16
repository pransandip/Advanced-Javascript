import _ from "lodash";

var result = "this is very interesting".replace(/\b[a-z]/g, (x) =>
  x.toUpperCase()
);
console.log(result);

console.log(`${"sandy ry".replace(/\b[a-z]/g, (x) => x.toUpperCase())}`);

console.log(_.startCase(_.camelCase("sandy ry")));

console.log(
  "This string ShouLD be ALL in title CASe"
    .split(" ")
    .map(_.capitalize)
    .join(" ")
);
