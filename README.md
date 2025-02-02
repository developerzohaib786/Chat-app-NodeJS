# Chat App using Node.js and Socket.io

A real-time chat application built with **Node.js**, **Express**, and **Socket.io**.

## Features
- **Real-time messaging** using WebSockets
- **Express.js** for backend server
- **Static file serving** for frontend assets
- **Easy setup and usage**

## Installation

### Prerequisites
Make sure you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository
```sh
git clone https://github.com/developerzohaib786/Chat-app-NodeJS.git
cd Chat-app-NodeJS
```

### Install Dependencies
```sh
npm install
```

### Start the Server
```sh
node index.js
```
Or, if you have **nodemon** installed:
```sh
nodemon index.js
```

### Open the Chat App
Open your browser and go to:
```
http://localhost:9000/
```

## Project Structure
```
Chat-app-NodeJS/
├── public/          # Static files (HTML, CSS, JS)
├── index.js         # Main server file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Technologies Used
- **Node.js** – Backend runtime environment
- **Express.js** – Web framework for Node.js
- **Socket.io** – Real-time bidirectional event-based communication
- **HTML/CSS/JS** – Frontend for user interface

## How It Works
1. A user opens the chat app in their browser.
2. The client connects to the server via **WebSockets**.
3. Messages are emitted in real-time to all connected users.

## Future Enhancements
- User authentication
- Private/group chats
- Message history storage using a database (MongoDB)
- UI improvements

## Contributing
Pull requests are welcome! If you find any issues, feel free to open an issue in the repository.


