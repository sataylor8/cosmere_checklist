import type { SystemName, BookName, Book, BookStatusType } from "./BookData";
import { default as BookData, InitialBookStatus, SystemNames } from "./BookData";

const LOCAL_STORAGE_KEY = 'COSMERE_CHECKLIST_DATA';
const CURRENT_VERSION = '0.0.0'; // Only increase for breaking data changes
type LocalStorageSchema = {
    data: BookStatusType,
    version: string
}

export function GetStaticBookData(systemKey: SystemName, bookKey: BookName): Book {
    return BookData[systemKey].books[bookKey]!;
}

export function GetBookStatus(systemKey: SystemName, bookKey: BookName): number {
    const storageData = GetStorageData();
    return storageData[systemKey].books[bookKey]!;
}

export function UpdateBookStatus(systemKey: SystemName, bookKey: BookName, status: number) {
    const storageData = GetStorageData();
    storageData[systemKey].books[bookKey] = status;
    WriteStorageData(storageData);
}

export function GetStorageData(): BookStatusType {
    let rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (rawData) {
        let localStorageData = JSON.parse(rawData) as LocalStorageSchema;
        if (localStorageData.version === CURRENT_VERSION) {
            return localStorageData.data;
        }
        return FixLegacyData(rawData);
    }

    WriteStorageData(InitialBookStatus);
    return InitialBookStatus;
}

function WriteStorageData(data: BookStatusType) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({data: data, version: CURRENT_VERSION}));
}

function FixLegacyData(rawData: string): BookStatusType {
    let versionedData = JSON.parse(rawData) as LocalStorageSchema;
    let bookData: BookStatusType;
    if (versionedData.version) {
        // out of date version
        bookData = versionedData.data;
    } else {
        // pre-versioned data
        bookData = JSON.parse(rawData) as BookStatusType;
    }

    SystemNames.forEach(system => {
        if (!bookData[system]) {
            bookData[system] = InitialBookStatus[system];
        }
    });

    Object.keys(bookData).forEach(key => {
        if (SystemNames.indexOf(key as SystemName) === -1) {
            delete bookData[key as SystemName];
        }
    });

    WriteStorageData(bookData);
    return bookData;
}