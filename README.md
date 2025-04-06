# Valorant Agents Viewer

Este projeto é uma aplicação React que consome a [API pública do Valorant](https://valorant-api.com) para exibir os agentes jogáveis do jogo. A aplicação mostra informações como nome, imagem, descrição e papel de cada agente, com os dados traduzidos para **português brasileiro**.

---

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API.
- **CSS**: Estilização da aplicação.
- **Valorant API**: Fonte oficial de dados dos personagens do jogo.

---

## ⚙️ Funcionalidades

- Exibição da lista de agentes jogáveis do Valorant.
- Visualização de nome, descrição, papel e imagem de cada agente.
- Filtro automático para remover duplicatas e agentes não jogáveis.
- Conteúdo exibido em **português brasileiro** através do parâmetro `?language=pt-BR`.

---

## ▶️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/valorant-agents-viewer.git
```

### 2. Acesse o diretório do projeto:

```bash
cd valorant-agents-viewer
```

### 3. Instale as dependências:

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto

```
public/             # Arquivos públicos
src/
├── components/     # Componentes reutilizáveis (futuramente)
├── pages/          # Telas principais (opcional)
├── services/       # Funções de integração com a API (opcional)
├── App.js          # Componente principal
├── App.css         # Estilos gerais
└── index.js        # Ponto de entrada da aplicação
```

---

## 📜 Scripts Disponíveis

```bash
npm start
```
Executa o aplicativo em modo de desenvolvimento.

```bash
npm run build
```
Gera uma versão otimizada da aplicação para produção.

```bash
npm test
```
Executa os testes (caso implementados).

```bash
npm run eject
```
Remove a configuração padrão do Create React App. **Atenção: operação irreversível!**

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📚 Recursos Adicionais

- [Documentação da Valorant API](https://valorant-api.com)
- [Documentação do React](https://reactjs.org)
- [Create React App](https://create-react-app.dev)
