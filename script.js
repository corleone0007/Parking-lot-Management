class Entry{
    constructor(name,car,licensePlate,entryDate,exitDate){
        this.name = name;
        this.car = car;
        this.licensePlate = licensePlate;
        this.entryDate = entryDate;
        this.exitDate = exitDate;
    }
}

let entries = [];


function addEntry(){
    let name = document.getElementById("name").value;
    let car = document.getElementById("car").value;
    let licensePlate = document.getElementById("licensePlate").value;
    let entryDate = document.getElementById("entryDate").value;
    let exitDate = document.getElementById("exitDate").value;
    let entry = new Entry(name,car,licensePlate,entryDate,exitDate);
    entries.push(entry);
    console.log(entries);
    document.getElementById("name").value = "";
    document.getElementById("car").value = "";
    document.getElementById("licensePlate").value = "";
    document.getElementById("entryDate").value = "";
    document.getElementById("exitDate").value = "";
}


function showEntries(){
    let table = document.getElementById("table");
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    for(let i = 0; i < entries.length; i++){
        let row = document.createElement("tr");
        let name = document.createElement("td");
        let car = document.createElement("td");
        let licensePlate = document.createElement("td");
        let entryDate = document.createElement("td");
        let exitDate = document.createElement("td");
        name.innerHTML = entries[i].name;
        car.innerHTML = entries[i].car;
        licensePlate.innerHTML = entries[i].licensePlate;
        entryDate.innerHTML = entries[i].entryDate;
        exitDate.innerHTML = entries[i].exitDate;
        row.appendChild(name);
        row.appendChild(car);
        row.appendChild(licensePlate);
        row.appendChild(entryDate);
        row.appendChild(exitDate);
        tableBody.appendChild(row);
    }
}


