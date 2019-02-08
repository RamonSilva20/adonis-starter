'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'HomeController.index').as('root').middleware('auth')


Route.on('/login').render('auth.login').as('login')
Route.on('/signup').render('auth.signup').as('signup')
Route.on('/resend').render('auth.resend').as('resend')
Route.on('/forgot').render('auth.forgot').as('forgot')
Route.get('/reset/:token', 'AuthController.reset_view').as('reset')
Route.get('/confirm/:token', 'AuthController.confirm').as('confirm')
Route.get('/logout', 'AuthController.logout').as('logout')

Route.group(() => {

    Route.post('/signup', 'AuthController.signup').as('auth.signup').validator('auth/Signup')
    Route.post('/login', 'AuthController.login').as('auth.login').validator('auth/Login')
    Route.post('/resend', 'AuthController.resend').as('auth.resend').validator('auth/Resend')
    Route.post('/forgot', 'AuthController.forgot').as('auth.forgot').validator('auth/Forgot')
    Route.post('/reset', 'AuthController.reset').as('auth.reset').validator('auth/Reset')

}).prefix('auth')

