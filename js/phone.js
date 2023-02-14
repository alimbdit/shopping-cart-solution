document.getElementById('phn-btn-plus').addEventListener('click', function(){
    const phoneQuantity = updateProductNumber (true, 'phn-input');
    const price = 1219;
    updateTotalPrice('phn-total-price', phoneQuantity, price);
    subTotal("phn-total-price", "case-total");
});

document.getElementById('phn-btn-minus').addEventListener('click', function(){
    const phoneQuantity = updateProductNumber (false, 'phn-input');
    const price = 1219;
    updateTotalPrice('phn-total-price', phoneQuantity, price);

    subTotal("phn-total-price", "case-total");

});