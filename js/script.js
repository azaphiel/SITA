var i = 0;
var j = 0;
var k = 0;
var mail = [];
var regular = [];
var heavy = [];
var insurance = [];
var departments = [mail, regular, heavy, insurance];
var makeList = true;
var list = "";
var deptCntr = 4;

function callAll() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./xml/Container_68465468.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var table = "<tr><th>Sender</th><th>From</th><th>Receipient</th><th>To</th><th>Weight</th><th>Value</th></tr>";
    var x = xmlDoc.getElementsByTagName("Parcel");
    if (makeList == true) {
        for (k = 0; k < x.length; k++) {
            table += "<tr><td>" +
                x[k].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[k].getElementsByTagName("Street")[0].childNodes[0].nodeValue + " " +
                x[k].getElementsByTagName("HouseNumber")[0].childNodes[0].nodeValue + ", " +
                x[k].getElementsByTagName("PostalCode")[0].childNodes[0].nodeValue + " " +
                x[k].getElementsByTagName("City")[0].childNodes[0].nodeValue + " " +
                "</td><td>" +
                x[k].getElementsByTagName("Name")[i + 1].childNodes[0].nodeValue +
                "</td><td>" +
                x[k].getElementsByTagName("Street")[i + 1].childNodes[0].nodeValue + " " +
                x[k].getElementsByTagName("HouseNumber")[i + 1].childNodes[0].nodeValue + ", " +
                x[k].getElementsByTagName("PostalCode")[i + 1].childNodes[0].nodeValue + " " +
                x[k].getElementsByTagName("City")[i + 1].childNodes[0].nodeValue + " " +
                "</td><td>" +
                x[k].getElementsByTagName("Weight")[j].childNodes[0].nodeValue +
                "</td><td>" +
                x[k].getElementsByTagName("Value")[j].childNodes[0].nodeValue +
                "</td></tr>";
        }
        document.getElementById("list").innerHTML = table;
        makeList = false;
    }




}

