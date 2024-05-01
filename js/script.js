"Use strict"

const numberOfseries = prompt("Nechata  serial ko'rgansiz?", "");

seriasDB = {
    count: numberOfseries,
    series: {},
    actors:{},
    genres:[],
    private: false,
}

const a = prompt("Oxirgi ko'rgan serialingiz?"),
  b = prompt("Necha baxo berasiz?"),
  c = prompt("Oxirgi ko'rgan serialingiz?"),
  d = prompt("Necha baxo berasiz?");

  seriasDB.series[a]= b;
  seriasDB.series[c]= d;

console.log(seriasDB);

