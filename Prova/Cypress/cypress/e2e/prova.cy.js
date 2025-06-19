describe('Prova', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

  it('Criação de um usuário válido', () => {
    let infos = criarUsuario();
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.on('window:alert', (alertText) => {expect(alertText).to.equal('Sign up successful.');
  })
  });

  it('Tentiva de criação de um usuário sem Username', () => {
    let infos = criarUsuario();
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.on('window:alert', (alertText) => {expect(alertText).to.equal('Please fill out Username and Password.');
  })
  });

  it('Tentiva de criação de um usuário sem Senha', () => {
    let infos = criarUsuario();
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.on('window:alert', (alertText) => {expect(alertText).to.equal('Please fill out Username and Password.');
  })
  });

  it('Login válido', () => {
    let infos = criarUsuario();
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#login2').click();
      cy.wait(1000);
      cy.get('#loginusername').type(infos[0]);
      cy.wait(1000);
      cy.get('#loginpassword').type(infos[1]);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  })

  it('Login inválido sem senha', () => {
    let infos = criarUsuario();
      const alerts = []
        cy.on('window:alert', (alertText) => {
          alerts.push(alertText)
        })
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#login2').click();
      cy.wait(1000);
      cy.get('#loginusername').type(infos[0]);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.then(() => {
      expect(alerts[0]).to.equal('Sign up successful.')
      expect(alerts[1]).to.equal('Please fill out Username and Password.')
      })
  })
  

  it('Login inválido sem usuário', () => {
    let infos = criarUsuario();
    const alerts = []
      cy.on('window:alert', (alertText) => {
          alerts.push(alertText)
        })
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#login2').click();
      cy.wait(1000);
      cy.get('#loginpassword').type(infos[1]);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.then(() => {
      expect(alerts[0]).to.equal('Sign up successful.')
      expect(alerts[1]).to.equal('Please fill out Username and Password.')
      })
  })

  it('Compra inválida sem Nome', () => {
    let infos = criarUsuario();
      const alerts = []
      cy.on('window:alert', (alertText) => {
          alerts.push(alertText)
        })
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.wait(1000);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#login2').click();
      cy.wait(1000);
      cy.get('#loginusername').type(infos[0]);
      cy.wait(1000);
      cy.get('#loginpassword').type(infos[1]);
      cy.wait(1000);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#country').type('Brasil');
      cy.get('#city').type('São Paulo');
      cy.get('#card').type('1234567890123456');
      cy.get('#month').type('12');
      cy.get('#year').type('2025');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.then(() => {
      expect(alerts[0]).to.equal('Sign up successful.')
      expect(alerts[1]).to.equal('Please fill out Name and Creditcard.')
      })

  })

   it('Compra inválida sem Cartão de crédito', () => {
    let infos = criarUsuario();
      const alerts = []
      cy.on('window:alert', (alertText) => {
          alerts.push(alertText)
        })
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.wait(1000);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#login2').click();
      cy.wait(1000);
      cy.get('#loginusername').type(infos[0]);
      cy.wait(1000);
      cy.get('#loginpassword').type(infos[1]);
      cy.wait(1000);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').type(infos[0]);
      cy.get('#country').type('Brasil');
      cy.get('#city').type('São Paulo');
      cy.get('#month').type('12');
      cy.get('#year').type('2025');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.then(() => {
      expect(alerts[0]).to.equal('Sign up successful.')
      expect(alerts[1]).to.equal('Please fill out Name and Creditcard.')
      })

  })


  it('Compra válida', () => {
    let infos = criarUsuario();
      cy.get('#signin2').click();
      cy.wait(1000);
      cy.get('#sign-username').type(infos[0]);
      cy.wait(1000);
      cy.get('#sign-password').type(infos[1]);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get('#login2').click();
      cy.wait(1000);
      cy.get('#loginusername').type(infos[0]);
      cy.wait(1000);
      cy.get('#loginpassword').type(infos[1]);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.wait(500);
      cy.get('.col-sm-12 > .btn').click();
      cy.get('.active > .nav-link').click();
      cy.wait(500);
      cy.get('[onclick="byCat(\'notebook\')"]').click();
      cy.wait(500);
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.wait(500);
      cy.get('.col-sm-12 > .btn').click();
      cy.get('.active > .nav-link').click();
      cy.wait(500);
      cy.get('[onclick="byCat(\'monitor\')"]').click();
      cy.wait(500);
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.wait(500);
      cy.get('.col-sm-12 > .btn').click();
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').type(infos[0]);
      cy.get('#country').type('Brasil');
      cy.get('#city').type('São Paulo');
      cy.get('#card').type('1234567890123456');
      cy.get('#month').type('12');
      cy.get('#year').type('2025');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get('.confirm').click();
  })

});

function criarUsuario() {
  let hora = new Date().getHours().toString();
  let randomNumber = getRandomIntInclusive(1, 9);
  let minutos = new Date().getMinutes().toString();
  let segundos = new Date().getSeconds().toString();
  let ID = hora + minutos + segundos + randomNumber + randomNumber + 'Teste';
  let senha = hora + minutos + segundos + randomNumber + randomNumber + 'Teste';
  let infos = [ ID, senha];

  return infos;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
