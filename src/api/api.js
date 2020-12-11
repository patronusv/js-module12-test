import { data } from '../data/data';
import { refs } from '../refs/refs';
const baseUrl = 'https://module-12-df0fb-default-rtdb.firebaseio.com';
export const getAllContacts = () => {
  loadingOnStart();
  return fetch(`${baseUrl}/contacts.json`)
    .then(response => response.json())
    .then(response => {
      console.log('response :>> ', response);
      const contactsArray = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          //   console.log(key);
          contactsArray.push({ id: key, ...response[key] });
        }
      }
      data.contacts = [...contactsArray];
      console.log(data.contacts);
    })
    .catch(error => console.log(error))
    .finally(loadingOnFinish);
};
export const postContact = contact => {
  loadingOnStart();
  return fetch(`${baseUrl}/contacts.json`, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => {
      data.contacts = [...data.contacts, { ...contact, id: response.name }];
      console.log(data);
    })
    .catch(error => console.log(error))
    .finally(loadingOnFinish);
};
const loadingOnStart = () => {
  refs.loader.innerHTML = '...loading';
};
const loadingOnFinish = () => {
  refs.loader.innerHTML = '';
};
const setError = error => {
  refs.loader.innerHTML = error;
};
const resetError = () => {
  refs.loader.innerHTML = '';
};
