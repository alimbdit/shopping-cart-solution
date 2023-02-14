function incrementQuantity (id){
    const quantity = document.getElementById(id);
    const quantityString = quantity.value;
    const previousQuantity = parseInt(quantityString);
    const newQuantity = previousQuantity + 1;
    quantity.value = newQuantity;
}
function decrementQuantity (id){
    const quantity = document.getElementById(id);
    const quantityString = quantity.value;
    const previousQuantity = parseInt(quantityString);
    
    const newQuantity = previousQuantity - 1;
    quantity.value = newQuantity;
}

function updateProductNumber (isIncrease, id){
    const quantity = document.getElementById(id);
    const quantityString = quantity.value;
    const previousQuantity = parseInt(quantityString);
    let newQuantity;
    if(isIncrease === true){

        newQuantity = previousQuantity + 1;
    }
    else{
        newQuantity = previousQuantity - 1;
    }
    quantity.value = newQuantity;
    
    return newQuantity;
}

function updateTotalPrice(id, quantity, price){
    const totalPrice = price*quantity;
    const totalElement = document.getElementById(id);
    totalElement.innerText = totalPrice;
}

function setTextValueById(id, value){
    const textValue = document.getElementById(id);
    textValue.innerText = value;


}

function subTotal(phoneTotal, caseTotal){
    const phoneTotalString = document.getElementById(phoneTotal).innerText;
    const caseTotalString = document.getElementById(caseTotal).innerText;

    const subTotalPrice = parseInt(phoneTotalString) + parseInt(caseTotalString);

    setTextValueById('sub-total', subTotalPrice);
    
    const taxString = (subTotalPrice * .1).toFixed(2);
    const tax = parseFloat(taxString);

    setTextValueById('tax-amount', tax);

    const totalAmount = subTotalPrice + tax;
    setTextValueById('total-amount', totalAmount);

}