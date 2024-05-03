"Use strict"

const numberOfseries = prompt("Nechata  serial ko'rgansiz?", "");

seriasDB = {
    count: numberOfseries,
    series: {},
    actors:{},
    genres:[],
    private: false,
}

  for(let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz?"),
  b = prompt("Necha baxo berasiz?");
       
  if (a != null && b != null && a != "" && b != "") {
    seriasDB.series[a]= b;
    console.log("Done");
  } else {
    console.log("error");  
  }
   
  i--;
           
  }

console.log(seriasDB);

