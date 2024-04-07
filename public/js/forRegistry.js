/* <div class="registry">
<a href="#">Вход</a>
<p></p>
<a href="#">Регистрация</a>
</div> */

class forRegistry {

  constructor(formRegistry) {
    this.formRegistry = formRegistry;
    this.formElement = [];
  };
  addElement() {
    const createEnter1 = document.createElement('a');
    createEnter1.textContent = 'Вход';
    createEnter1.href = 'load'
    createEnter1.classList = 'join'
    const createEnter2 = document.createElement('p');
    const createEnter3 = document.createElement('a');
    createEnter3.textContent = 'Регистрация';
    createEnter3.href = 'registry'
    createEnter3.classList = 'reg'

    this.formRegistry.appendChild(createEnter1);
    this.formRegistry.appendChild(createEnter2);
    this.formRegistry.appendChild(createEnter3);
    this.formElement.push(this.formRegistry)
  }
};
const form = document.querySelector('.registry');
const forms = new forRegistry(form);
forms.addElement()
