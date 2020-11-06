// from data.js
var tableData = data;

// Console.log the ufo data from data.js
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("#tablebody");
//console.log(tbody);

function initialdata()
{

    //Selecting and appending the header 
    let tr = d3.select("thead > tr");
    Object.entries(data[0]).forEach( function([key,value]) {
        let cell=tr.append("th");
        cell.text(key);
    }); 
    //Appending data to each row 
    data.forEach( day => {
        let tr =  tbody.append("tr");
        Object.entries(day).forEach( function([key,value]) {
            let cell = tr.append("td");
            var data = cell.text(value);
        
        
        }); 
        
    });
    //Making the table into a striped table.
    d3.select("table").attr("class","table table-striped");
}

function getdata()
{
    //Prevent the page from refreshing
    d3.event.preventDefault();
    //Select the date input from the form 
    var date = d3.select("#datetime").node().value;
    console.log(date);
    //Select the city input from the form 
    var city = d3.select("#city").node().value;
    city = city.toLowerCase();
    console.log(city);
    //Select the state input from the form 
    var state = d3.select("#state").node().value;
    state = state.toLowerCase();
    console.log(state);
    //Select the country input from the form 
    var country = d3.select("#country").node().value;
    country = country.toLowerCase();
    console.log(country);
    //Select the shape input from the form 
    var shape = d3.select("#shape").node().value;
    shape = shape.toLowerCase();
    console.log(shape);

    //Clear the inputed valued 
    d3.select("#datetime").node().value="";
    d3.select("#city").node().value="";
    d3.select("#state").node().value="";
    d3.select("#country").node().value="";
    d3.select("#shape").node().value="";

    //Check to see if any one input field has been entered.
    if(date !== "" || city !== "" || state !== "" || country !== "" || shape !== "")
    {
        //Build the table with filtered table data
        tablebuild(date,city,state,country,shape);

    }
    else
    {
        console.log("Please enter valid data");
    }

};
function tablebuild(date,city,state,country,shape)
{
    //Remove previous table if present.
    tbody.html("");

    //Create an array to store filtered data.
    var filterdata = [];

    // Start filtering the data using the filter inputs
    // Check to see if a date was entered
    if(date !== "")
    {
      // Filter the data if date present.
      var datedata = tableData.filter(data => data.datetime ===  date);
      console.log(filterdata);
    }
    else
    {
        datedata = tableData;
    };
    // Check to see if a city was entered
    if(city !== "")
    {
      // Filter the data if city present.
      var citydata = datedata.filter(data => data.city === city);
      console.log(citydata);
    }
    else
    {
        citydata = datedata;
    };
    // Check to see if a state was entered
    if(state !== "")
    {
      // Filter the data if date present.
      var statedata = citydata.filter(data => data.state === state);
      console.log(statedata)
    }
    else
    {
        statedata = citydata;
    };
    // Check to see if a country was entered
    if(country !== "")
    {
      // Filter the data if date present.
      var countrydata= statedata.filter(data => data.country === country);
      console.log(filterdata)
    }
    else
    {
        countrydata = statedata;
    };
    // Check to see if a shape was entered
    if(shape !== "")
    {
      // Filter the data if date present.
      var shapedata = countrydata.filter(data => data.shape === shape);
      console.log(shapedata)
    }
    else
    {
        shapedata = countrydata;
    }
    //Check to see the filterdata
    console.log(filterdata);
    shapedata.forEach((table) => {
    var row = tbody.append("tr");
    Object.entries(table).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

};
// Add event listener for submit button
d3.select("#filter-btn").on("click", getdata);
initialdata();