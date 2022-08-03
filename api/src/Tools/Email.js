const nodemailer = require("nodemailer");
require('dotenv').config();

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

    async send(email = "", name = "", index = 0, id = 0) {
        try {
            this.#description(name, index, id);
            return await this.#transport().sendMail({
                from: `Final Project WorldGame <${process.env.TOOLS_EMAIL}>`, // sender address
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
        return `
                <h1>Final Project WorldGame</h1>
                <br>
                <p>Hello ${name}, ${this.#message}
                <br>
                <small>
                    WorldGame
                    <br>Soy Henry<br>
                </small>`
    }

    #description(name = "", index = 0, id = 0){
        if(index === 0) {
            this.#caption = `Welcome ${name}`;
            this.#message = `Your registration was successful, we hope your stay is excellent.</p>`;
        }
        if(index === 1) {
            this.#caption = "Data update";
            this.#message = `Your data update was successfully modified.</p>`;
        }
        if(index === 2) {
            this.#caption = "Forgot your password";
            this.#message = `the password change request was made, to continue with the process,
            please click on the following link: <a href="${process.env.FRONTEND_URL}/new-password/${id}">Link</a>`
        }
        if(index === 3) {
            this.#caption = "Modified Password";
            this.#message = `Your password update was successfully changed.</p>`;
        }
        if(index === 4){
            this.#caption = "Premium activated";
            this.#message = `Your switch to premium account was successfully activated.</p>`;
        }
    }
}