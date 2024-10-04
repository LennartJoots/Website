    const element = document.querySelector('input')
element.addEventListener("keydown", function (event) {
    console.log(`Ip: ${event.target.value}`);

    if (event.key === "Enter") {
        fafafa(event.target.value)
    }  
});

async function fafafa(Address) {
    const url = "http://ip-api.com/json/" + Address
    fetch(url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const Long = document.querySelector(".Longitude")
    Long.innerHTML +=data.lon;
    const Lati = document.querySelector(".Latitude")
    Lati.innerHTML +=data.lat
    const Count = document.querySelector(".Country")
    Count.innerHTML +=data.country
    const Cit = document.querySelector(".City")
    Cit.innerHTML +=data.city
}
