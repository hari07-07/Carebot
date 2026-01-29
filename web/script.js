const ESP_IP = "http://ESP_IP_ADDRESS";

function sendCmd(command) {
  fetch(`${ESP_IP}/${command}`)
    .then(() => console.log("Command sent:", command))
    .catch(err => console.error(err));
}
