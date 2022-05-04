export function logger(string, value) {
    const letLogsDisplayInConsole = false;
    if (letLogsDisplayInConsole) {
      if (value == undefined) {
        return console.log(`${JSON.stringify(string)}`);
      } else {
        return console.log(`${JSON.stringify(string)}`, value);
      }
    } else {
      return;
    }
  }
  