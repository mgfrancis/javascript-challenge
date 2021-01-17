// from data.js
var tableData = data;
console.log(data);


// YOUR CODE HERE!

//identify the table and tbody
var tbody = d3.select('#ufo-table>tbody');
console.log(tbody.node());

//create function to generate and populate the table
function buildTable(tableData) {
    //dynamically build table
    tableData.forEach(record => {
        var row = tbody.append('tr');

        /*
        row.append('td').text(record['datetime']);
        row.append('td').text(record['city']);
        row.append('td').text(record['state']);
        row.append('td').text(record['country']);
        row.append('td').text(record['shape']);
        row.append('td').text(record['durationMinutes']);
        row.append('td').text(record['comments']);
    })


        /* looping through COLUMNS
        object.values will create an array of the values  in the key/value pair
        such that an array of objects is created:
        col = ['','','','','']
        */

        Object.values(record).forEach(col => {
            row.append('td').text(col)
        }); 
    })

}


function filterTable(elem) {
    
    var dateElem  = d3.select('#datetime');
    var filterDate = dateElem.property('value');

    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);

    //Clear out the tbody
    tbody.html('');

    //rebuild the filtered table using the buildtable function
    buildTable(filteredData);
}

// Call the function to initially load the table
buildTable(tableData);

/// Identify web elements on the page//
btn = d3.select('#filter-btn');
datetimefield = d3.select("#datetime")

//Add event listeners to web elements
btn.on('click', filterTable);
datetimefield.on('change', filterTable);
    
