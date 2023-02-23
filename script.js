let yearOfBirth = Number(prompt("Введіть рік народження:"));
let city = prompt("Введіть одне з трьох міст:", "Київ,Вашингтон,Лондон");
let favoriteSport = prompt("Введіть улюблений вид спорту:","футбол,баскетбол,волейбол");

if (yearOfBirth === null || city === null || favoriteSport === null) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) ${yearOfBirth ? "" : "рік народження"}${city ? "" : "місто"}${favoriteSport ? "" : "вид спорту"}`);

// Додав таку перевірку
} else if (yearOfBirth < 0) {
  alert("Оновіть сторінку та введіть коректний рік народження");
// Додав таку перевірку
 
} else {

  let age = 2023 - yearOfBirth;

  let message = `Ваш вік: ${age}\n`;
  if (city === "Київ") {
    message += `Ти живеш у столиці України.\n`;
  } else if (city === "Вашингтон") {
    message += `Ти живеш у столиці США.\n`;
  } else if (city === "Лондон") {
    message += `Ти живеш у столиці Великої Британії.\n`;
  } else {
    message += `Ти живеш у місті ${city}.\n`;
  }

  if (favoriteSport === "футбол") {
    message += "Круто! Хочеш стати Ліонелем Мессі?";
  } else if (favoriteSport === "баскетбол") {
    message += "Круто! Хочеш стати Леброном Джеймсом?";
  } else if (favoriteSport === "волейбол") {
    message += "Круто! Хочеш стати Юджі Нішідою?";
  }

  alert(message);
}
