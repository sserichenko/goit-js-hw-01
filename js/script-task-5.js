const china = "китай";   
let chinaPrice = 100;
const chili = "чили";
let chiliPrice = 250;
const australia = "австралия";
let australiaPrice = 170;
const india = "индия";  
let indiaPrice = 80;
const jamaika = "ямайка"; 
let jamaikaPrice = 120;

let country = prompt("Введите название Вашей страны");
country = country.toLowerCase();
console.log(country);

switch(country) {
    case "китай":{
      alert(`Доставка в ${china.toUpperCase()} будет стоить ${chinaPrice} кредитов`);
      break;
    }
    case "чили":{
      alert(`Доставка в ${chili.toUpperCase()} будет стоить ${chiliPrice} кредитов`);
      break;
    }
    case "австралия":{
      alert(`Доставка в ${australia.toUpperCase()} будет стоить ${australiaPrice} кредитов`);
      break;
    }
    case "индия":{
      alert(`Доставка в ${india.toUpperCase()} будет стоить ${indiaPrice} кредитов`);
      break;
    }
    case "ямайка":{
      alert(`Доставка в ${jamaika.toUpperCase()} будет стоить ${jamaikaPrice} кредитов`);
      break;
    }
    default:
      alert('В Вашей стране доставка не доступна')
}
