import { makeAutoObservable } from "mobx"

export default class tokenParCheck{
    constructor(){
        this._isAuthPar = false
        this._userPAR= {}
        makeAutoObservable(this)
    }
    setIsAuthPar(bool){
        this._isAuthPar = bool
    }
    setUserPAR(userPAR){
        this._userPAR = userPAR
    }

    get isAuthPar() {
        return this._isAuthPar
    }
    get userPAR(){
        return this._userPAR
    }

}