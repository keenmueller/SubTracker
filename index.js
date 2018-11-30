var services = [
  {
    "name": "Netflix",
    "price": "7.99"
  },
  {
    "name": "Hulu",
    "price": "7.99"
  },
  {
    "name": "Amazon Prime",
    "price": "4.99"
  },
  {
    "name": "Youtube Premium",
    "price": "9.99"
  },
  {
    "name": "Twitch Prime",
    "price": "1.23"
  },
]

var userServices = [];

function loadData() {
  var serviceTable = document.getElementById("all_services");

  for (var i = 0; i < services.length; i++){
    serviceTable.innerHTML += "<tr onclick='addService("+i+")'><td>" + services[i].name + "</td><td>$" + services[i].price + "</td></tr>";
  }
}

function addService(service){
  userServices.push(services[service]);
  var userTable = document.getElementById("user_services");
  userTable.innerHTML = "";
  var totalCost = 0;
  for (var i = 0; i < userServices.length; i++) {
    userTable.innerHTML += "<tr><td>" + userServices[i].name + "</td><td>$" + userServices[i].price + "</td></tr>";
    totalCost += parseFloat(userServices[i].price);
  }
  userTable.innerHTML += "<br /><tr><td>Total</td><td>$" + totalCost + "</td></tr>";
}

function newService(name, price) {
  if (name == "" || price == ""){
    alert("Please enter both a name and price.");
  }
  else
  {
    // alert(name + " " + price);
    var newItem = {
      "name": name,
      "price": price
    }
    services.push(newItem);

    var serviceTable = document.getElementById("all_services");
    serviceTable.innerHTML = "";

    for (var i = 0; i < services.length; i++){
      serviceTable.innerHTML += "<tr onclick='addService("+i+")'><td>" + services[i].name + "</td><td>$" + services[i].price + "</td></tr>";
    }
    var newName = document.getElementById("new_name");
    var newPrice = document.getElementById("new_price");
    newName.value = "";
    newPrice.value = "";
  }
}
