$("#add-employee").click(function () {
    event.preventDefault();
    var tRow = $("<tr>");
    var tBody = $("tbody");
    var employeeInput = $("<td>").text($("#employee-name-input").val().trim());
    var roleInput = $("<td>").text($("#role-input").val().trim());
    var startInput = $("<td>").text($("#start-date-input").val().trim());
    var rateInput = $("<td>").text($("#rate-input").val().trim());
    tRow.append(employeeInput, roleInput, startInput, rateInput);
    tBody.append(tRow);
});
