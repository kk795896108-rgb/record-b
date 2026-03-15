let bankbalance=5000;
let withdraw=0;
let deposite=0;
function DEPOSIT(){
    let amount =Number(document.getElementById("amount").value);
    if(amount>0){
        deposite+=amount;
        bankbalance+=amount;
        document.getElementById("deposite").innerHTML=deposite;
        document.getElementById("deposite").style.color="green";
        document.getElementById("withdraw").style.color="black";
        document.getElementById("balance").innerHTML=bankbalance;
        document.getElementById("balance").style.color="green";
        document.getElementById("bankbalance").innerHTML=bankbalance;
        document.getElementById("message").innerHTML="congracts! Your Amount $"+amount+"is succesfully deposited.";
        document.getElementById("message").style.color="green";
    }
    if(amount==0){
        document.getElementById("message").innerText="Please Enter a amount.";
        document.getElementById("message").style.color="orange";
    }
}   
function WITHDRAW(){
    let amount=Number(document.getElementById("amount").value);
    if(amount<=bankbalance){
        withdraw+=amount;
        bankbalance-=amount;
           document.getElementById("withdraw").innerHTML=withdraw;
           document.getElementById("withdraw").style.color="red";
           document.getElementById("deposite").style.color="black"
        document.getElementById("balance").innerHTML=bankbalance;
        document.getElementById("balance").style.color="red";
        document.getElementById("bankbalance").innerHTML=bankbalance;
        document.getElementById("message").innerHTML="Your Amount $"+amount+"is withdrawn succesfully .";
        document.getElementById("message").style.color="red";
    }
    else if(amount==0){
        document.getElementById("message").innerText="Please Enter a amount.";
        document.getElementById("message").style.color="orange";
    }
    else{
        document.getElementById("message").innerText="Insufficient bank balance.";
        document.getElementById("message").style.color="purple";
    }
}
