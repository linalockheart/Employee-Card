 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDL3EzrsVFqr0zG7Z6i00MNTHxqaM-UEnA",
    authDomain: "train-schedule-36139.firebaseapp.com",
    databaseURL: "https://train-schedule-36139.firebaseio.com",
    projectId: "train-schedule-36139",
    storageBucket: "",
    messagingSenderId: "379390947891"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var currentDate = 
$("#add-employee").click(function () {
    event.preventDefault();
    var tRow = $("<tr>");
    var tBody = $("tbody");
    var employeeInput = $("#employee-name-input").val().trim();
    var employeeValue = $("<td>").text(employeeInput);
    var roleInput = $("#role-input").val().trim();
    var roleValue = $("<td>").text(roleInput);
    var startInput = $("#start-date-input").val().trim();
    var startValue = $("<td>").text(startInput);
    var rateInput = $("#rate-input").val().trim();
    var rateValue = $("<td>").text(rateInput);
    var monthInput = 5;

    startInput = moment(startInput, "MM/DD/YY");
    console.log(startInput);
    // var monthValue = $("<td>").text(5);
    var billedInput = $("<td>").text(500);
    var currentDate = moment(new Date()).format("MM/DD/YY");
    console.log(currentDate);
    var monthMath = currentDate.diff(startInput, "months");
    var monthValue = $("<td>").text(monthMath);
    tRow.append(employeeValue, roleValue, startValue, monthValue, rateValue, billedInput);
    tBody.append(tRow);

    database.ref().push({
        name: employeeInput,
        role: roleInput,
        startDate: startInput,
        rate: monthInput,
      });
});

// var test = moment().format("DD/MM/YY hh:mm A");

// var test = moment("310315", "DDMMYY").fromNow();
// if (test.charAt(2) )
// var test = moment().subtract(3, "hours")
// console.log(test);

// var test1 = moment("103118", "MMDDYY");
// var test2 = moment("062017", "MMDDYY");
// var currentDate = moment(new Date()).format("MM/DD/YY");
// console.log(currentDate);
// console.log(test1.diff(test2, "months"))
// console.log(moment("", "MMDDYY"));