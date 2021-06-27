// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// Level 1

tableData.forEach(function(ufosite) {
    console.log(ufosite);
    var row = tbody.append("tr").classed("content", true);
    Object.entries(ufosite).forEach(function([key, value]) {
    console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
    var cell = row.append("td");
    cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);


var content = d3.selectAll(".content");


// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

  // Print the value to the console
    console.log(inputValue);

    var filteredData = tableData.filter(ufosite => ufosite.datetime === inputValue);

    console.log(filteredData);

    content.html("")


  //show the filtered data in table
    filteredData.forEach(function(info) {
        console.log(info);
        var row = tbody.append("tr");
        Object.entries(info).forEach(function([key, value]) {
        console.log(key, value);
              // Append a cell to the row for each value
              // in the weather report object
        var cell = row.append("td");
        cell.text(value);
        })
    })
}
