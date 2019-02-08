'use strict'

class HomeController {

    async index({view}){
        return view.render('index')
    } 
}

module.exports = HomeController