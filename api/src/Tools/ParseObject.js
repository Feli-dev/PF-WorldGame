module.exports = (data = "") =>{
    let json = JSON.stringify(data) || null;
    return JSON.parse(json) || null;
}