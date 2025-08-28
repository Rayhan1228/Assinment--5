let totalLoveCount = 0;
let totalCopyCount = 0;
let coinCount = 100;

const loveButtons = document.querySelectorAll('.loveBtn');
loveButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const span = btn.nextElementSibling;
    let count = parseInt(span.textContent);
    count++;
    span.textContent = count;

    totalLoveCount++;
    document.getElementById('totalLoveCount').textContent = totalLoveCount;
  });
});

const copyButtons = document.querySelectorAll('.copyBtn');
copyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const number = btn.parentElement.previousElementSibling.querySelector('h1.text-2xl').textContent;
    navigator.clipboard.writeText(number);

    totalCopyCount++;
    document.getElementById('totalCopyCount').textContent = totalCopyCount;

    alert('Number copied: ' + number);
  });
});

const callButtons = document.querySelectorAll('.callBtn');
callButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement.previousElementSibling;
    const serviceName = card.querySelector('h1.text-xl').textContent;
    const number = card.querySelector('h1.text-2xl').textContent;

    if (coinCount >= 20) {
      coinCount -= 20;
      document.getElementById('coinCount').textContent = coinCount;

      const li = document.createElement('li');
      li.textContent = `${serviceName} - ${number} (${new Date().toLocaleTimeString()})`;
      document.getElementById('callHistory').appendChild(li);
    } else {
      alert("Not enough coins!");
    }
  });
});

function clearHistory() {
  document.getElementById('callHistory').innerHTML = "";
}