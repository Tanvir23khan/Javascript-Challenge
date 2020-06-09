/// from data.js
var tableData = data;

var filter = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");
var tbody = d3.select("tbody");
var csvDownload = d3.select("#download-csv");


// render table with UFO sighting Data 
// fill in Data/table only where date matches user input

function renderTable(ufoDatas) {
	ufoDatas.forEach(sighting=> {
		var row = tbody.append("tr");
		Object.values(sighting).forEach(value =>{
    var cell = row.append("td");
    cell.text(value);
	});
	});	
}


// download query results as CSV file
function arrayToCSV(objArray) {
    let csv = '';
    let header = Object.keys(objArray[0]).join(',');
    let values = objArray.map(o => Object.values(o).join(',')).join('\n');

    csv += header + '\n' + values;
    return csv;
}


// renderTable(tableData);
function filterTableButton() {	
	d3.event.preventDefault();	
    var searchDate = d3.select("#datetime").property("value");
    console.log(searchDate);
    var filteredDatas = data;
	if (searchDate != ""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.datetime === searchDate);
    }


    // wipe out the tbody to be able to write out new table
    tbody.html('');
    renderTable(filteredDatas);
}

function resetTableButton() {
	tbody.html('');
    renderTable(tableData);
    
    // download query results as CSV file
function downloadCSV(){
    let jsonFile = tableReturned(filtered);
    let csvDownloadFile = arrayToCSV(jsonFile);

    let blob = new Blob([csvDownloadFile], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, "ufo_sightings.csv");
}
}

renderTable(tableData);
filter.on("click", filterTableButton );
reset.on("click", resetTableButton );

const myAudio = document.getElementById("x-files");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};       


