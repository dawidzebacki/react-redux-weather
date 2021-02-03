export enum TempUnit {
  CELCIUS,
  FAHRENHEIT,
}

export const kelvinToCelcius = (num: number) => Math.round(num - 273.15);
export const celciusToFahrenheit = (num: number) =>
  Math.round(num * (9 / 5) + 32);
export const fahrenheitToCelcius = (num: number) =>
  Math.round(((num - 32) * 5) / 9);
export const kmToMile = (num: number) => Math.round(num / 1.60934);
export const mileToKm = (num: number) => Math.round(num * 1.60943);
