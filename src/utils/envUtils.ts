require("dotenv/config");

export function env(key: string, default_value: any) {
    const value = process.env[key];
    return value === undefined ? default_value : value;
  }