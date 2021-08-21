let promoUsed = false;  // for check promo
let percent = 0; //initial  percentage

// -------- Function-----
// function for set the value 
function setValue(id,val) {
    document.getElementById(id).innerText = val;
}
// ---function for get the value----
function getValue(id) {
    return document.getElementById(id).innerText;
}
// ---function for showing extra memory price---
function showMemoryPrice(val) {
    setValue('extra-memory-price',val);
}
// ---function for showing extra storage price---
function showStoragePrice(val) {
    setValue('extra-storage-price',val);
}
//----function for showing delivery charge---- 
function showDeliveryCharge(val) {
    setValue('delivery-charge-price',val);
}
// ---function for get the total price---
function getTotalPrice()
{
    const bestPrice = parseInt(getValue('best-price'));
    const memoryPrice = parseInt(getValue('extra-memory-price'));
    const storagePrice = parseInt(getValue('extra-storage-price'));
    const deliveryCharge = parseInt(getValue('delivery-charge-price'));
    return bestPrice + memoryPrice + storagePrice + deliveryCharge;
}
// ---function for showing total price without promo---
function showTotalPrice() {
    const totalPrice = getTotalPrice();
    setValue('total-price',totalPrice);
}
// ---function for showing total price with promo---
function showTotalWithPromo() {
    if(promoUsed == true) percent = 20;
    const totalPrice = getTotalPrice();
    const coupon = (totalPrice*percent)/100;
    setValue('total-with-promo-price',totalPrice-coupon);
}

// ============Buttons
// --- memory button 8GB ---- 
document.getElementById('memory-8gb-btn').addEventListener('click',function() {
    showMemoryPrice(0);
    showTotalPrice();
    showTotalWithPromo();
})
// ----memory button 16GB-----  
document.getElementById('memory-16gb-btn').addEventListener('click',function() {
    showMemoryPrice(180);
    showTotalPrice();
    showTotalWithPromo();
})
// ---storage button 256GB SSD---
document.getElementById('storage-256gb-btn').addEventListener('click',function(){
    showStoragePrice(0);
    showTotalPrice();
    showTotalWithPromo();
})
// ---storage button 512GB SSD---- 
document.getElementById('storage-512gb-btn').addEventListener('click',function(){
    showStoragePrice(100);
    showTotalPrice();
    showTotalWithPromo();
})
//----storage button  1TB SSD ---
document.getElementById('storage-1tb-btn').addEventListener('click',function(){
    showStoragePrice(180);
    showTotalPrice();
    showTotalWithPromo();
})
// ---Free delivery -- 
document.getElementById('delivery-free-btn').addEventListener('click',function(){
    showDeliveryCharge(0);
    showTotalPrice();
    showTotalWithPromo();
})
// ----Paid delivery --- 
document.getElementById('delivery-paid-btn').addEventListener('click',function(){
    showDeliveryCharge(20);
    showTotalPrice();
    showTotalWithPromo();
})
// ---button--Promo apply ---
document.getElementById('promo-apply-btn').addEventListener('click',function(){
    const couponInput = document.getElementById('promo-input').value;
    if(couponInput == 'stevekaku' && promoUsed==false) {
        promoUsed = true;
        showTotalWithPromo();
    }
    document.getElementById('promo-input').value = '';
})