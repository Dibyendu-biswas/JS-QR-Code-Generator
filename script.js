const inputText =document.getElementById("inputText")
const qrImage =document.getElementById("qrImage")
const btn = document.getElementById("btn")
const qrBox = document.getElementById("qrBox")
btn.addEventListener("click",()=>{
   if(inputText.values.length > 0 ){
    qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + inputText.value
    console.log("clicked");
    qrBox.classList.add("showItem")
   }else{
    alert("please Enter some Text")
   }
})
