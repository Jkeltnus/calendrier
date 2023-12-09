const cardDates = document.querySelectorAll('.card-date');
const cardFee = document.querySelector('.card-fee-wrapper');
const btnClose = document.querySelector('.close-btn');
const changeMsg = document.querySelector('.change-msg');
const dateMsg = document.querySelector('.fee-msg .date');
const feeMsg = document.querySelector('.fee-msg .msg');
let cpt = 0;
const messages = [
  'La bonne grâce est le vrai don des fées - Sans elle on ne peut rien, avec elle on peut tout.',
  "L'erreur ne tue pas, pourtant la bétise est meurtière.",
  'Une bonne cuisinière est une fée qui dispense le bonheur.',
  "Pour que la vie soit un conte de fée, il suffit peut-être simplement d'y croire.",
  "Je suis comme la fée clochette, j'ai besoin d'applaudissements pour vivre !",
];

const handleDisplayFeeCard = (index) => {
  const noDay = index + 1;

  // construire une date avec le numéro de la case selectionné
  const date = new Date(Date.UTC(2023, 11, noDay));
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const dateSelected = date.toLocaleDateString('fr-FR', options);

  // Modifier la date du msg
  dateMsg.textContent = dateSelected;

  cardFee.classList.add('show');
};

const handleCloseFeeCard = () => {
  cardFee.classList.remove('show');
};

const handleChangeFeeMsg = () => {
  console.log('test');
  cpt++;
  if (cpt === 5) cpt = 0;
  feeMsg.textContent = messages[cpt];
};

cardDates.forEach((el, index) => {
  // Recuper la date du jour puis le jour du mois
  const today = new Date();
  const dayWeek = today.getDate();
  if (index + 1 === dayWeek) {
    el.addEventListener('click', () => handleDisplayFeeCard(index));
  }
});

btnClose.addEventListener('click', handleCloseFeeCard);

changeMsg.addEventListener('click', handleChangeFeeMsg);
