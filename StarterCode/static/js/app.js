// from data.js
var tableData = data;

// YOUR CODE HERE!

//identify the table and tbody
var tbody = d3.select('#ufo-table>tbody');
//console.log(tbody.node());





//create function to generate and populate the table
function buildTable(tableData) {
    //dynamically build table
    tableData.forEach(record => {
        var row = tbody.append('tr');

        /* looping through COLUMNS
        object.values will create an array of the values  in the key/value pair
        such that an array of objects is created:
        col = ['','','','','']
        */

        Object.values(record).forEach(col => {
            row.append('td').text(col)
        }); 
    })
};

        /*
        row.append('td').text(record['datetime']);
        row.append('td').text(record['city']);
        row.append('td').text(record['state']);
        row.append('td').text(record['country']);
        row.append('td').text(record['shape']);
        row.append('td').text(record['durationMinutes']);
        row.append('td').text(record['comments']);
    })
    */

function filterTable(elem) {
    
    // Create a copy of tableData specifically for filtering
    //var filteredData = tableData;


    var changedElem = d3.event.target;
    var elemName = changedElem.id;
    var elemValue = changedElem.value;

    //capture value for all search fields
    var date = d3.select('#datetime').property('value');
    var city = d3.select('#city').property('value');
    var state = d3.select('#state').property('value');
    var country = d3.select('#country').property('value');
    var shape = d3.select('#shape').property('value');
    
    filterFields = {
        'date': date,
        'city': city,
        'state': state,
        'country': country,
        'shape' : shape
    }
    
    filteredData = tableData.filter(rec => rec[elemName] == elemValue);
    
     //Clear out the tbody
    tbody.html('');
    
    //rebuild the filtered table using the buildtable function
    buildTable(filteredData);

    // Object.entries(filterFields).forEach(([key,val]) => {
    //     if(!val){
    //         delete filterFields[key];
    //     };
    //     if(val != ''){
    //         filteredData = filteredData.filter(row => row[key] == elemValue);
    //         buildTable(filteredData);
    //     };
    // });
   
    
}

/// Identify web elements on the page//
btn = d3.select('#filter-btn');
//datetimefield = d3.select("#datetime")

//Add event listeners to web elements
btn.on('click', filterTable);
//datetimefield.on('change', filterTable);

// attach an event listener to the fields attached to the .filter class
d3.selectAll('.filter').on('change', filterTable);

// Call the function to initially load the table
buildTable(tableData);