/* eslint-disable @typescript-eslint/no-explicit-any */
export const Logger = {
  log: (...messages: any[]) => console.log(...messages),
  error: (...messages: any[]) => console.error(...messages),
  warn: (...messages: any[]) => console.warn(...messages),
  info: (...messages: any[]) => console.info(...messages),
};
