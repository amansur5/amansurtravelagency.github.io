function welcomePage(){
    document.write("The following data are your details you inserted from the Registration Form. Thank You!")
}

/* FLIGHT BOOKINGS */
function getBooks(){
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var departDate= document.getElementById("depart-date").value;
    var returnDate = document.getElementById("return-date").value;
    var passNumber = document.getElementById("passengers-number").value;

    alert("Dear " + fname + "," + " you have booked a flight based on the data you inserted! Catch Flights!")
    document.write("The following data are your details you inserted from the Registration Form. Thank You!" + "<p>From: " + from + "</p><p>To:  " + to + " </p><p>On: " + departDate + 
                    "</p><p>to be returned on: " + returnDate+ "</p><p>along side your: " + passNumber + "other members.</p>");
}

/* REGISTRATION FORM */

function getData(){
    var fname = document.getElementById("first-name").value;
    var sname = document.getElementById("second-name").value;
    var lname = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var pNumber = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var PassportNumber = document.getElementById("passport").value;
    var state = document.getElementById("state").value;
    var localG = document.getElementById("local-government").value;
    var gender = document.getElementById("male").value;

    alert("Dear " + fname + "," + " your profile has been created!")
    document.write("The following data are your details you inserted from the Registration Form. Thank You!" + "<p>First Name: " + fname + "</p><p>Second Name:  " + sname + " </p><p>Last Name: " + lname + 
                    "</p><p>Age: " + age + " years old</p>" + "<p>Phone Number: " + pNumber + "</p><p>Email:" + email + "</p><p>Gender: " + gender + "</p><p>Interests: " + "</p><p>Passport Number: " + PassportNumber + "</p><p>State: " + state + "</p><p>Local Government: " + localG
                    );
}



