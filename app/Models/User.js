'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    // 
    this.addHook('beforeCreate', ['UserHook.setDefaults', 'UserHook.hashPassword'])
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }

  static get hidden() {
    return ['password']
  }

  static get roles() {
    return ['admin', 'manager', 'user']
  }

  static get admins() {
    return ['admin@admin.com']
  }

}

module.exports = User
