export function wsHandling(){
    let socket = new WebSocket('ws://localhost:8080/ws');
    console.log("attempting websocket connection...");

    socket.onopen = function(e) {
        console.log("Connection established!");
    };

    socket.onclose = function(event) {
        console.log('Socket is closed.', event);
    };

    socket.onerror = function(error) {
        console.error('Socket error: ', error.message, 'Closing socket');
    };
}