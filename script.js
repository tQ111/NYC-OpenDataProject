async function init(){
    let link = "https://data.cityofnewyork.us/resource/k397-673e.json";
    info = await fetch(link);
    data = await info.json();
}