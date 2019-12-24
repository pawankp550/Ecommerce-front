import { URL } from '../config'

export const authenticate = (data, next) => {
    if (typeof window !== undefined) {
        window.localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signOut = (next) => {
    if (typeof window !== undefined) {
        window.localStorage.removeItem('jwt')
        next()

        return fetch(`${URL}signout`)
                .then(() => {
                    console.log('signedout')
                })
                .catch((e) => {
                    console.log('error: ', e)
                })
    }
}