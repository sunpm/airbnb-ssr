// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3

import { http } from '@/utils/http'
import IndexedDB from '@/utils/IndexedDB'

const airbnbDB = new IndexedDB('airbnbDB')

// 真实接口
export function fetchRoomList() {
  return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
}

// Mock接口
export async function fetchElephant() {
  await airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
  return await airbnbDB.getList('elephant').then(res => {
    return { code: '000000', message: '操作成功', result: res, success: true }
  })
}
