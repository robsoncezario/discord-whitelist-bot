import NodeCache from 'node-cache'

const cache : NodeCache = new NodeCache()

export default class CacheService {
  static get(key: string) {
    return cache.get(key)
  }

  static set(key: string, value: any, timeout: number = 3600): boolean {
    return cache.set(key, value, timeout)
  }

  static getMany(keys: Array<string>) {
    return cache.mget(keys)
  }

  static setMany(data: any): boolean {
    return cache.mset(data)
  }

  static has(key: string) : boolean {
    return cache.has(key);
  }

  static del(key: string) {
    return cache.del(key);
  }
}