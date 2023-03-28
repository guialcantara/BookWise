import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const categoriesList = [
  {
    name: 'Educação',
    id: '1',
  },
  {
    name: 'Computação',
    id: '2',
  },
  {
    name: 'Fantasia',
    id: '3',
  },
  {
    name: 'Ficção científica',
    id: '4',
  },
  {
    name: 'Horror',
    id: '5',
  },
  {
    name: 'HQs',
    id: '6',
  },
  {
    name: 'Suspense',
    id: '7',
  },
]

const booksList = [
  {
    //Ficção
    id: '1',
    name: 'A revolução dos bichos',
    author: 'George Orwell',
    summary:
      "Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. O próprio Orwell, adepto do socialismo e inimigo de qualquer forma de manipulação política, sentiu-se incomodado com a utilização de sua fábula como panfleto. Depois das profundas transformações políticas que mudaram a fisionomia do planeta nas últimas décadas, a pequena obra-prima de Orwell pode ser vista sem o viés ideológico reducionista. Mais de sessenta anos depois de escrita, ela mantém o viço e o brilho de uma alegoria perene sobre as fraquezas humanas que levam à corrosão dos grandes projetos de revolução política. É irônico que o escritor, para fazer esse retrato cruel da humanidade, tenha recorrido aos animais como personagens. De certo modo, a inteligência política que humaniza seus bichos é a mesma que animaliza os homens. Escrito com perfeito domínio da narrativa, atenção às minúcias e extraordinária capacidade de criação de personagens e situações, A revolução dos bichos combina de maneira feliz duas ricas tradições literárias: a das fábulas morais, que remontam a Esopo, e a da sátira política, que teve talvez em Jonathan Swift seu representante máximo. 'A melhor sátira já escrita sobre a face negra da história moderna.' Malcolm Bradbury 'Um livro para todos os tipos de leitor, seu brilho ainda intacto depois de sessenta anos.' Ruth Rendell",
    cover_url: 'a-revolucao-dos-bichos',
    total_pages: 152,
  },
  {
    //Educação, Computação
    id: '2',
    name: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: 'Zeno Rocha',
    summary:
      "Este não é um livro tradicional. Você não encontrará o mesmo formato ou estrutura que um livro comum possui. Na verdade, este livro foi projetado para ser o mais simples e objetivo possível. Você pode seguir a ordem dos capítulos ou lê-los individualmente. Tudo é independente e não depende de conhecimentos anteriores. No final de cada hábito, você encontrará uma seção marcada como 'Perguntas e Respostas', onde entrevisto desenvolvedores sênior e líderes de tecnologia de várias empresas para entender como eles chegaram lá. Fui atrás de gigantes da tecnologia como Google, Amazon, Microsoft e Adobe. Startups poderosas como GitHub, Spotify, Elastic, Segment, GoDaddy e Shopify. E até organizações estabelecidas, como Citibank, BlackBerry e The New York Times.",
    cover_url: '14-habitos-de-desenvolvedores-altamente-produtivos',
    total_pages: 135,
  },
  {
    //Ficção
    id: '3',
    name: 'O Fim da Eternidade',
    author: 'Isaac Asimov',
    summary:
      'De forma leve e bem-humorada, Asimov realiza questionamentos ainda bastante contemporâneos, como o comodismo do ser humano, sua evolução perante as outras espécies e a busca incessante do controle sobre a vida dos outros. A obra também propõe reflexões sobre o nosso comportamento diante das necessidades pessoais e as situações que envolvem um bem maior. romance, o leitor é apresentado a Andrew Harlan, um Eterno, membro de uma organização que monitora e controla o Tempo. Um técnico que lida diariamente com o destino de bilhões de pessoas no mundo inteiro: sua função é iniciar Mudanças de Realidade, ou seja, alterar o curso da História. Condicionado por um treinamento rigoroso e por uma rígida autodisciplina, Harlan aprendeu a deixar as emoções de lado na hora de fazer seu trabalho. Tudo vai bem até o dia em que ele conhece a atraente Noÿs Lambent, uma mulher que faz com que ele passe a rever seus conceitos em nome de algo tão antigo quanto o próprio tempo: o amor. Agora ele terá de arriscar tudo – não apenas seu emprego, mas sua vida a de Noÿs e até mesmo o curso da História. Tido como um dos melhores trabalhos de Asimov, este clássico nos mostra mais uma vez por que o Bom Doutor é considerado o grande mestre da ficção científica moderna.',
    cover_url: 'o-fim-da-eternidade',
    total_pages: 256,
  },
  {
    //fantasia
    id: '4',
    name: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    summary:
      'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.',
    cover_url: 'o-hobbit',
    total_pages: 336,
  },
]

const categoriesOnBooksList = [
  { book_id: '1', category_id: '4' },
  { book_id: '2', category_id: '1' },
  { book_id: '2', category_id: '2' },
  { book_id: '3', category_id: '4' },
  { book_id: '4', category_id: '3' },
]
async function main() {
  await prisma.category.createMany({
    data: categoriesList,
  })

  await prisma.book.createMany({
    data: booksList,
  })

  await prisma.categoriesOnBooks.createMany({
    data: categoriesOnBooksList,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
