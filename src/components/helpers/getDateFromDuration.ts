const checkNullableValue = (value: number, measurement: string) => (value === 0 ? '' : `${value} ${measurement}`);

export const getDateFromDuration = (duration: number) => {
    const sec = Math.floor(duration / 100);
    const min = Math.floor(sec / 60);
    const hours = Math.floor(min / 60);

    return `${checkNullableValue(hours, 'ч.')} ${checkNullableValue(min % 60, 'мин.')} ${checkNullableValue(sec % 60, 'сек.')}`;
};
