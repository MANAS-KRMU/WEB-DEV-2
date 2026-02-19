// fill in javascript code here
let detailArr = []
document.querySelector("form").addEventListener("submit", getData)

function getData(e){
    e.preventDefault();
    let docName = document.querySelector("#name").value
    let docID = document.querySelector("#docID").value
    let docSpecial = document.querySelector("#dept").value
    let docExp = document.querySelector("#exp").value
    let docEmail = document.querySelector("#email").value
    let docMobile = document.querySelector("#mbl").value

    let detailObj = {
        docName, 
        docID,
        docSpecial,
        docExp,
        docEmail,
        docMobile,
    }

    detailArr.push(detailObj)

    console.log(detailObj);
    displayTable(detailObj);
}

function displayTable(obj) {

    const row = document.createElement("tr")
    const td1 = document.createElement("td")
    td1.innerText = obj.docName
    const td2 = document.createElement("td")
    td2.innerText = obj.docID
    const td3 = document.createElement("td")
    td3.innerText = obj.docSpecial
    const td4 = document.createElement("td")
    td4.innerText = obj.docExp
    const td5 = document.createElement("td")
    td5.innerText = obj.docEmail
    const td6 = document.createElement("td")
    td6.innerText = obj.docMobile
    const role = document.createElement("td") 
    const del = document.createElement("td")
    const delButton = document.createElement("button")
    delButton.innerText = "Delete"
    del.append(delButton)

    if (obj.docExp >= 5) {
        role.innerText = "Senior"
    } else if (obj.docExp<5 && obj.docExp>=2) {
        role.innerText = "Junior"
    } else if (obj.docExp <=1 ){
        role.innerText = "Trainee"
    }

    row.append(td1, td2, td3, td4, td5, td6, role, del);
    document.querySelector("tbody").append(row)

    row.querySelector("button").addEventListener("click", function() {
        row.remove();
    })
}