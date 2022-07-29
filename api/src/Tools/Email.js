const nodemailer = require("nodemailer");

module.exports = new class {

    #path = "api/src/Tools/Email.js";
    #caption = "";
    #message = "";

    async connect() {
        try {
            return await this.#transport().verify()
            .then(result => {
                console.log("Servidor listo para enviar correos");
                return result;
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: connect`);
                return false;
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: connect`);
            return false;
        }
    }

    async send(email = "", name = "", index = 0, token = "") {
        try {
            this.#description(name, index, token);
            return await this.#transport().sendMail({
                from: `Proyecto Final Mercadito <${process.env.TOOLS_EMAIL}>`, // sender address
                to: `${email}`, // list of receivers
                subject: this.#caption,
                html: this.#show(name)
            })
            .then(() => true)
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: send`);
                return false;
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: send`);
            return false;
        }
    }

    #transport() {
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.TOOLS_EMAIL, // generated ethereal user
                pass: process.env.TOOLS_PASSWORD, // generated ethereal password
            },
        });
    }

    #show(name = ""){
        return `<style>
                    h1{
                        color:red;
                    }
                </style>
                <h1 >Proyecto Final WorldGame</h1>
                <br>
                <p>Hola ${name}, ${this.#message}
                <br>
                <small>
                    Mercadito
                    <br>Soy Henry<br>
                </small>`
    }

    #description(name = "", index = 0, token = ""){
        if(index === 0) {
            this.#caption = `Bienvenido ${name}`;
            this.#message = `tu registro fue existo, esperamos que tu estancia sea excelente.</p>`;
        }
        if(index === 1) {
            this.#caption = "Actualización de datos";
            this.#message = `tu actulización de datos fue modificada correctamente.</p>`;
        }
        if(index === 2) {
            this.#caption = "Olvido su contraseña";
            this.#message = `se realizó la solicitud de cambio de contraseña, para seguir con el proceso,
                                        por favor haga click en el siguiente enlace:
                                        <a href="${process.env.FRONTEND_URL}/new-password/${token}" target="_blank">Link</a></p>`;
        }
        if(index === 3) {
            this.#caption = "Contraseña Modificada";
            this.#message = `tu actulización de contraseñia fue modificada correctamente.</p>`;
        }
        if(index === 4){
            this.#caption = "Premium activado";
            this.#message = `su cambio a cuenta premium fue activado exitosamente.</p>`;
        }
    }
}