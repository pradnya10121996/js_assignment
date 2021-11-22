
function ValidatePAN() {
    let vinNumber = document.getElementById("vinNumber").value;
    document.getElementById("vin").innerHTML = vinNumber;
    //var regex = /([0-9]){1}([A-Z]){6}([0-9]){2}([A-Z]){2}([0-9]){6}$/;

    let url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinNumber}?format=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const array = data.Results.filter(element => {
                return (element.Variable == "Body Class" || element.Variable == "Model Year" ||
                    element.Variable == "Make" || element.Variable == "Model" || element.Variable == "Engine Number of Cylinders"
                );

            })
            console.log(array);
            array.forEach(element => {
                if (element.Variable == 'Make')
                    document.getElementById("make").innerHTML = element.Value;

                if (element.Variable == 'Model')
                    document.getElementById("model").innerHTML = element.Value;

                if (element.Variable == 'Model Year')
                    document.getElementById("year").innerHTML = element.Value;

                if (element.Variable == 'Body Class')
                    document.getElementById("body").innerHTML = element.Value;

                if (element.Variable == 'Engine Number of Cylinders')
                    document.getElementById("engine").innerHTML = element.Value + ' ' + 'cylinders';
            });
        }

        );
    return true;

}



//5XYKTDA24BG103569
//2C3HH56J01H591067

