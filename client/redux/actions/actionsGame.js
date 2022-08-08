// name
// continent
// population
// latitud
// longitud
// area

export const hemisphere = (country, attempt) => {
  let { latitud } = country;
  let latitudAttempt = attempt.latitud;
  let hemisphere = latitud > 0 ? "North" : "South";
  let tryHemisphere = latitudAttempt > 0 ? "North" : "South";
  if (hemisphere === tryHemisphere) return { asserted: true, hemisphere };
  return { asserted: false, tryHemisphere };
  //depende de asserted el color del la pista(rojo/verde), tryHemisphere muestra la data del pais del intento
};

export const continent = (country, attempt) => {
  let { continent } = country;
  let tryCont = attempt.continent;
  if (tryCont === continent) return { asserted: true, continent };
  return { asserted: false, tryCont };
  //depende de asserted el color del la pista(rojo/verde), tryCont muestra la data del pais del intento
};

export const population = (country, attempt) => {
  let { population } = country;
  let tryPop = attempt.population;

  //  mostrando diferencia;

  if (tryPop === population) return { arrowDirection: null, population };
  let dif;

  if (tryPop < population) {
    dif = population - tryPop;
    return { arrowDirection: "up", dif };
  }
  if (tryPop > population) {
    dif = tryPop - population;
    return { arrowDirection: "down", dif };
  }

  //  mostrando poblacion del pais seleccionado en el intento

  // if(tryPop === population)return {arrowDirection: null, population};
  // if(tryPop < population){
  //     return {arrowDirection: 'up', tryPop};
  // }
  // if(tryPop > population){
  //     return {arrowDirection: 'down', tryPop};
  // };

  // si arrowDirection tiene valor la pista va en rojo,
  // se setea la flecha en su direccion y se muestra la poblacion del intento
};

export const area = (country, attempt) => {
  let { area } = country;
  let tryArea = attempt.area;

  if (tryArea === area) return { arrowdirection: null, area };
  if (tryArea < area) {
    return { arrowdirection: "up", area };
  }
  if (tryArea > area) {
    return { arrowdirection: "down", area };
  }
  // = que population
};

export const coordinates = (country, attempt) => {
  let { latitud, longitud } = country;
  let [lat, long] = [attempt.latitud, attempt.longitud];
  let res = [];
  let setDirection = (tryValue, realValue, type) => {
    let out;
    if (tryValue === realValue) {
      out = "";
    } else if (tryValue > realValue) {
      out = type === "lat" ? "S" : "W";
    } else if (tryValue < realValue) {
      out = type === "lat" ? "N" : "E";
    }
    res.push({ direction: out, type });
  };
  setDirection(lat, latitud, "lat");
  setDirection(long, longitud, "long");
  let arrowDirVer = "";
  let arrowDirHor = "";
  let direction = [];
  res = res.map((p) => {
    direction.push(p.direction);
    if (p.type === "lat" && p.direction !== "") {
      arrowDirVer = p.direction === "S" ? "Down" : "Up";
    } else if (p.type === "long" && p.direction !== "") {
      arrowDirHor = p.direction === "W" ? "Left" : "Rigth";
    }
  });
  let arrowD = arrowDirVer + arrowDirHor;
  res = { direction: direction.join(""), arrowD };
  return res;
  //direrection va a ser (n,s,w,e)o (nw,ne,sw,se), que es la data que muestra la pista,
  //arrowD es para setear la flecha de la pista.
};
