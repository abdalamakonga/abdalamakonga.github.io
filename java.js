window.onload= function(){
    const message=document.querySelector(".enregistrement")
    message.addEventListener("submit",function(e){
    e.preventDefault()
    document.getElementById("result").innerText="Message envoyé"
})
}

