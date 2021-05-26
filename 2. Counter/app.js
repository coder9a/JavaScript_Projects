let count=0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);
// console.log(btns.length);
for(let i=0;i<btns.length;i++)
{
    console.log(btns[i]);
}
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const val = e.currentTarget.classList;
        if(val.contains("decrease")){
            count--;
        }
        else if(val.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        if(count>0)
        {
            value.style.color="green";
        }
        else if(count<0)
        {
            value.style.color="red";
        }
        else{
            value.style.color="black"
        }
        value.textContent=count;
    });
});