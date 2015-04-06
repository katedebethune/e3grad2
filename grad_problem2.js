'use strict';

/* 
 * Grad Problem 2
 * Kate de Bethune, April 6, 2015
 * 
 * Please note that this is turned into a problem by removing the sample solutions
 * provided.
 * 
 */

/* 
 * CUSTOM OBJECTS
 * 
 * Part 1:
 * 
 * Create a function that can create instances of custom objects.
 * The subject matter can be anything of your choosing.
 * The function should create properties that demonstrate each of the
 * javascript datatypes, both simple and complex:
 * 		-- string
 *  	-- number
 * 		-- boolean
 *		-- Date()
 * 		-- array
 *		-- object
 *
 * You will also create one or two function of your choosing within the function. 
 * For example, perform calculations on object properties or read out a 
 * concatenated string of properties.
 * 
 * Finally, you will create a separate "object inspector" function which
 * will display the name, value, and variable type for each property of your object.
 *
 */
 
 function Cruise(name, num_psgrs, riv_cruise, start, end, ports, vessel) {
 	this.name = name; 				//string
 	this.num_psgrs = num_psgrs;		//number
 	this.riv_cruise = riv_cruise;	//boolean
 	this.start = start;				//date
 	this.end = end;					//date
 	this.ports = ports;				//array
 	this.vessel = vessel;			//object
 	
 	//functions
 	this.duration = function() {
 		var a = Math.floor((Date.parse(this.end) - Date.parse(this.start)) / (24*3600*1000));
 		return a + " days";
 	};
 	
 	this.info = function() {
 		return "THe SS "+ this.vessel.name + " which is " + this.vessel.length + " long will sail from " + this.ports[0] 
 			+ " on " + this.start + ". The cruise will be " + this.duration() + " long."
 	};
 }
 
 function inspect(obj) {
 	for (var p in obj) {
 		console.log(p + " = " + obj[p] + " and is of type " + typeof(obj[p]));
 	} 	
 }
 
	
 /*
  * CUSTOM OBJECTS 
  *
  * Part 2
  * 
  * Instantiate two examples of your custom object, populated with dummy data
  * of your choosing.
  *
  */
  
  var cruise1 = new Cruise("Gems of the Danube", 30, true, 
  	'01 Jan 2015 00:00:00 GMT-0400', '11 Jan 2015 10:00:00 GMT-0400',
  	["Vienna", "Bratislava", "Budapest", "Belgrade"], { name: "River Cruiser", flag: "Monaco", length: "100 meters", capacity: 100 });
  	
  var cruise2 = new Cruise("Treasures of the Aegean", 100, false, 
  	'01 Apr 2015 10:00:00 GMT-0400', '15 Apr 2015 12:00:00 GMT-0400',
  	["Euboea", "Thasos", "Naxos", "Lesbos", "Mykonos"], { name: "Seaworthy", flag: "Netherlands", length: "250 meters", capacity: 200 });
  
  /*
   * CUSTOM OBJECTS
   *
   * Part 3
   *
   * 3.1 Iterate over all of the properties in one of your objects.
   * 3.2 For one of your objects, write each of your simple variables 
   * 	(string, number, boolean) to console.log.
   * 3.3 Select your array from the set of properties and iterate over it, writing
   * 	 the results to console.log
   * 3.4 Select your object from the set of properties and iterate over it, writing the 
   * 	 results to console.log
   * 3.5 Call your custom function(s) and write the output to console.log
   * 3.6 Call your "object inspector" function and write the output to console.log
   *
   */
   
   //3.1
   for ( var a in cruise1 ) {
   		console.log(cruise1[a]);
   	}
   	//3.2
   	console.log(cruise2.name);
   	console.log(cruise2.num_psgrs);
   	console.log(cruise2.riv_cruise);
   	console.log(cruise2.start);
   	console.log(cruise2.end);
   	
   	//3.3
   	var i = 0, len = cruise2.ports.length;
   	for ( ; i < len ; i++ ) {
   		console.log(cruise2.ports[i]);
   	}
   	
   	//3.4
   	for ( var b in cruise1.vessel ) {
   		console.log(cruise1.vessel[b]);
   	}	
   	
   
   //3.5
   console.log(cruise1.duration());
   console.log(cruise1.info());
   console.log(cruise2.duration());
   console.log(cruise2.info());
   
   //3.6
   inspect(cruise1);
   inspect(cruise2);
   
   