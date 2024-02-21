const allButton = document.getElementsByClassName('add-btn')
for(const btn of allButton){
  btn.addEventListener('click', function(e){

    btn.setAttribute('disabled',true);

    const name = e.target.parentNode.childNodes[1].innerText
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText
    const category = e.target.parentNode.childNodes[5].childNodes[1].innerText
    
    const selectedPlayerContainer = document.getElementById('selected-players-container');
    const div = document.createElement('div')
    div.classList.add('selected-players')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    p1.innerText = name
    p2.innerText = price
    p3.innerText = category
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    selectedPlayerContainer.appendChild(div)
    
    // const totalCostElement = document.getElementById('total-cost');
    // const totalCost = getElementValueById('total-cost');
    // totalCostElement.innerText = totalCost+parseInt(price);
    updateTotalCost(price);
    
    // const budgetElement = document.getElementById('budget');
    // const budget = getElementValueById('budget');
    // budgetElement.innerText = budget-price;
    updateBudgetPrice(price)
    
    // const cartElement = document.getElementById('cart')
    // const cartValue = getElementValueById('cart')
    // cartElement.innerText = cartValue+1;
    updateCartCount()

    // const leftElement = document.getElementById('left')
    // const leftValue = getElementValueById('left')
    // leftElement.innerText = leftValue-1;
    updateLeftCount()

    updateGrandTotal() 

    if(cartValue>4){
      const allButton = document.getElementsByClassName('add-btn')
      for(const btn of allButton){
        btn.setAttribute('disabled', true)
      }
    }
  })
}

function updateGrandTotal(status){
  if(status === undefined){
    const totalCost = getElementValueById('total-cost');
    document.getElementById('grand-total').innerText = totalCost;
  }else{
    const couponCode = document.getElementById('coupon-code').value;
    
    if(couponCode === 'love20'){
    const grandTotal = getElementValueById('grand-total')
    const discount = grandTotal*80/100;
    document.getElementById('grand-total').innerText = discount;
    document.getElementById('apply-btn').setAttribute('disabled', true) 
    }else{
      alert('Please provide a valid coupon Code!')
    }

  }
}

function updateTotalCost(value){
  const totalCost = getElementValueById('total-cost');
  const sum = totalCost + parseInt(value);
  document.getElementById('total-cost').innerText = sum;
}

function updateBudgetPrice(value){
  const budgetValue = getElementValueById('budget');
  document.getElementById('budget').innerText = budgetValue - value ;
}

function updateCartCount(){
  const cartValue =  getElementValueById('cart')
  document.getElementById('cart').innerText= cartValue + 1;
}

function updateLeftCount(){
  const leftValue = getElementValueById('left');
  document.getElementById('left').innerText = leftValue - 1;
}

function getElementValueById(id){
  const element = document.getElementById(id)
  const value = parseInt(element.innerText);
  return value;
}