export interface CRUDService<T> {
  save(toSave: T): void
  loadAll(): T[]
}

export class LocalStorageCRUDService<T> implements CRUDService<T> {
  key: string

  save(toSave: any) {
    const all = this.loadAll()

    localStorage.setItem(this.key, JSON.stringify(all.concat([toSave])))
  }

  loadAll() {
    return JSON.parse(localStorage.getItem(this.key) || '[]')
  }
}
