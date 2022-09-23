let text =  document.querySelector(".my-text");

//triggers when button is clicked
function checkPalindrome(){
    const myValue = text.value;
    const len = myValue.length;
    let flag = true;
    for(let i=0;i<len/2;i++){
        if(myValue[i] != myValue[len -1 -i])
            flag = false;
    }
    if(flag)
        alert("Palindrome");
    else
        alert("Not A Palindrome ...");
}