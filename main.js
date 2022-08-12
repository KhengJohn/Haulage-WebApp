const navIcon = document.querySelector('#nav-icon');
const sideNav = document.querySelector('.side-nav');
const closeCart = document.querySelector('.closenav');
// Open Cart
navIcon.onclick = () => {
    sideNav.classList.add('active')
};
// Close Cart
closeCart.onclick = () => {
    sideNav.classList.remove('active')
};


var myArray = [
    {'name':'John Idoko', 'phoneNumber':'07036060982','vechicleType':'Tesla','status':'Active','view':'View More'},
    {'name':'David Idoko', 'phoneNumber':'07036060982','vechicleType':'Toyota', 'status':'Active','view':'View More'},
    {'name':'Joy Sunday', 'phoneNumber':'07036060982','vechicleType':'Camrey', 'status':'Active','view':'View More'},
    {'name':'Queen Mark', 'phoneNumber':'07036060982','vechicleType':'BMW', 'status':'Active','view':'View More'},
    {'name':'Timothy Leonard', 'phoneNumber':'07036060982','vechicleType':'Mazda', 'status':'Active','view':'View More'},
    {'name':'Afiniki Matthew', 'phoneNumber':'07036060982','vechicleType':'Ferari', 'status':'Active','view':'View More'},
    {'name':'Bulus Bako', 'phoneNumber':'07036060982','vechicleType':'Bugati', 'status':'Active','view':'View More'},
    {'name':'Peter Elizabeth', 'phoneNumber':'07036060982','vechicleType':'Lorry', 'status':'Active','view':'View More'},
    {'name':'Caleb Andrew', 'phoneNumber':'07036060982','vechicleType':'Benz', 'status':'Active','view':'View More'},
    {'name':'Apana Monday', 'phoneNumber':'07036060982','vechicleType':'Bentle', 'status':'Active','view':'View More'},
    {'name':'Alex Ladi', 'phoneNumber':'07036060982','vechicleType':'Ford','status':'Active', 'view':'View More'},
    {'name':'Racheal Barnabas', 'phoneNumber':'07036060982','vechicleType':'Vibes', 'status':'Active','view':'View More'},
]

$('#search-input').on('keyup', function(){
    const value = $(this).val()
    console.log('Value:', value)
    const data = searchTable(value, myArray)
    buildTable(data)
} )

buildTable(myArray)

function searchTable(value, data){
    const filteredData = []

    for(let i = 0; i < data.length; i++ ){
        value = value.toLowerCase()
        const name = data[i].name.toLowerCase()

        if(name.includes(value)){
            filteredData.push(data[i])
        }
    }
    return filteredData
}

function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''
    for ( var i = 0; i < data.length; i++){
        const row = `
        <tr>
        <td>${data[i].name}</td>
        <td>${data[i].phoneNumber}</td>
        <td>${data[i].vechicleType}</td>
        <td>${data[i].status}</td>
        <td><a class="btn" href="#open-modal">${data[i].view}</a></td>
    </tr>
       ` 
       table.innerHTML += row
    }

}
