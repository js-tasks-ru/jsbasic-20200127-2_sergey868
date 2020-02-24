/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement("ul");
  let friends2 = friends.map(element=>

    `<li>${element.firstName}  ${element.lastName}</li>`).join('');


  list.innerHTML = friends2;

  return list;

}
