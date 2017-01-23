'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

function ConvertDate(str) {

    var re = / [0-9]+/g;
    var result = re[Symbol.match](str);
    var dateLoc=new Date( result[0], result[1], result[2]);
    return dateLoc;
}



//Exo1

function Price()
{
	var date = new Date("2017-01-05");
	var milliseconde = date.getTime();

	var date1 = new Date("2017-01-06");
	var milliseconde2 = date.getTime();
	
	var diff;


	for(var i = 0; i<rentals.length; i++)
	{
		date = new Date(rentals[i].pickupDate).getTime();
		date1 = new Date(rentals[i].returnDate).getTime();
		diff = date1 - date;
		diff = (diff/(1000*3600*24)) + 1;


		for(var j=0; j<cars.length;j++){
			if(rentals[i].carId == cars[j].id )
				rentals[i].price = cars[j].pricePerDay*diff + cars[j].pricePerKm*rentals[i].distance;
		}

		console.log("Le prix de la location est de " + rentals[i].price + " euros");
		
	}
}

//Exo2

function NewPrice()
{
	var date = new Date("2017-01-05");
	var milliseconde = date.getTime();
	//It returns the number of milliseconde since 1970-01-01

	var date1 = new Date("2017-01-06");
	var milliseconde2 = date.getTime();

	var diff;
	
	for(var i = 0; i<rentals.length; i++)
	{
		date = new Date(rentals[i].pickupDate).getTime();
		date1 = new Date(rentals[i].returnDate).getTime();
		diff = date1 - date;
		diff = (diff/(1000*3600*24)) + 1;


		for(var j=0; j<cars.length;j++){
			if(rentals[i].carId == cars[j].id ){
				rentals[i].price = cars[j].pricePerDay*diff + cars[j].pricePerKm*rentals[i].distance;
			}
		}

		if(diff<4 && diff>=1){rentals[i].price = rentals[i].price*0.90;}
		if(diff<10 && diff>=4){rentals[i].price = rentals[i].price*0.70;}
		if(diff>=10){rentals[i].price = rentals[i].price*0.50;}

		console.log("Le prix de la location avec la reduction est de " + rentals[i].price + " euros");
		
	}
}

