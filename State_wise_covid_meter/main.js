const url = 'https://api.covid19india.org/data.json'
const stateWiseData = document.getElementById('state-wise-data')
fetch(url)
const totalConfirmed = document.getElementById('total-confirmed')
const totalActive = document.getElementById('total-active')
const totalDeaths = document.getElementById('total-deaths')
const totalRecovered = document.getElementById('total-recovered')
const lastUpdatedTime = document.getElementById('last-updated')

fetch(url)
.then(response => response.json())
.then(data => {
    lastUpdatedTime.innerHTML = data['statewise'][0]['lastupdatedtime']

    totalConfirmed.innerHTML = data['statewise'][0]['confirmed']
    totalActive.innerHTML = data['statewise'][0]['active']
    totalDeaths.innerHTML = data['statewise'][0]['deaths']
    totalRecovered.innerHTML = data['statewise'][0]['recovered']

    for (let i=1; i<data['statewise'].length; i++) {
        stateWiseData.innerHTML += "<tr>"
        +"<td class='font-weight-bold'>"+data['statewise'][i]['state']+"</td>"
        +"<td class='orbitron'>"+data['statewise'][i]['confirmed']+"</td>"
        +"<td class='orbitron'>"+data['statewise'][i]['active']+"</td>"
        +"<td class='orbitron'>"+data['statewise'][i]['deaths']+"</td>"
        +"<td class='orbitron'>"+data['statewise'][i]['recovered']+"</td>"
        +"<td class='orbitron'>"+data['statewise'][i]['lastupdatedtime']+"</td>"
        +"</tr>"
    }
})