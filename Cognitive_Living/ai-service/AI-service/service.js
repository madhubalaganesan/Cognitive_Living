// This is the Predition service code sample to train the neural network model with 
// collected home data.

var brain = require('brain');

var fs = require('fs');

// Training data for temperature, humidity and switch response
var training_data = JSON.parse(fs.readFileSync('training.json', 'utf8'));


var net = new brain.NeuralNetwork();
// Training the neural network
net.train(training_data);

// Predict a switch response based on a temperature and humidity input
var output = net.run([0.22, 0.11]);     // 0.00112