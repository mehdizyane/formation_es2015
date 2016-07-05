export class InputManager{
  InputManager(listener) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', function(text) {
      listener(InputManager.clearCRLF(text));
    });
  }

  clearCRLF(line) {
    return line.replace(/[\n\r]/g, '');
  }
}