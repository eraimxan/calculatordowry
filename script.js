document.getElementById('submit').addEventListener('click', calculateDowry);

function calculateDowry() {
    let basePrice = 100; // Starting price

    // Education Level
    const education = document.getElementById('education').value;
    let educationCoeff = 1;
    if (education === 'undergraduate') educationCoeff = 1.5;
    else if (education === 'college') educationCoeff = 1.2;
    else if (education === 'high_school') educationCoeff = 1.05;
    else if (education === 'middle_school') educationCoeff = 0.9;

    // Family Net Worth
    const networth = document.getElementById('networth').value;
    let networthCoeff = 1;
    if (networth === 'above_10k') networthCoeff = 2;
    else if (networth === 'between_5k_10k') networthCoeff = 1.5;
    else if (networth === 'below_5k') networthCoeff = 1.2;

    // Caste
    const caste = document.getElementById('caste').value;
    let casteValue = 0;
    if (caste === 'brahmin') casteValue = 100;
    else if (caste === 'kshatriya') casteValue = 50;
    else if (caste === 'vaishya') casteValue = 20;
    else if (caste === 'shudra') casteValue = 10;
    else if (caste === 'untouchable') casteValue = -50;

    // Skills
    let skillsValue = 0;
    if (document.getElementById('musician').checked) skillsValue += 10;
    if (document.getElementById('cook').checked) skillsValue += 20;
    if (document.getElementById('easygoing').checked) skillsValue += 15;
    if (document.getElementById('singer').checked) skillsValue += 10;

    // Age
    let ageCoeff = 1;
    if (document.getElementById('age_18_23').checked) ageCoeff = 1.5;
    else if (document.getElementById('age_24_27').checked) ageCoeff = 1.2;
    else if (document.getElementById('age_28').checked) ageCoeff = 0.95;

    // Reputation
    let reputationCoeff = 1;
    if (document.getElementById('gossip_parents').checked) reputationCoeff *= 0.85;
    if (document.getElementById('gossip_character').checked) reputationCoeff *= 0.9;
    if (document.getElementById('general_gossip').checked) basePrice -= 20;

    // Final calculation
    let finalPrice = basePrice * educationCoeff * networthCoeff * ageCoeff * reputationCoeff;
    finalPrice += casteValue + skillsValue;

    // Update the DOM
    document.getElementById('result').innerText = `Final Dowry Price: $${finalPrice.toFixed(2)}`;

    // CSS change to indicate result display
    document.getElementById('result').style.color = 'green';
}
