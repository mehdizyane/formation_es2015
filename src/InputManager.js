function InputManager(listener) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function(text) {
    listener(InputManager.clearCRLF(text));
  });
}

InputManager.clearCRLF = function(line) {
  return line.replace(/[\n\r]/g, '');
};

if(typeof(module) != "undefined")
  module.exports = InputManager;