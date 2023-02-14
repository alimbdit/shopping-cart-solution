document.getElementById('case-btn-plus').addEventListener('click', function(){
    // incrementQuantity ('case-input');
    const caseQuantity = updateProductNumber (true, 'case-input');
    updateTotalPrice('case-total', caseQuantity, 59);
    subTotal("phn-total-price", "case-total");
});
document.getElementById('case-btn-minus').addEventListener('click', function(){
    // decrementQuantity ('case-input');
    const caseQuantity = updateProductNumber (false, 'case-input');
    updateTotalPrice('case-total', caseQuantity, 59);
    subTotal("phn-total-price", "case-total");

});