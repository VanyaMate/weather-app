export const convertYandexCoordsToWeatherCoords = function (yandexCoords: string): string {
    return yandexCoords.split(' ').reverse().join(',');
}