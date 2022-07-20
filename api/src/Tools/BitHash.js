module.exports = class {

    #data = {};
    #bit = [];

    constructor(seed = 0){
        this.#bit = [0xdeadbeef ^ seed, 0x41c6ce57 ^ seed];
    }

    #calcBit = (h1, h2) => Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);

    #validate(text){
        for(let item in this.#data){
            if(this.#data[item] === text){
                return item;
            }
        }
        return "";
    }

    encrypt(text = ""){
        if(!text.length) throw new Error("El texto no puede estar vacio");
        let code = this.#validate(text);
        if(!code.length){
            text.split("").forEach((e, i) => {
                this.#bit[0] = Math.imul(this.#bit[0] ^ e.charCodeAt(i), 2654435761);
                this.#bit[1] = Math.imul(this.#bit[0] ^ e.charCodeAt(i), 1597334677);
            });
            this.#bit[0] = this.#calcBit(this.#bit[0], this.#bit[1]);
            this.#bit[1] = this.#calcBit(this.#bit[1], this.#bit[0]);
            const result = 4294967296 * (2097151 & this.#bit[1]) + (this.#bit[0] >>> 0);
            this.#data[result] = text;
            return result;
        }
        return code;
    }

    decrypt(text){
        if(this.#data.hasOwnProperty(text)){
            return this.#data[text];
        }
        throw new Error(`No se encripto el texto: ${text}`);
    }
}