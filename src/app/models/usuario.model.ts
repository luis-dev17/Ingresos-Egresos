

export class Usuario {

    static fromFirebase( { nombre,email, uid  } ) {
        return new Usuario( uid, nombre, email );
    }


    constructor(
        public uid: string,
        public nombre: string,
        public email: string
    ){}

}