function callParcel() {

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./xml/Container_68465468.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;


    if (j < xmlDoc.getElementsByTagName("Parcel").length) {

        document.getElementById("sName").innerHTML = xmlDoc.getElementsByTagName("Name")[i].childNodes[0]
            .nodeValue;
        document.getElementById("sStreet").innerHTML = xmlDoc.getElementsByTagName("Street")[i].childNodes[0]
            .nodeValue + " ";
        document.getElementById("sHouseNumber").innerHTML = xmlDoc.getElementsByTagName("HouseNumber")[i]
            .childNodes[0].nodeValue + ", ";
        document.getElementById("sPostalCode").innerHTML = xmlDoc.getElementsByTagName("PostalCode")[i]
            .childNodes[0].nodeValue + ", ";
        document.getElementById("sCity").innerHTML = (xmlDoc.getElementsByTagName("City")[i].childNodes[0]
            .nodeValue) + " ";
        document.getElementById("receipientName").innerHTML = xmlDoc.getElementsByTagName("Name")[i + 1]
            .childNodes[
                0].nodeValue;
        document.getElementById("rStreet").innerHTML = xmlDoc.getElementsByTagName("Street")[i + 1].childNodes[
                0]
            .nodeValue + " ";
        document.getElementById("rHouseNumber").innerHTML = xmlDoc.getElementsByTagName("HouseNumber")[i + 1]
            .childNodes[0].nodeValue + ", ";
        document.getElementById("rPostalCode").innerHTML = xmlDoc.getElementsByTagName("PostalCode")[i + 1]
            .childNodes[0].nodeValue + ", ";
        document.getElementById("rCity").innerHTML = xmlDoc.getElementsByTagName("City")[i + 1].childNodes[0]
            .nodeValue;
        document.getElementById("weight").innerHTML = xmlDoc.getElementsByTagName("Weight")[j].childNodes[0]
            .nodeValue;
        document.getElementById("value").innerHTML = xmlDoc.getElementsByTagName("Value")[j].childNodes[0]
            .nodeValue;

        if (document.getElementById("weight").innerHTML < 1.0 && document.getElementById("value").innerHTML < 1000.0) {
            mail.push({
                Sender: xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue,
                sStreet: xmlDoc.getElementsByTagName("Street")[i].childNodes[0].nodeValue,
                sHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i].childNodes[0].nodeValue,
                sPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i].childNodes[0].nodeValue,
                sCity: xmlDoc.getElementsByTagName("City")[i].childNodes[0].nodeValue,
                Receipient: xmlDoc.getElementsByTagName("Name")[i + 1].childNodes[0].nodeValue,
                rStreet: xmlDoc.getElementsByTagName("Street")[i + 1].childNodes[0].nodeValue,
                rHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i + 1].childNodes[0].nodeValue,
                rPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i + 1].childNodes[0].nodeValue,
                rCity: xmlDoc.getElementsByTagName("City")[i + 1].childNodes[0].nodeValue,
                Weight: xmlDoc.getElementsByTagName("Weight")[j].childNodes[0].nodeValue,
                Value: xmlDoc.getElementsByTagName("Value")[j].childNodes[0].nodeValue
            })

            document.getElementById("department").innerHTML = "Mail";
        } else if (document.getElementById("weight").innerHTML >= 1.0 && document.getElementById("weight").innerHTML < 10.0 &&
            document.getElementById("value").innerHTML < 1000.0) {
            regular.push({
                Sender: xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue,
                sStreet: xmlDoc.getElementsByTagName("Street")[i].childNodes[0].nodeValue,
                sHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i].childNodes[0].nodeValue,
                sPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i].childNodes[0].nodeValue,
                sCity: xmlDoc.getElementsByTagName("City")[i].childNodes[0].nodeValue,
                Receipient: xmlDoc.getElementsByTagName("Name")[i + 1].childNodes[0].nodeValue,
                rStreet: xmlDoc.getElementsByTagName("Street")[i + 1].childNodes[0].nodeValue,
                rHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i + 1].childNodes[0].nodeValue,
                rPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i + 1].childNodes[0].nodeValue,
                rCity: xmlDoc.getElementsByTagName("City")[i + 1].childNodes[0].nodeValue,
                Weight: xmlDoc.getElementsByTagName("Weight")[j].childNodes[0].nodeValue,
                Value: xmlDoc.getElementsByTagName("Value")[j].childNodes[0].nodeValue
            })

            document.getElementById("department").innerHTML = "Regular";
        } else if (document.getElementById("weight").innerHTML >= 10.0 && document.getElementById("value").innerHTML < 1000.0) {
            heavy.push({
                Sender: xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue,
                sStreet: xmlDoc.getElementsByTagName("Street")[i].childNodes[0].nodeValue,
                sHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i].childNodes[0].nodeValue,
                sPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i].childNodes[0].nodeValue,
                sCity: xmlDoc.getElementsByTagName("City")[i].childNodes[0].nodeValue,
                Receipient: xmlDoc.getElementsByTagName("Name")[i + 1].childNodes[0].nodeValue,
                rStreet: xmlDoc.getElementsByTagName("Street")[i + 1].childNodes[0].nodeValue,
                rHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i + 1].childNodes[0].nodeValue,
                rPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i + 1].childNodes[0].nodeValue,
                rCity: xmlDoc.getElementsByTagName("City")[i + 1].childNodes[0].nodeValue,
                Weight: xmlDoc.getElementsByTagName("Weight")[j].childNodes[0].nodeValue,
                Value: xmlDoc.getElementsByTagName("Value")[j].childNodes[0].nodeValue
            })

            document.getElementById("department").innerHTML = "Heavy";
        } else {
            insurance.push({
                Sender: xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue,
                sStreet: xmlDoc.getElementsByTagName("Street")[i].childNodes[0].nodeValue,
                sHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i].childNodes[0].nodeValue,
                sPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i].childNodes[0].nodeValue,
                sCity: xmlDoc.getElementsByTagName("City")[i].childNodes[0].nodeValue,
                Receipient: xmlDoc.getElementsByTagName("Name")[i + 1].childNodes[0].nodeValue,
                rStreet: xmlDoc.getElementsByTagName("Street")[i + 1].childNodes[0].nodeValue,
                rHouse_Number: xmlDoc.getElementsByTagName("HouseNumber")[i + 1].childNodes[0].nodeValue,
                rPostal_Code: xmlDoc.getElementsByTagName("PostalCode")[i + 1].childNodes[0].nodeValue,
                rCity: xmlDoc.getElementsByTagName("City")[i + 1].childNodes[0].nodeValue,
                Weight: xmlDoc.getElementsByTagName("Weight")[j].childNodes[0].nodeValue,
                Value: xmlDoc.getElementsByTagName("Value")[j].childNodes[0].nodeValue
            })

            document.getElementById("department").innerHTML = "Insurance";
        }
    }

    i = i + 2;
    j++;

    return 0;
}

