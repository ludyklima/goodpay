import comunicacaoModal from './moduloComunicacaoDados.js'
import userLogin from './moduloDados.js'

class ControlerUserLogin {
  constructor(status) {
    this.status = status
  }
  checkLogin() {
    this.status = true
  }

  loginInfo(user, senha) {
    var infoCheck = userLogin.find(userLogin => userLogin.username === user)

    // Verifica se as informações vieram
    if (user === null || senha === null || user === '' || senha === '') {
      return comunicacaoModal.find(
        comunicacaoModal => comunicacaoModal.idModal === 'camposVazios1'
      )

      // Verifica se as informações existem
    } else {
      if (!infoCheck) {
        return comunicacaoModal.find(
          comunicacaoModal => comunicacaoModal.idModal === 'usuarioNaoExiste1'
        )

        // Confirma se a senha está válida
      } else {
        if (infoCheck.senha === senha) {
          this.checkLogin()
          return comunicacaoModal.find(
            comunicacaoModal => comunicacaoModal.idModal === 'loginExecutado1'
          )

          // Caso a senha não seja válida
        } else {
          return comunicacaoModal.find(
            comunicacaoModal => comunicacaoModal.idModal === 'falhaLogin1'
          )
        }
      }
    }
  }
}
const controlerUserLogin = new ControlerUserLogin()
export default controlerUserLogin
