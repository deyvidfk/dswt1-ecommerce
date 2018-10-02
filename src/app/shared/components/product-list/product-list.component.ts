import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products:  Array<ProductItem> = new Array<ProductItem>();

  ngOnInit() {
  
    
    this.products.push({
      id:1,
      name:"A Arte da Guerra. O Tratado Militar Mais Antigo do Mundo ",
      description:"“A arte da guerra”, do guerreiro-filósofo chinês Sun Tzu, escrito cerca de 500 anos a.C., é um dos mais sábios e importantes tratados de estratégia militar da história. Ensinando princípios como: evitar a força e atacar a fraqueza, vencer sem lutar e que o primeiro inimigo a se enfrentar é a si mesmo, este livro milenar é um clássico entre os mais variados tipos de público. E, nos últimos tempos, tornou-se um verdadeiro manual de marketing e estratégias empresariais, que orienta executivos e líderes políticos.",
      value:19.27,
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51AY5As2IKL._SX321_BO1,204,203,200_.jpg",
      author:"Kiyosaki,Robert T.",
      images:["https://images-na.ssl-images-amazon.com/images/I/51AY5As2IKL._SX321_BO1,204,203,200_.jpg"]
    }) ;




    this.products.push({
      id:2,
      name:"Harry Potter e o Prisioneiro de Azkaban - Ilustrado",
      description:"“A arte da guerra”, do guerreiro-filósofo chinês Sun Tzu, escrito cerca de 500 anos a.C., é um dos mais sábios e importantes tratados de estratégia militar da história. Ensinando princípios como: evitar a força e atacar a fraqueza, vencer sem lutar e que o primeiro inimigo a se enfrentar é a si mesmo, este livro milenar é um clássico entre os mais variados tipos de público. E, nos últimos tempos, tornou-se um verdadeiro manual de marketing e estratégias empresariais, que orienta executivos e líderes políticos.",
      value:19.27,
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-Pn%2BW3A5L._SX427_BO1,204,203,200_.jpg",
      author:"Kiyosaki,Robert T.",
      images:["https://images-na.ssl-images-amazon.com/images/I/61-Pn%2BW3A5L._SX427_BO1,204,203,200_.jpg","https://images-na.ssl-images-amazon.com/images/I/71IIzaFQbIL.jpg"]
    }) 




    this.products.push({
      id:3,
      name:"Pai Rico, Pai Pobre - Edição de 20 Anos",
      description:"Celebrando 20 anos como o livro n° 1 em finanças pessoais. A escola prepara as crianças para o mundo real? Essa é a primeira pergunta com a qual o leitor se depara neste livro. O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. O mundo mudou; a maioria dos jovens tem cartão de crédito, antes mesmo de concluir os estudos, e nunca teve aula sobre dinheiro, investimentos, juros etc. Ou seja, eles vão para a escola, mas continuam financeiramente improficientes, despreparados para enfrentar um mundo que valoriza mais as despesas do que a poupança. Para o autor, o conselho mais perigoso que se pode dar a um jovem nos dias de hoje é: “Vá para a escola, tire notas altas e depoisprocure um trabalho seguro.” O fato é que agora as regras são outras, e não existe mais emprego garantido para ninguém. Pai Rico, Pai Pobre demonstra que a questão não é ser empregado ou empregador, mas ter o controle do próprio destino ou delegá-lo a alguém. É essa a tese de Robert Kiyosaki neste livro substancial e visionário. Para ele, a formação proporcionada pelo sistema educacional não prepara os jovens para o mundo que encontrarão depois de formados. E como os pais podem ensinar aos filhos o que a escola relega? Essa é outra das muitas perguntas que o leitor encontra em Pai Rico, Pai Pobre. Nesse sentido, a proposta do autor é facilitar a tarefa dos pais. Quem entende de contabilidade deve esquecer seus conhecimentos acadêmicos, pois muitas das teorias expostas por Robert Kiyosaki contrariam os princípios contábeis comumente aceitos, e apresentam uma valiosa e moderna percepção do modo como se realizam os investimentos. A sociedade sofre mudanças radicais e, talvez, de proporções maiores do que as ocorridas em séculos passados. Não existe bola de cristal, mas algo é certo: a perspectiva global de transformações transcende nossa realidade imediata. Aconteça o que acontecer, só existem duas alternativas: segurança ou independência financeira. E o objetivo de Pai Rico, Pai Pobre é instruir o leitor e despertar sua inteligência financeira e a de seus filhos. “A principal razão pela qual as pessoas têm problemas financeiros é que passaram anos na escola, mas não aprenderam nada sobre dinheiro. O resultado é que elas aprendem a trabalhar por dinheiro… mas nunca a fazê-lo trabalhar para elas.” — Robert Kiyosaki",
      value:41.90,
      imageUrl:"https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9730193&qld=90&l=430&a=-1",
      author:"Kiyosaki,Robert T.",
      images:[]
    })  

    this.products.push({
      id:4,
      name:"A Morte do Capitão Marvel",
      description:"Como protetor do universo e verdadeiro defensor da Terra, o guerreiro kree Capitão Mar-Vell triunfou contra adversários grandes e pequenos. Mas, ao receber o diagnóstico de que está com câncer, o herói se vê diante de um inimigo que nem mesmo seu vasto poder é capaz de derrotar… e tanto ele ",
      value:27.90,
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61G7gyLfZjL._SX369_BO1,204,203,200_.jpg",
      author:"Kiyosaki,Robert T.",
      images:["https://images-na.ssl-images-amazon.com/images/I/61G7gyLfZjL._SX369_BO1,204,203,200_.jpg"]

    }) 




    this.products.push({
      id:5,
      name:"Me Poupe!: 10 passos para nunca mais faltar dinheiro no seu bolso",
      description:"Nathalia Arcuri é criadora do Me Poupe!, maior canal de finanças do mundo no YouTub",
      value:23.90,
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51gvLj0Sv3L._SX346_BO1,204,203,200_.jpg",
      author:"Kiyosaki,Robert T.",
      images:["https://images-na.ssl-images-amazon.com/images/I/51gvLj0Sv3L._SX346_BO1,204,203,200_.jpg"]

    }) 




    this.products.push({
      id:0,
      name:"Sapiens - Uma Breve História da Humanidade",
      description:"Nathalia Arcuri é criadora do Me Poupe!, maior canal de finanças do mundo no YouTub",
      value:23.90,
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51fuvXO6wvL._SX346_BO1,204,203,200_.jpg",
      author:"Kiyosaki,Robert T.",
      images:["https://images-na.ssl-images-amazon.com/images/I/51fuvXO6wvL._SX346_BO1,204,203,200_.jpg","https://images-na.ssl-images-amazon.com/images/I/71YI46d8KRL.jpg","https://images-na.ssl-images-amazon.com/images/I/81JrOTApkKL.jpg"]

    }) 

  }
}
