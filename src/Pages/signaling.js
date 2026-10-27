import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Your Node.js backend

export default socket;
