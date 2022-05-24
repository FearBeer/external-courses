const sendRequest = (method, url, body = null) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('ERROR', xhr.response);
    } else {
      console.log(xhr.response);
    }
  };

  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send(JSON.stringify(body));
};

module.exports = sendRequest;
