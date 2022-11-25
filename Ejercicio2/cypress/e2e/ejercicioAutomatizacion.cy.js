import google from '../support/pages/googlePage';
import wiki from '../support/pages/wikiPage';

describe('Ejercicio Automatización de una web', () => {

  var parrafo

  it('Buscar en wikipedia y tomar screenshot', () => {

    cy.fixture('variables.json').then((variables) => {

        //Navegar a google
        google.navegar(google.baseUrl);
        google.tomarCaptura('Paso-1-cookies');
        //ACeptar cookies
        google.hacerClick(google.xpathBotonCookies);
        google.tomarCaptura('Paso-2-google');
        //Escribir búsqueda
        google.typear(google.xpathCajaBusqueda,variables.busqueda);
        google.tomarCaptura('Paso-3-resultados-google');
        //Buscar resultado wikipedia
        google.hacerClick(google.xpathResultadoWiki);
        wiki.tomarCaptura('Paso-4-entrada-wikipedia');
        wiki.buscarResultadoWiki(wiki.xpathBusquedaPrimerProceso, 'Paso-5-primer-proceso-automatizado');
  
       
       


        
    })
  })


})