const people = [
    { id1: 1, name1: "Alex" },
    { id2: 2, name2: "Roger" },
    { id3: 3, name3: "Sally" },
];

const data = people.reduce((a, c) => Object.assign(a, c), {})
console.log(data)