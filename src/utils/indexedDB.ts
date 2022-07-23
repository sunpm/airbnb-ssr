export default class DB {
  private readonly dbName: string // 数据库名称

  constructor(dbName: string) {
    this.dbName = dbName
  }

  // 打开数据库
  openStore(storeName: string, keyPath: string, indexs: string[] = []) {
    const request = window.indexedDB.open(this.dbName, 1)
    request.onsuccess = event => {
      console.log('数据库打开成功')
      console.log(event)
    }

    request.onerror = event => {
      console.log('数据打开失败')
      console.log(event)
    }

    request.onupgradeneeded = event => {
      const { result }: any = event.target
      const store = result.createObjectStore(storeName, {
        autoIncrement: true,
        keyPath
      })

      indexs.length && indexs.forEach((index: string) => {
        store.createIndex(index, index, { unique: true })
      })

      store.transaction.oncomplete = (event: any) => {
        console.log('创建数据库成功')
      }

      console.log('数据库升级成功')
      console.log(event)
    }
  }
}
