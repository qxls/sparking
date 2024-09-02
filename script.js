const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1",
    "#FF8C33", "#75FF33", "#338AFF", "#FFD733", "#FF3396",
    "#33FFF3", "#FF3333", "#7FFF33", "#336EFF", "#FF33D4",
    "#FFA533", "#AFF333", "#333EFF", "#FF73D4", "#33FFBD"];
const button=document.getElementById("colorbutton");
let colorIndex=0;
let intervalid
button.addEventListener("click",function()
{
    if(intervalid){
        clearInterval(intervalid)
        intervalid=null
        button.textContent="star changing background"
    }
    else{
        intervalid=setInterval(function(){
            document.body.style.backgroundColor=colors[colorIndex];
            colorIndex=(colorIndex + 1) % colors.length; 

        },200)
        button.textContent="stop changing background"
    }
 
})