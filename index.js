let tipo1 = 0,
  tipo2 = 0,
  f = 0;
function alertar() {
  let entrada = document.getElementById("entrada").innerText;
  alert(entrada);
}

function add(number) {
  let objeto = document.getElementById("entrada");
  let texto = objeto.innerText;
  let size = objeto.innerText.length - 1;
  let l = texto[size];
  if (l == "/" || l == "*" || l == "-" || l == "+") {
    f = 0;
  }
  document.getElementById("entrada").innerText += number;
}

function remover() {
  let objeto = document.getElementById("entrada");
  let texto = objeto.innerText;
  let size = objeto.innerText.length - 1;
  let l = texto[size];
  if (l == ".") {
    f = 0;
  }
  let t = objeto.innerText.length - 1;
  if (objeto.innerText == Infinity) {
    objeto.innerText = "";
    return;
  }
  objeto.innerText = objeto.innerText.slice(0, t);
}

function operador(ope) {
  let objeto = document.getElementById("entrada");
  let texto = objeto.innerText;
  let size = objeto.innerText.length - 1;
  let l = texto[size];
  if (l == undefined) {
    return;
  }
  if (l == "/" || l == "*" || l == "-" || l == "+" || l == ".") {
    if (l == "/" || l == "*") {
      tipo1 -= 1;
    } else if (l == "-" || l == "+") {
      tipo2 -= 1;
    }
    remover();
  }
  if (ope == "/" || ope == "*") {
    tipo1 += 1;
  } else if (ope == "-" || ope == "+") {
    tipo2 += 1;
  } else if (ope == ".") {
    f++;
  }
  if (f > 1 && ope == ".") {
    if (l == ".") {
      add(".");
    }
    return null;
  }
  add(ope);
}
function res1(dado) {
  let j = "";
  let k = "";
  var nome = dado;
  let p = false;
  let v = false;
  for (let i = 0; i < nome.length; i++) {
    let c = nome[i];
    if (c == "/" || c == "*") {
    } else if (c == "-" || c == "+") {
      p = true;
      k = "";
      k = k + c;
    } else {
      k = k + c;
    }
    if (c == "/" || c == "*") {
      v = true;
      for (var d = i + 1; d < nome.length; d++) {
        {
          let l = nome[d];
          if (l == "/" || l == "*" || l == "-" || l == "+") {
            break;
          }
          var x = parseFloat(nome.slice(i + 1, d + 1));
        }
      }
      let ope = c == "/" ? parseFloat(k) / x : parseFloat(k) * x;
      if (k[0] == "+") {
        j = "+";
      }
      var nome2 = nome.slice(0, i - k.length) + j + ope;
      nome = ope + nome.slice(d, nome.length);
      if (v) {
        break;
      }
    }
  }
  if (p) {
    return nome2;
  }
  return nome;
}

function res2(dado) {
  let k = "";
  var nome = dado;
  let v = false;
  let sinal = "";
  if (dado[0] == "-") {
    sinal = nome[0];
    nome = nome.slice(1, dado.length);
  }
  for (let i = 0; i < nome.length; i++) {
    let c = nome[i];
    if (c == "/" || c == "*" || c == "-" || c == "+") {
    } else {
      k = k + c;
    }
    if (c == "-" || c == "+") {
      let o = "";
      v = true;
      for (var d = i + 1; d < nome.length; d++) {
        {
          let l = nome[d];
          if (l == "/" || l == "*" || l == "-" || l == "+") {
            break;
          }
          var x = parseFloat(nome.slice(i + 1, d + 1));
        }
      }
      let ope =
        c == "-" ? parseFloat(sinal + k) - x : parseFloat(sinal + k) + x;
      k = "";
      nome = ope + nome.slice(d, nome.length);
      if (v) {
        break;
      }
    }
  }
  return nome;
}
function resultado() {
  let objeto = document.getElementById("entrada");
  let texto = objeto.innerText;
  let l = texto[texto.length - 1];
  if (l == "/" || l == "*" || l == "-" || l == "+" || l == ".") {
    return;
  }
  for (let i = 0; i < tipo1; i++) {
    texto = res1(texto);
  }
  for (let i = 0; i < tipo2; i++) {
    texto = res2(texto);
  }
  tipo1 = 0;
  tipo2 = 0;
  if (parseFloat(texto) % 1 == 0) {
    f = 0;
  } else {
    f = 2;
    if (texto.length > 17) {
      texto = parseFloat(texto).toPrecision(16);
      while (texto[texto.length - 1] == "0") {
        texto = texto.slice(0, texto.length - 1);
      }
    }
  }

  document.getElementById("entrada").innerText = texto;
}
