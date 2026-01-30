import type { SystemName, BookName, Book, BookStatusType, System } from "./BookData";
import { default as BookData, InitialBookStatus } from "./BookData";

const LOCAL_STORAGE_KEY = 'COSMERE_CHECKLIST_DATA';

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
    let data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
        return JSON.parse(data) as BookStatusType;
    }

    WriteStorageData(InitialBookStatus);
    return InitialBookStatus;
}

function WriteStorageData(data: BookStatusType) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}