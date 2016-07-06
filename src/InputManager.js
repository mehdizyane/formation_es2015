export class InputManager{
  constructor(listener) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', function(text) {
      listener(InputManager.clearCRLF(text));
    });
  }

  static clearCRLF(line) {
    return line.replace(/[\n\r]/g, '');
  }
}