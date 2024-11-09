class Logger {
  static logLevels = ['info', 'warn', 'error'];

  #transport;

  constructor(logLevel = 'info', transport = console) {
    this.logLevel = logLevel;
    this.#transport = transport;
  }

  isLevelEnabled(targetLevel) {
    return (
      Logger.logLevels.indexOf(targetLevel) >=
      Logger.logLevels.indexOf(this.logLevel)
    );
  }

  info(message) {
    if (this.isLevelEnabled('info')) {
      return this.#transport.info(message);
    }
  }

  warn(message) {
    if (this.isLevelEnabled('warn')) {
      return this.#transport.warn(message);
    }
  }

  error(message) {
     if (this.isLevelEnabled('error')) {
      return this.#transport.error(message);
    }
  }
}

export default Object.freeze(new Logger('warn', console));
