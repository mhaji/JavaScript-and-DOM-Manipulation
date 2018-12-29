// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function filterDataTable(data) {
    
    tbody.html("");
    
    data.forEach((dvals) => {
        
        var row = tbody.append("tr");
        
        Object.values(dvals).forEach((val) => {
            var entry = row.append("td");
            entry.text(val);
        }
        );
});
}

function handleClick() {
    d3.select.preventDefault();

    
    var dateElement = d3.select("#datetime").propery("value");
    let filterData = tableData;
    
    if (dateElement) {

        filterData = filterData.filter(row => row.datetime === dateElement);
    }
    
    filterDataTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

filterDataTable(tableData);