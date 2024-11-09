export class Logger {
  static logLevels = ['info', 'warn', 'error'];
  static #loggerIntsance = null;

  #logLevel;
  #transport;

  constructor(logLevel = 'info', transport = console) {
    if (Logger.#loggerIntsance) {
      throw new TypeError('Logger is not constructable, use getInstance() instead');
    }

    this.#logLevel = logLevel;
    this.#transport = transport;

    Logger.#loggerIntsance = this;
  }

  #isLevelEnabled(targetLevel) {
    return (
      Logger.logLevels.indexOf(targetLevel) >=
      Logger.logLevels.indexOf(this.#logLevel)
    );
  }

  info(message) {
    if (this.#isLevelEnabled('info')) {
      return this.#transport.info(message);
    }
  }

  warn(message) {
    if (this.#isLevelEnabled('warn')) {
      return this.#transport.warn(message);
    }
  }

  error(message) {
     if (this.#isLevelEnabled('error')) {
      return this.#transport.error(message);
    }
  }

  static getInstance() {
    if (!Logger.#loggerIntsance) {
      Logger.#loggerIntsance = new Logger('warn', console);
    }

    return Logger.#loggerIntsance;
  }
}

export default Object.freeze(new Logger('warn', console));
