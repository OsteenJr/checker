const subscribeBtn = document.getElementById('subBtn');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const amexBtn = document.getElementById('amexBtn');
const submitBtn = document.getElementById('submitBtn');
const paragraph = document.getElementById('para');
const paragraphTwo = document.getElementById('para2');



submitBtn.onclick = function() {
    if (subscribeBtn.checked) {
        paragraph.textContent = "You have subscribed to the newsletter.";
    } else {
        paragraph.textContent = "You have not subscribed to the newsletter.";
    }
    

    if (visaBtn.checked) {
        paragraphTwo.textContent += " You have selected Visa.";
    } else if (masterCardBtn.checked) {
        paragraphTwo.textContent += " You have selected MasterCard.";
    } else if (amexBtn.checked) {
        paragraphTwo.textContent += " You have selected American Express.";
    } else {
        paragraphTwo.textContent += " No payment method selected.";
    }

}