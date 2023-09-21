import fetch from 'node-fetch';

export function webhook() {
  const url ='https://chat.googleapis.com/v1/spaces/AAAACUj9h9o/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3IR6VoJYW_nIeI0L9Cj6Kn4CvmS1yi8V0RNyxj6nwd8'
  const webhookURL = 'https://chat.googleapis.com/v1/spaces/3JG2JUAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=b8PZ2xm0eHXfN3npJ6mcmcvn1oG5oIADPAhuLdhPWBU'; // Replace with your actual API key and token

  const data = JSON.stringify({
    'text': 'hi umer from node.js webhook fired!',
  });
  
  return fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  });
}

// module.exports = webhook;
