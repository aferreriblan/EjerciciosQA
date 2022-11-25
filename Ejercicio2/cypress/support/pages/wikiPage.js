class wiki{
    xpathBusquedaPrimerProceso = "//p[contains(.,'primer proceso')]";

    constructor(){
        //this.url = 'variables.baseUrl'

    }
 


    buscarResultadoWiki = function (palabraClave, filename){
        cy.xpath(palabraClave).scrollIntoView();
        cy.xpath(palabraClave).screenshot(filename);
        

    }
    
    tomarCaptura = function(filename) {
        cy.viewport(1280, 720);
        cy.screenshot(filename);
    }


}

export default new wiki();