function callDept() {
    i = 0;
    var traverse = 4;
    var deptName = prompt("Enter department name in lowercase (ex: regular):");
    switch (deptName) {
        case 'mail':
            if (mail[0] == null) {
                alert("This department has been removed already.");
                break;
            }
            document.getElementById("nameOfDep").innerHTML = "- Mail Department -" + "<br>"
            document.getElementById("listName").innerHTML = "<b>Sender: </b>" + mail[0].Sender;
            document.getElementById("listFrom").innerHTML = "<b>From: </b>" + mail[0].sCity;
            document.getElementById("listTo").innerHTML = "<b>To: </b>" + mail[0].rCity;
            document.getElementById("listReceiver").innerHTML = "<b>Receiver: </b>" + mail[0].Receipient;
            document.getElementById("listWeight").innerHTML = "<b>Weight: </b>" + mail[0].Weight;
            document.getElementById("listValue").innerHTML = "<b>Value: </b>" + mail[0].Value;
            break;

        case 'regular':
            if (regular[0] == null) {
                alert("This department has been removed already.");
                break;
            }
            document.getElementById("nameOfDep").innerHTML = "- Regular Department -" + "<br>"
            document.getElementById("listName").innerHTML = "<b>Sender: </b>" + regular[0].Sender;
            document.getElementById("listFrom").innerHTML = "<b>From: </b>" + regular[0].sCity;
            document.getElementById("listTo").innerHTML = "<b>To: </b>" + regular[0].rCity;
            document.getElementById("listReceiver").innerHTML = "<b>Receiver: </b>" + regular[0].Receipient;
            document.getElementById("listWeight").innerHTML = "<b>Weight: </b>" + regular[0].Weight;
            document.getElementById("listValue").innerHTML = "<b>Value: </b>" + regular[0].Value;
            break;

        case 'heavy':
            if (heavy[0] == null) {
                alert("This department has been removed already.");
                break;
            }
            document.getElementById("nameOfDep").innerHTML = "- Heavy Department -" + "<br>"
            document.getElementById("listName").innerHTML = "<b>Sender: </b>" + heavy[0].Sender;
            document.getElementById("listFrom").innerHTML = "<b>From: </b>" + heavy[0].sCity;
            document.getElementById("listTo").innerHTML = "<b>To: </b>" + heavy[0].rCity;
            document.getElementById("listReceiver").innerHTML = "<b>Receiver: </b>" + heavy[0].Receipient;
            document.getElementById("listWeight").innerHTML = "<b>Weight: </b>" + heavy[0].Weight;
            document.getElementById("listValue").innerHTML = "<b>Value: </b>" + heavy[0].Value;
            break;

        case 'insurance':
            if (insurance[0] == null) {
                alert("This department has been removed already.");
                break;
            }
            document.getElementById("nameOfDep").innerHTML = "- Insurance Department -" + "<br>"
            document.getElementById("listName").innerHTML = "<b>Sender: </b>" + heavy[0].Sender;
            document.getElementById("listFrom").innerHTML = "<b>From: </b>" + heavy[0].sCity;
            document.getElementById("listTo").innerHTML = "<b>To: </b>" + heavy[0].rCity;
            document.getElementById("listReceiver").innerHTML = "<b>Receiver: </b>" + heavy[0].Receipient;
            document.getElementById("listWeight").innerHTML = "<b>Weight: </b>" + heavy[0].Weight;
            document.getElementById("listValue").innerHTML = "<b>Value: </b>" + heavy[0].Value;
            break;

        default:
            alert("Please enter a correct department name!");
    }


}

function addDept() {
    var deptName = prompt("Enter a name for new department:");
    switch (deptName) {
        case "mail":
            alert("This name is already exist! Try different name.");
            addDept();
            break;
        case "regular":
            alert("This name is already exist! Try different name.");
            addDept();
            break;
        case "heavy":
            alert("This name is already exist! Try different name.");
            addDept();
            break;
        case "insurance":
            alert("This name is already exist! Try different name.");
            addDept();
            break;
        default:
            alert("New department " + deptName + " created succesfuly");
    }
    deptName = new Array({
        dept_name: deptName
    });
    departments.push(deptName);
    console.log(departments[deptCntr][0].dept_name);
    deptCntr++;


}

function remDept() {
    function removeScreen() {
        document.getElementById("nameOfDep").innerHTML = null;
        document.getElementById("listName").innerHTML = null;
        document.getElementById("listFrom").innerHTML = null;
        document.getElementById("listTo").innerHTML = null;
        document.getElementById("listReceiver").innerHTML = null;
        document.getElementById("listWeight").innerHTML = null;
        document.getElementById("listValue").innerHTML = null;
    }

    var name = prompt("Enter department name to remove:");
    if (name == "mail" && mail[0] != null) {
        departments[0].pop();
        alert("Department 'mail' has succesfully removed!");
        removeScreen();
    } else if (name == "regular" && regular[0] != null) {
        departments[1].pop();
        alert("Department 'regular' has succesfully removed!");
        removeScreen();
    } else if (name == "heavy" && heavy[0] != null) {
        departments[2].pop();
        alert("Department 'heavy' has succesfully removed!");
        removeScreen();
    } else if (name == "insurance" && insurance[0] != null) {
        departments[3].pop();
        alert("Department 'insurance' has succesfully removed!");
        removeScreen();
    } else {
        alert("There is no such a department!");
    }
    return 0;
}