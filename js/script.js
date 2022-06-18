//Jerry Louis going for Meet Expections

//Setting a variable for when the page loads it will focus on name input
const name = document.querySelector('#name').focus();

// setting a variable to make Other Job Role input hidden 
 let otherJobRole = document.querySelector('#other-job-role');
 otherJobRole.hidden = true;

// creating an eventlistner to listen for a change in the job role selection
document.querySelector('#title').addEventListener('change', (e) => {
    //setting an conditional when other job role is selected to make otherJobRole appear on screen and not when value changes
    if(e.target.value === "other"){
        otherJobRole.hidden = false;
    }else{
        otherJobRole.hidden = true;
    }

})
// Setting a variable to target and disable color element
let colors = document.querySelector('#color');
colors.disabled = true;
// creating an eventlistner to listen for a change when user selects design of tshirt
document.querySelector('#design').addEventListener('change', (e) => {
    
    colors.disabled = false;
   //setting conditional to target event value 'js puns' and making each color hidden based on value true or false
    if(e.target.value === "js puns"){
        colors[1].hidden = false;
        colors[2].hidden = false;
        colors[3].hidden = false;
        colors[4].hidden = true;
        colors[5].hidden = true;
        colors[6].hidden = true;
    }if(e.target.value === "heart js"){
        colors[1].hidden = true;
        colors[2].hidden = true;
        colors[3].hidden = true;
        colors[4].hidden = false;
        colors[5].hidden = false;
        colors[6].hidden = false;
    }

})
//Setting total cost to zero
let totalCost=0;
// adding event listener when users selects checkbox
document.querySelector('#activities').addEventListener('change', (e) => {
    //setting a conditional when a checkbox is checked then the total cost will increase or decrease when its unselected 
    if(e.target.getAttribute('data-cost') && e.target.checked){
        
        let cost = e.target.getAttribute('data-cost')
        const sum = parseInt(cost)
        console.log(e.target.getAttribute('data-cost'), sum)
        totalCost += sum
        document.querySelector('#activities-cost').innerHTML = `Total:$${totalCost}`;
    }else{
        let cost = e.target.getAttribute('data-cost')
        const sum = parseInt(cost)
        totalCost-=sum
        document.querySelector('#activities-cost').innerHTML = `Total:$${totalCost}`;
    }

       
})
//targeting the payment selection of the page
let payment = document.querySelector('#payment')
let paypal = document.querySelector('#paypal')
let bitcoin = document.querySelector('#bitcoin')
let creditCard = document.querySelector('#credit-card')

//from the payment options, we are setting credit/debit card as default payment
const creditDefault = payment[1].setAttribute('selected','');
const paypalDefault = paypal.setAttribute('hidden','')
const bitcoinDefault = bitcoin.setAttribute('hidden','')
//event for when thepayment is changed to other payment options and hidding card information to enter
payment.addEventListener('change', (e) => {
    if(e.target.value === 'paypal'){
        creditCard.setAttribute('hidden','')
        bitcoin.setAttribute('hidden','')
        paypal.removeAttribute('hidden')
    }if(e.target.value ==='bitcoin'){
        creditCard.setAttribute('hidden','')
        paypal.setAttribute('hidden', '')
        bitcoin.removeAttribute('hidden')

    }if(e.target.value === 'credit-card'){
        creditCard.removeAttribute('hidden')
        paypal.setAttribute('hidden', '')
        bitcoin.setAttribute('hidden', '')
      }
})

