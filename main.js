function submitForm(e) {
    e.preventDefault();
    let el = document.forms["employee-form"];
    let emptyFields = [];
    if (el["firstname"].value === "") {
        el["firstname"].parentElement.classList.add("invalid");
        emptyFields.push("firstname");
    } else {
        el["firstname"].parentElement.classList.remove("invalid");
    }
    if (el["lastname"].value === "") {
        el["lastname"].parentElement.classList.add("invalid");
        emptyFields.push("lastname");
    } else {
        el["lastname"].parentElement.classList.remove("invalid");
    }
    if (el["male"].checked === false && el["female"].checked === false) {
        document.getElementById("gender").parentElement.classList.add("invalid");
        emptyFields.push("male");
    } else {
        document.getElementById("gender").parentElement.classList.remove("invalid");
    }
    if (el["married"].checked === false && el["unmarried"].checked === false) {
        document.getElementById("maritalstatus").parentElement.classList.add("invalid");
        emptyFields.push("married");
    } else {
        document.getElementById("maritalstatus").parentElement.classList.remove("invalid");
    }
    if (el["married"].checked === true && el["spousename"].value === "") {
        el["spousename"].parentElement.classList.add("invalid");
        emptyFields.push("spousename");
    } else {
        el["spousename"].parentElement.classList.remove("invalid");
    }
    if (el["otherdetails"].value === "") {
        el["otherdetails"].parentElement.classList.add("invalid");
        emptyFields.push("otherdetails");
    } else {
        el["otherdetails"].parentElement.classList.remove("invalid");
    }
    if (el["terms"].checked === false) {
        alert("Terms & Conditions must be accepted to continue.");
        emptyFields.push("terms");
    }
    if (emptyFields.length > 0) {
        el[`${emptyFields[0]}`].focus();
        return false;
    } else {
        alert("Thank You.");
    }
}

function handleSpouseNameField(e) {
    let el = document.getElementById("spousename");
    if (e.target.value === "married") {
        el.disabled = false;
    }
    if (e.target.value === "unmarried") {
        el.disabled = true;
    }
}

function resetForm(e) {
    e.preventDefault();
    document.getElementById("employee-form").reset();
}
