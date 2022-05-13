//alert("Seja Bem Vindo");
//prompt("digite seu nome");
//document.write("iniciando e javascript");
//resp=confirm("será que vai chover?");

//alert("um retorno de carro \ bem no meio desta lina");
//alert("\"isto não saiu como deveria ser!\"disse ela");
//alert("esta linha tem tabulção\ taqui");

/*var a,b;
a = 5;
b = "5 kg de açucar";
document.write("o valor da variavel A é:"+ a);
document.write("<p>"+"o valor da variavel B é:"+b+ "</p>");
document.write("<p>"+"o valor da variavel A dividido por 2 é:"+a/2+ "</p>");
document.write("<p>"+"o valor da variavel B dividido por 2 é:"+b/2+ "</p>");*/



/*var a,inteiro,flutuante;
a = "48.78 kg de açucar";
inteiro = parseInt(a);
flutuante = parseFloat(a);

document.write("o valor da variavel A é:"+ a);
document.write("<p>"+"o valor numerico inteiro da variavel é:"+inteiro+ "</p>");
document.write("<p>"+"o valor da variavel A dividido por 2 é:"+inteiro/2+ "</p>");
document.write("<p>"+"o valor da variavel decimal da variavel é:"+flutuante+ "</p>");*/


/*document.write("<p><b>"+"usando o metodo toUpperCase"+"</p></b>");
A = new String ("ola pessoal");
b = new String("seja bem vindo ao javascript");
document.write(A.toUpperCase());
document.write(b.toUpperCase());
document.write("<p><b>"+"você pode usar:"+"</b></p>");
document.write("<p>"+ A.toUpperCase() + b.toUpperCase()+"</p>");
document.write("<p><b>" + "Usando o metodo toLowerCase" + "</p></b>");

document.write(A.toUpperCase());
document.write(b.toLowerCase());
document.write("<p><b>"+ "você poderá usar:"+"</p></b>");
document.write("<p>"+ A.toLowerCase()+ b.toUpperCase()+ "</p>");*/


hoje = new Date(); 

xDia = hoje.getDay();// é responsavel para mostrar o dia da semana da matriz
diaSemana = new Array(7);
diaSemana[0] = "domingo"; 
diaSemana[1] = "Segunda-feira"; 
diaSemana[2] = "Terça-feira"; 
diaSemana[3] = "Quarta-feira"; 
diaSemana[4] = "quinta-feira"; 
diaSemana[5] = "Sexta-feira"; 
diaSemana[6] = "Sabado";

pratododia = new Array(7);
pratododia[0] ="churrasco";
pratododia[1] = "virado a paulista"; 
pratododia[2] = "Rabada com polenta"; 
pratododia[3] = "Costela assada com mandioca frita"; 
pratododia[4] = "Macarronada com Frango Assado"; 
pratododia[5] = "arroz carreteiro com costelinha"; 
pratododia[6] = "Feijoada";

precododia = new Array(7);
precododia[0] ="32,00";
precododia[1] = "22,00"; 
precododia[2] = "24,00"; 
precododia[3] = "20,00"; 
precododia[4] = "19,00"; 
precododia[5] = "22,00"; 
precododia[6] = "35,00";


document.write("o numero da semana é:"+""+(xDia + 1));
document.write("<p><b>"+ "hoje é:"+ diaSemana[xDia]);
document.write("<p><b>"+"o prato do dia é:"+ pratododia[xDia]);
document.write("<p><b>"+"o preço é: R$ " + precododia[xDia]);






















