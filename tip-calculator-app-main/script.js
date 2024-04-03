  
  let bill = document.getElementById("bill");
  let person = document.getElementById("person");
  let tipPerPersonDisplayer = document.getElementById("tip-per-person");
  let totalBillDisplayer = document.getElementById("total-bill");
  let customPercentage = document.getElementById("custom-percentage");
  let resetBtn = document.getElementById("reset-btn");
  let errorText = document.getElementById("error-text");
  let tipBtn = document.getElementById("tip-btn");
  // let tipBtn = document.getElementsByTagName(button);


// 
  function tipCalculator(tipPercentage) {
    

    if (person.value === '' || person.value === '0') {
      errorText.style.display = "block";
      person.style.borderColor = "red";
      person.style.borderStyle = "solid";
    }

    else {
      let tipRate = tipPercentage / 100;
      let billAmount = bill.value;
      let persons = person.value;
  
      let billPerPerson = parseFloat(billAmount) / parseInt(persons);   
      let tipPerPerson = (billPerPerson * parseFloat(tipRate));  
      let totalBill = (tipPerPerson + billPerPerson);  
      
      tipPerPerson = tipPerPerson.toFixed(2);
      totalBill = totalBill.toFixed(2);
  
      tipPerPersonDisplayer.innerHTML = tipPerPerson;
      totalBillDisplayer.innerHTML = totalBill;
      errorText.style.display = "none"; 
      person.style.borderColor = "white";
      person.style.borderStyle = "solid";      
    }
  }
  
  customPercentage.addEventListener('input', function(){
    tipCalculator(customPercentage.value);
  })

  function resetCustom(tipPercentage) {
    customPercentage.value = '';
    tipCalculator(tipPercentage);
  }

  resetBtn.addEventListener('click', function() {
    bill.value = '';
    person.value = '';
    tipPerPersonDisplayer.innerHTML = '$0.00';
    totalBillDisplayer.innerHTML = '$0.00';
    customPercentage.value = '';
  })
    
   