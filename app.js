// ||||||||||||||||||||||||||||||||||||| STRING METHODS (Ch # 21 - 25) |||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName);

// ***************************************** Question # 02 *****************************************

// var user = prompt("Enter your favorite mobile phone model: ");
// document.write("My favorite phone is: " + user + "<br />");
// var length = user.length;
// document.write("Length of sting: " + length)

// ***************************************** Question # 03 *****************************************

// var str = "Pakistani";
// var index = str.indexOf("n");
// document.write("String: " + str + "<br>");
// document.write("Index of 'n': " + index);

// ***************************************** Question # 04 *****************************************

// var str = "Hello World";
// var index = str.lastIndexOf("l");
// document.write("String: " + str + "<br>");
// document.write("Last index of 'n': " + index);

// ***************************************** Question # 05 *****************************************

// var str = "Pakistani";
// var index = str.charAt(3);
// document.write("String: " + str + "<br>");
// document.write("Character at index 3: " + index);

// ***************************************** Question # 06 *****************************************

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(lastName);
// alert("Hello! " + fullName);

// ***************************************** Question # 07 *****************************************

// var city1 = "Hyderabad";
// document.write("City: " + city1 + "<br/>");
// city1 = city1.replace("Hyder", "Islam");
// document.write("After Replacement: " + city1);

// ***************************************** Question # 08 *****************************************

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g, "&"));

// ***************************************** Question # 09 *****************************************

// var str = "472";
// document.write("Value: " + str + "<br/> Type: " + typeof(str) + "<br/>");
// var num = parseInt(str, 10)
// document.write("Value: " + num + "<br/> Type: " + typeof(num));

// ***************************************** Question # 10 *****************************************

// var user = prompt("Enter your input: ");
// var convert = user.toUpperCase();
// document.write("User input: " + user + "<br /> Upper case: " + convert);

// ***************************************** Question # 11 *****************************************

// var user = prompt("Enter your input: ");
// var convert = user[0].toUpperCase() + user.slice(1).toLowerCase();
// document.write("User input: " + user + "<br /> Upper case: " + convert);

// ***************************************** Question # 12 *****************************************

// var num = 35.36;
// document.write("Number: " + num + "<br />");
// var str = num.toString();
// var str = str.replace(".", "");
// document.write("Result: " + str);

// ***************************************** Question # 13 *****************************************

// var userName = prompt("Enter your username: ");
// var specialChar = false;
// userName = userName.split("")
// for(var i=0; i<userName.length; i++){
//     if(userName[i] === "@" || userName[i] === "/" || userName[i] === "." || userName[i] === ","){
//         specialChar = true;
//         alert("Please enter valid username.");
//     }
// }if(specialChar === false){
//     alert("Thankyou!")  
// }

// ***************************************** Question # 14 *****************************************

// var a = ["cake","apple pie","cookie","chips","patties"];
// var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// user = user.toLowerCase();
// var flag = "No";
// for(var i=0; i<a.length; i++){
//     if(a[i] === user){
//         flag = "Yes";
//         break;
//     }
// }
// if(flag === "Yes"){
//     document.write(user + " is available at index " + i + " in our bakery")
// }else{
//     document.write("We are sorry." + user +" is not available in our bakery")
// }

// ***************************************** Question # 15 *****************************************

// var pass = prompt("Enter your password");
// var a = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
// var b = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// var isNumber = false;
// var isAlpha = false;
// var isInvalid = false;

// if (c.indexOf(pass[0]) !== -1) {
//     alert("Number is not allowed on index 0")
// }
// else if(pass.length < 6){
//     alert("Password should be at leasat 6")
// }
//  else {
//   for(var i = 0; i < pass.length; i++){
//       if(a.indexOf(pass[i]) !== -1){
//         isAlpha = true
//       }else if(b.indexOf(pass[i]) !== -1){
//         isAlpha = true
//       }else if(c.indexOf(pass[i]) !== -1){
//         isNumber = true
//       }else{
//         isInvalid = true
//       }
//   }
//   if(isAlpha && isNumber && !isInvalid){
//     alert("Correct password")
//   }else{
//     alert("Password is Wrong / Special charactors are not allowed")
//   }
// }

// ***************************************** Question # 16 *****************************************

// var uni = "University of Karachi";
// var arr = uni.split("");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br/>");
// }

// ***************************************** Question # 17 *****************************************

// var user = prompt("Enter your word.");
// var lastChar = user.charAt(user.length-1)
// document.write("User input: " + user + "<br/> Last character of input: " + lastChar);

// ***************************************** Question # 18 *****************************************

// var str = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = 0;

// for(var i = 0; i < str.length; i++){
//     if(str.slice(i, i + word.length).toLowerCase() === word){
//         count++
//     }
// }
// document.write("Text: " + str + "<br/> There are " + count + " occurance(s) of word '" + word + "'");