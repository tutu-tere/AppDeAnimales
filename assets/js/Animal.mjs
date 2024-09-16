class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  getNombre() {
    return this.#nombre;
  }

  getEdad() {
    return this.#edad;
  }

  getImg() {
    return this.#img;
  }
  
  getSonido() {
    return this.#sonido;
  }

  setComentarios(comentarios) {
    this.#comentarios = comentarios;
  }
}

class Leon extends Animal {
  rugir() {
    return 'Rugido';
  }
}

class Lobo extends Animal {
  aullar() {
    return 'Aullido';
  }
}

class Oso extends Animal {
  grunir() {
    return 'Gruñido';
  }
}

class Serpiente extends Animal {
  sisear() {
    return 'Siseo';
  }
}

class Aguila extends Animal {
  chillar() {
    return 'Chillido';
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
