
let starter = document.getElementById("starter")

let heartarray = ["assets /images /assets/Asset19.png","assets /images /assets/asset20.png","assets /images /assets/asset21.png","assets /images /assets/asset22.png","assets /images /assets/asset23.png","assets /images /assets/asset24.png","assets /images /assets/asset25.png,","assets /images /assets/asset26.png","assets /images /assets/asset27.png"]

let count = 0;
function animate() { 

starter.src = heartarray[count];

count++;
if (heartarray.length == count) {
    count = 0;
}




}
setInterval(animate, 100)