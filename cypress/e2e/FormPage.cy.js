describe('HomePageHeader Test', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000')
    })
  
    it('Anasayfadaki buton sipariş sayfasına yönlendiriyor mu?', () => {
      
      cy.get('button').click();
    });
  })

  describe('FormPage Tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    });

    it('Pizza boyutu seçiliyor mu?', ()=>{
        cy.get('[type="radio"]').first().check()
    })

    it('Ekstra malzemelerden seçim yapılabiliyor mu?', ()=>{
      cy.get('[type="checkbox"]').check();
    })
  })