//event when user clicks submit button 
document.querySelector('[method="post"]').addEventListener('submit', (e) => {
    //prevents the form from reloading any updates being made
    e.preventDefault();
    //pulling elements from the html to use in later conditions
    let zipInput = document.getElementById('zip').value;
    let ccNum = document.getElementById('cc-num').value;
    let cvv = document.getElementById('cvv').value;
    let email = document.getElementById('email').value;
    let nameInput = document.getElementById('name').value;

    const span =document.querySelector('#zip-hint');
    const spanCC =document.querySelector('#cc-hint');
    const spanCvv =document.querySelector('#cvv-hint');
    const spanName =document.querySelector('#name-hint');

    
    const activitiesHint =document.querySelector('#activities-hint');
    const emailHint =document.querySelector('#email-hint');

    // setting regex validations on the input user put in
    let isValidZipInput =/^\d{5}$/.test(zipInput);
    let isValidCcNumInput = /^\d{13,16}$/.test(ccNum);
    let isValidCvvInput = /^\d{3}$/.test(cvv);
    let isValidEmailInput = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    
    //conditional for name input to display/hide valid/not-valid class from parent element of input value
    if(nameInput === ''){
        spanName.style.display = 'block';
        spanName.parentNode.setAttribute('class', 'not-valid');
        spanName.parentNode.classList.remove('valid');

        
        console.log(nameInput, nameInput.parentNode)
    }else{
        spanName.style.display = 'none';
        spanName.parentNode.setAttribute('class', 'valid');
        spanName.parentNode.classList.remove('not-valid');

    }
    // conditonal to validate user input and display/not display class from parent of input value
    if(isValidEmailInput === true){
        emailHint.style.display = 'none';
        emailHint.parentNode.setAttribute('class', 'valid')
        emailHint.parentNode.classList.remove('not-valid');

        
    }else{
        emailHint.style.display = 'block';
        emailHint.parentNode.setAttribute('class', 'not-valid');
        emailHint.parentNode.classList.remove('valid');

    }

    // conditonal to validate user input and display/not display class from parent of input value
    if(totalCost === 0){
        activitiesHint.style.display = 'block';
        activitiesHint.parentNode.setAttribute('class', 'not-valid');
        activitiesHint.parentNode.classList.remove('valid');

    }else{
        activitiesHint.style.display = 'none';
        activitiesHint.parentNode.setAttribute('class', 'valid')
        activitiesHint.parentNode.classList.remove('not-valid');

    }

     // conditonal to validate user input and display/not display class from parent of input value   
    if(isValidCvvInput === true){ 
        spanCvv.style.display = 'none';  
        spanCvv.parentNode.setAttribute('class', 'valid')
        spanCvv.parentNode.classList.remove('not-valid');

    }else if(isValidCvvInput === false){
        spanCvv.style.display = 'block';
        spanCvv.parentNode.setAttribute('class', 'not-valid');
        spanCvv.parentNode.classList.remove('valid');

    }

    // conditonal to validate user input and display/not display class from parent of input value
    if(isValidCcNumInput === true){ 
        spanCC.style.display = 'none';  
        spanCC.parentNode.setAttribute('class', 'valid');
        spanCC.parentNode.classList.remove('not-valid');

    }else if(isValidCcNumInput === false){
        spanCC.style.display = 'block';
        spanCC.parentNode.setAttribute('class', 'not-valid');
        spanCC.parentNode.classList.remove('valid');

    }

    // conditonal to validate user input and display/not display class from parent of input value    
    if(isValidZipInput === true){
        console.log(`the span is here ${span}`);   
        span.style.display = 'none';  
        span.parentNode.setAttribute('class', 'valid')
        span.parentNode.classList.remove('not-valid');

    }else if(isValidZipInput === false){
        span.style.display = 'block';
        span.parentNode.setAttribute('class', 'not-valid')
        span.parentNode.classList.remove('valid');

    }
})
//targeting all checkboxes
const allCheckBoxes = document.querySelectorAll('[type="checkbox"]')
    //looping through all the checkboxs
    for(let i = 0; i < allCheckBoxes.length; i++){
        // setting conditional to focus on the checkbox the user is on 
        if(allCheckBoxes[i]){
            allCheckBoxes[i].addEventListener('focus', (e) => {
               e.target.parentNode.setAttribute('class', 'focus');
               
            })
            // setting conditional to remove focus on the checkbox the user is on 
            allCheckBoxes[i].addEventListener('blur', (e) => {
                if(allCheckBoxes[i].parentNode.className === 'focus'){
                    allCheckBoxes[i].parentNode.className = '';
                }            
            })
        }
    }

