/* Put code for the task below */
function buttonTask5(){

    const name=document.getElementById('fullName');
    const address=document.getElementById('address');
    const phone=document.getElementById('phone');
    const email=document.getElementById('email');

    if (name.value !== "" && address.value !== "" && phone.value !== "" && email.value !== ""){
        name.style.background="white"
        address.style.background="white"
        phone.style.background="white"
        email.style.background="white"
        alert("Form Submitted")
    }
    else{
        if(name.value === ""){name.style.background="red"}          else{name.style.background="white"}
        if(address.value === ""){address.style.background="red"}    else{address.style.background="white"}
        if(phone.value === ""){phone.style.background="red"}        else{phone.style.background="white"}
        if(email.value === ""){email.style.background="red"}        else{email.style.background="white"}
    }

}