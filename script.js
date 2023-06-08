const form = document.forms.creditcard;

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardBank = document.querySelector("#bank-name");
const cardSystem = document.getElementById('bank-system')

const cardSystemImage = document.getElementById('system')
const cardNumberText = document.querySelector(".number-vl")
const cardHolderText = document.querySelector(".name-vl")
const cardExpirationText = document.querySelector(".expiration-vl")
const cardBankText = document.querySelector(".bank-vl")
const cardSystemCHange = document.querySelector('.system')

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumberText.innerText = "0000 0000 0000 0000";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumberText.innerHTML = valuesOfInput
        }
    }
})

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "NAME SURNAME";
    } else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
})

cardBank.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardBankText.innerHTML = "Сбербанк";
    } else {
        cardBankText.innerHTML = e.target.value[0].toUpperCase()+ e.target.value.slice(1) ;
    }
})

cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "01/23";
    } else {
        const valuesOfInput = e.target.value.replace("/", "");

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
})

cardSystem.addEventListener('change', () => {
  const option = cardSystem.options[cardSystem.selectedIndex].value;
  switch (option) {
    case 'МИР':
      system.src = './mir.svg';
      break;
    case 'MasterCard':
      system.src = './mastercard.png';
      break;
    case 'VISA':
      system.src = './Visa.svg';
      break;
    case 'American Express':
      system.src = './American.png';
      break;
    case 'Maestro':
      system.src = './maestro.png';
      break;
  }
});

form.addEventListener("submit", function(e) {
	e.preventDefault();
	const body = {}
    
    let newRow = document.getElementById('myTable')
    let row = document.createElement('tr')
    newRow.append(row)

	for (let i = 0; i < form.elements.length; i++) {        
		let el = form.elements[i];
        
		if (el.name) {            
            let c_td = document.createElement('td')	;	
            c_td.innerText = el.value;	            
            row.append(c_td)
		}
	}
	form.reset()
    system.src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg";
    cardExpirationText.innerHTML = "01/23"
    cardBankText.innerHTML = "Сбербанк";
    cardHolderText.innerHTML = "NAME SURNAME";
    cardNumberText.innerText = "0000 0000 0000 0000";
})