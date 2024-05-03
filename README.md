# myTodoList: Ethereum Task Manager

## Introduction
This project is a decentralized application (DApp) built on Ethereum that allows users to create and manage task lists. Users can create new tasks, mark them as completed, and view lists of completed and uncompleted tasks.

## Technologies Used
- **Solidity**: Used to implement smart contracts that manage the application logic on the Ethereum blockchain.
- **Truffle**: Framework for Ethereum development, testing, and deployment.
- **Ganache**: A personal Ethereum blockchain for local development and testing.
- **Node.js**: Used to create the backend of the application and interact with the Ethereum blockchain.
- **Metamask**:  Secure wallet for Ethereum assets and DApps, enabling easy interaction with the blockchain.

## Dependencies
Make sure you have installed the following dependencies before running the application:
- [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
- [Ganache](https://www.trufflesuite.com/ganache)
- [Node.js (version 18.15.0)](https://nodejs.org/en/download/)
- [Metamask] (https://metamask.io/) 

## Setup
1. Clone this repository to your computer.
2. Run `npm install` to install the project dependencies.
3. Start Ganache to launch your local Ethereum blockchain.
4. Compile and migrate the smart contracts using Truffle:
```bash
truffle compile
truffle migrate [--reset]
```
5. Start the Node.js server:
```bash
npm run dev
```
6. Visit `http://localhost:3000` in your browser to use the application.

## Usage
- **Create a new task**: Enter description of the task in the creation form and submit it.
- **View tasks**: View the list of completed and uncompleted tasks.
- **Mark a task as completed**: Enter the id of the task that completed.

## Contributions
Contributions are welcome! If you want to contribute to this project, follow these steps:
1. Fork this repository.
2. Create a branch for your contribution (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License
This project is released under the [MIT License](LICENSE).
