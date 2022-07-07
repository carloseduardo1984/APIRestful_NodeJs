Primeiro vamos fazer a instalação do Node e NPM para Para Windows:

Vá para https://nodejs.org/en/download/ e clique na caixa Windows Installer referente a versão do seu Windows (32 ou 64bits).
Isso iniciará o download do instalador do Node.
 

O arquivo baixado será nomeado node-v<version-no.>-<architecture-type>.msi.

Exemplo do arquivo baixado >  

Após o download bem-sucedido do arquivo, clique para executar o instalador do mesmo. 

Siga as instruções fornecidas pelo instalador para concluir a instalação. Após a instalação, você terá o Node e o NPM instalados em sua máquina. e os comandos node e npm estarão disponíveis via linha de comando.

Verifique se a instalação bem sucedida :
 
Abra o prompt de comando do Windows  (busque na barra de pesquisa do Windows por “cmd”):
 

Digite os comandos:
node -v (clique enter e será exibida a versão intalada do node)

npm -v (clique enter e será exibida a versão intalada do npm)

 
Agora vamos iniciar o npm em nosso projeto no Vscode, crie e abra uma pasta vazia no Vscode: 

Abra o terminal do Vscode e insira o comando abaixo:

npm init -y
 

Vamos utilizar três pacotes para começar: 

	Express > Express é uma estrutura de aplicativo da Web que fornece muitos recursos incríveis e métodos utilitários HTTP.

	body-parser > body-parser é um middleware (método de interface) para análise de body (corpo do do código) que ajuda a processar o body de solicitações enviadas ao servidor express.

	nodemon > completamente opcional, mas o Nodemon é super útil porque atua como um observador de arquivos, recarregando nosso servidor quando fazemos alterações em nossos arquivos - útil!


Vamos instalá-los digitando no terminal do VSCode:

npm install express 

Clique enter e aguarde a instalação

npm install body-parser

Clique enter e aguarde a instalação


Depois do comando vamos lá …. 


Abra seu package.json   arquivo e verifique se a main de entrada está definida para nosso arquivo  server.js (nosso ponto de entrada principal), além de adicionar um script 'start' que iniciará nossa mágica de recarregamento do Nodemon.


Aqui algumas explicações:

Nossa API será um serviço de consulta de cadastro de usuários, conforme o arquivo json do projeto:
 

Em nossa estrutura o arquivo serve.js, como o proprio nome sugere irá fazer a inicialização das rotas de requisições, processo de leitura de nosso arquivo JSON via função “fs” e manterá a “escuta” de solicitações ativa na porta de internet local numero 3001. 
 

Nosso arquivo routes,js cria as rotas para as request solicitadas. As rotas são funções que tratam cada tipo de solicitação especifica, neste exemplo só temos uma resposta a uma request simple da base, porém aplicações de API pode conter métodos avançados para consultas como filtros, retorno com processos complexos, e até processamentos de banco de dados ou calculadoreas incorporadas ao servidos para atender o objetivo proposto da API.


O que estamos fazendo aqui é criar os métodos padrões para cada tipo de verbo, do HTTP.
São muito comuns em aplicações reais esses métodos (porém são renomeados para a exata função, mas para fins didáticos vai ser assim hoje), o famoso CRUD.

C – Create (POST)
R – Read (GET)
U – Update (PUT)
D – Delete (DELETE)

Por fim temos nosso arquivo de implementação dos métodos para cada rota, o users.js

 
Estamos também colocando o status da requisição (200), que significam sucesso, e de objeto. 

Feito isso, podemos testar (se nodemon não estiver rodando insira no terminal > npm start

Se tudo estiver correto você receberá a mensagem de que o servidor da nossa API está escutando a porta local 3001.
 
Agora vamos certificar que tudo está funcionando na prática, abra o browser (Chrome, Firefox, Edge ou  Edge por exemplo) e digite: http://localhost:3001/ e clique enter.
Você deverá visualizar nossa tela de abertura da API
 

Para consultar nossa base de dados do arquivo JSON, basta digitar no browser http://localhost:3001/users e clicar enter
 
Pronto temos nosso primeiro serviço cliente servidor em API Rest com NodeJS funcionando.
