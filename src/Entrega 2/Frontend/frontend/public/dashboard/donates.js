let selectedAmount = null;
let customAmount = '';

function selectAmount(amount) {
    selectedAmount = amount;
    customAmount = '';
    document.getElementById('custom-amount').value = '';
    
    // Remove seleção anterior
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Adiciona seleção ao botão clicado
    event.target.classList.add('selected');
    
    updateGenerateButton();
}

function handleCustomAmount(input) {
    // Remove caracteres não numéricos
    let value = input.value.replace(/\D/g, '');
    customAmount = value;
    selectedAmount = null;
    
    // Remove seleção dos botões
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Formata o valor
    if (value) {
        input.value = value;
    }
    
    updateGenerateButton();
}

function getSelectedValue() {
    if (customAmount) return parseFloat(customAmount);
    return selectedAmount;
}

function updateGenerateButton() {
    const btn = document.getElementById('generate-btn');
    const amount = getSelectedValue();
    
    if (amount && amount > 0) {
        btn.disabled = false;
        btn.textContent = `Gerar PIX de R$ ${amount.toFixed(2)}`;
    } else {
        btn.disabled = true;
        btn.textContent = 'Gerar PIX de R$ 0,00';
    }
}

function generatePix() {
    const amount = getSelectedValue();
    if (amount && amount > 0) {
        document.getElementById('final-amount').textContent = `R$ ${amount.toFixed(2)}`;
        document.getElementById('selection-screen').style.display = 'none';
        document.getElementById('pix-screen').style.display = 'block';
    }
}

function copyPixKey() {
    const pixKey = document.getElementById('pix-key').value;
    const pixCode = "00020126580014BR.GOV.BCB.PIX0136doe@exemplo.com.br52040000530398654041.005802BR5925EXEMPLO DOACAO6009SAO PAULO62070503***6304ABCD";
    
    navigator.clipboard.writeText(pixCode).then(() => {
        const copyText = document.getElementById('copy-text');
        copyText.textContent = '✅ Copiado!';
        
        setTimeout(() => {
            copyText.textContent = '📋 Copiar';
        }, 2000);
    });
}

function resetDonation() {
    selectedAmount = null;
    customAmount = '';
    document.getElementById('custom-amount').value = '';
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    updateGenerateButton();
    
    document.getElementById('selection-screen').style.display = 'block';
    document.getElementById('pix-screen').style.display = 'none';
}