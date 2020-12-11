import { refs } from '../../refs/refs';
import { data } from '../../data/data';
import { getAllContacts, postContact } from '../../api/api';

const contact = {
  name: '',
  number: '',
};

const onHandleInput = e => {
  const { name, value } = e.target;
  contact[name] = value;
};
getAllContacts().then(() => console.log(data.contacts)); // <- отрисовать данные в хтмл
const onHandleSumbit = e => {
  e.preventDefault();
  postContact(contact).then(() => refs.contactForm.reset());
};

refs.contactForm.addEventListener('input', onHandleInput);
refs.contactForm.addEventListener('submit', onHandleSumbit);
