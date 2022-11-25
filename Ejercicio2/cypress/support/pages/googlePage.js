
class google{

    
    xpathBotonCookies= "//button/div[contains(text(),'Aceptar todo')]";
    xpathCajaBusqueda= "//input[@name = 'q']";
    xpathResultadoWiki= "//*[contains(text(), 'Wikipedia')]/ancestor::a";
    
    constructor(){
        //this.url = 'variables.baseUrl'

    }
    
    navegar = function(url){
        cy.visit(url);

    }
    

    hacerClick = function(boton){
        cy.xpath(boton).click();

    }
    typear = function (busqueda, entrada){
        
        cy.xpath(busqueda).type(entrada);
        cy.xpath(busqueda).type('{enter}');

    }


    tomarCaptura = function(filename) {
        cy.viewport(1280, 720);
        cy.screenshot(filename);
    }


}

export default new google();