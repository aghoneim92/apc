export interface PersistenceService<T> {
  save(toSave: T): void
  loadAll(): T[]
}

export class LocalStorageService<T> implements PersistenceService<T> {
  key: string

  save(toSave: T) {
    const all = this.loadAll()

    localStorage.setItem(this.key, JSON.stringify(all.concat([toSave])))
  }

  loadAll(): T[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]')
  }
}
