// from data.js
var tableData = data;

// Console.log the ufo data from data.js
console.log(tableData);
// YOUR CODE HERE!
// Get a reference to the table body



var tbody = d3.select("#tablebody");

//console.log(tbody);
let tr = d3.select("thead > tr");
Object.entries(data[0]).forEach( function([key,value]) {
    let cell=tr.append("th");
    cell.text(key);
 }); 
data.forEach( day => {
    let tr =  tbody.append("tr");
    Object.entries(day).forEach( function([key,value]) {
        let cell=tr.append("td");
        cell.text(value);
    }); 
    
});
d3.select("table").attr("class","table table-striped");

