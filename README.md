# 🏁 F1 Super Trunfo

Um aplicativo mobile simples, interativo e com design premium desenvolvido em **React Native** e **Expo**. O objetivo do projeto é apresentar cartas de pilotos lendários da Fórmula 1 no clássico formato de jogo de cartas *Super Trunfo*.

Este projeto foi construído com foco em componentes básicos do React Native, estilização com CSS via `StyleSheet` e consumo de dados estáticos em JavaScript.

---

## 🚀 Funcionalidades

*   **Design Premium F1:** Interface com tema escuro (*Dark Mode*), cabeçalhos com estilo automobilístico e cores dinâmicas para a borda e cabeçalho de cada carta com base na equipe do piloto.
*   **Deck de Cartas Colecionáveis:** Cada carta exibe informações completas:
    *   Nome do piloto.
    *   Biografia/Descrição detalhada.
    *   País de origem (com bandeira 🇧🇷 🇬🇧 🇳🇱 🇲🇨).
    *   Equipe de Fórmula 1.
    *   Nível de classificação (exibido visualmente por estrelas ⭐).
    *   Ilustração digital em alta qualidade do piloto/capacete.
    *   Código de identificação clássico do jogo (*A1, A2, A3, A4*).
*   **Navegação Interativa:**
    *   Botões **Anterior** e **Próximo** para navegar pelas cartas.
    *   Indicador de página/posição no deck (ex: `1 de 4`).
    *   **Seletor Rápido** no topo da tela com o sobrenome de cada piloto para acessar a carta desejada diretamente com um toque.
*   **Responsivo:** Envolvido por uma `ScrollView` para garantir que o conteúdo role perfeitamente em telas menores sem quebras de layout.

---

## 🛠️ Tecnologias Utilizadas

*   **Core:** React Native (Componentes: `View`, `Text`, `Image`, `ScrollView`, `TouchableOpacity`, `SafeAreaView`)
*   **Framework:** Expo SDK 54.0.0 (totalmente compatível com seu aplicativo Expo Go)
*   **Estilização:** CSS nativo via `StyleSheet`
*   **Imagens:** Ilustrações exclusivas em alta resolução geradas por IA

---

## 📂 Estrutura de Arquivos

```
f1-super-trunfo/
├── assets/                     # Imagens e ilustrações dos pilotos
│   ├── senna.jpg
│   ├── hamilton.jpg
│   ├── verstappen.jpg
│   └── leclerc.jpg
├── App.js                      # Tela principal e lógica do Super Trunfo
├── pilots.js                   # Banco de dados estático dos pilotos F1
├── package.json                # Gerenciador de dependências do projeto
└── README.md                   # Documentação do projeto
```

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
1.  [Node.js](https://nodejs.org/) (recomendado versão 18 ou superior).
2.  O aplicativo **Expo Go** instalado no seu celular (compatível com **SDK 54**).

---

## 🏃 Como Executar o Projeto

1.  **Instalar as Dependências:**
    Se você acabou de clonar ou baixar o projeto, execute no terminal:
    ```bash
    npm install
    ```

2.  **Iniciar o Servidor Expo:**
    Para rodar o servidor Metro do Expo (caso a porta padrão `8081` esteja ocupada por outro processo local, use a porta `8082`):
    ```bash
    npx expo start --port 8082
    ```
    *(Ou apenas `npm start` se a porta `8081` estiver livre).*

3.  **Visualizar no Celular:**
    *   Abra o aplicativo **Expo Go** no seu celular.
    *   Use a câmera do seu celular (ou a função de escaneamento de QR Code do próprio Expo Go) para ler o QR Code que aparecerá no terminal do seu computador.
    *   O aplicativo F1 Super Trunfo será carregado imediatamente no seu celular!

---

## 🏎️ Pilotos Cadastrados no Banco de Dados

*   **Ayrton Senna** (McLaren) - Brasil 🇧🇷 - ⭐⭐⭐⭐⭐
*   **Lewis Hamilton** (Mercedes) - Reino Unido 🇬🇧 - ⭐⭐⭐⭐⭐
*   **Max Verstappen** (Red Bull Racing) - Holanda 🇳🇱 - ⭐⭐⭐⭐⭐
*   **Charles Leclerc** (Ferrari) - Mônaco 🇲🇨 - ⭐⭐⭐⭐
