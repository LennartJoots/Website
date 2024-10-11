    const element = document.querySelector('input')
element.addEventListener("keydown", function (event) {
    console.log(`Ip: ${event.target.value}`);

    if (event.key === "Enter") {
        fafafa(event.target.value)
    }  
});

async function fafafa(Address) {
    
    const url = "http://ip-api.com/json/" + Address
    const response = await fetch(url, {forceHTTPS: false})
    const data = await response.json()
    console.log(data)
    if(data.lon && data.lat && data.lon && data.country && data.city != "undefined"){
    
    const Long = document.querySelector(".Longitude")
    Long.innerHTML = "Longitude: ";
    Long.innerHTML +=data.lon;
    const Lati = document.querySelector(".Latitude")
    Lati.innerHTML = "Latitude: ";
    Lati.innerHTML +=data.lat
    const Count = document.querySelector(".Country")
    Count.innerHTML = "Country: ";
    Count.innerHTML +=data.country
    const Cit = document.querySelector(".City")
    Cit.innerHTML = "City: ";
    Cit.innerHTML +=data.city
    }
    else{
        const Long = document.querySelector(".Longitude")
        Long.innerHTML = "Longitude: Private ";
        const Lati = document.querySelector(".Latitude")
        Lati.innerHTML = "Latitude: Private ";
        const Count = document.querySelector(".Country")
        Count.innerHTML = "Country: Private ";
        const Cit = document.querySelector(".City")
        Cit.innerHTML = "City: Private ";

    }
}