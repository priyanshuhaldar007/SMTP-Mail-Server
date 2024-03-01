const smtp_server = require('smtp-server').SMTPServer;

// Define your server options
const options = {
  // Optional authentication (comment out if not needed)
  allowInsecureAuth: true,
  authOptional: true,

  onConnect(session, callback) {
    console.log('On Connect: ',session.id);
    callback();
  },
  onMailFrom(address, session, callback) {
    console.log('On Mail From:',address.address, session.id);
    callback();
  },
  onRcptTo(address, session, callback) {
    console.log('On Mail From:',address.address, session.id);
    callback();
  },
  onData(stream, session, callback) {
    let message = '';
    stream.on('data', (chunk) => {
      message += chunk.toString();
    });
    stream.on('end', () => {
      console.log('\nReceived email:');
      console.log(message);

      callback();
    });
  }
};

const server = new smtp_server(options);

server.listen(25, () => {
  console.log('SMTP Server listening on port 25');
});
