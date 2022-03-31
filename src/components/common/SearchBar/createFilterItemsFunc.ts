import { ReactText } from 'react';

interface AdditionalSearchStringGetter<T extends object> {
    (item: T): ReactText | undefined | null;
}

type AdditionalSearchStringGetters<T extends object> = AdditionalSearchStringGetter<T>[] | AdditionalSearchStringGetter<T>;

export interface SearchSettings<T extends object> {
    searchKeys?: (keyof T)[];
    additionalSearchStringGetters?: AdditionalSearchStringGetters<T>;
}

function getItemAdditionalSearchStrings<T extends object>(item: T, getters: AdditionalSearchStringGetters<T>) {
    const result: string[] = [];

    const getAndPushSearchString = ((getString: AdditionalSearchStringGetter<T>) => {
        const searchString = getString(item)?.toString().toLowerCase();

        if (searchString) {
            result.push(searchString);
        }
    });

    if (Array.isArray(getters)) {
        getters.forEach(getString => { getAndPushSearchString(getString); });
    } else {
        getAndPushSearchString(getters);
    }

    return result;
}

function stringifyItems<T extends object>(
    items: T[],
    searchSettings: SearchSettings<T>
): string[][] {
    const searchKeys = searchSettings.searchKeys as string[];
    const { additionalSearchStringGetters } = searchSettings;

    return items.map(item => {
        const itemSearchStrings = Object.entries(item)
            .filter(([key, value]) => value != null && searchKeys.includes(key))
            .map(([, value]) => String(value).toLowerCase());

        if (additionalSearchStringGetters) {
            const additionalSearchStrings = getItemAdditionalSearchStrings(item, additionalSearchStringGetters);

            itemSearchStrings.push(...additionalSearchStrings);
        }

        return itemSearchStrings;
    });
}

export function createFilterItemsFunc<T extends object>(
    items: T[],
    searchSettings: SearchSettings<T>
) {
    const stringifiedItems = stringifyItems(items, searchSettings);

    return (searchText: string) => {
        const lowerCaseSearchText = searchText.toLowerCase();

        return (
            items.reduce<T[]>((filteredItems, item, index) => {
                const stringifiedItem = stringifiedItems[index];

                if (stringifiedItem.some(str => str.includes(lowerCaseSearchText))) {
                    filteredItems.push(item);
                }

                return filteredItems;
            }, [])
        );
    };
}
