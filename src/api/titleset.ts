/*
 * @Description: 
 * @Version: 1.668
 * @Autor: Hawk
 * @Date: 2021-07-15 10:43:21
 * @LastEditors: Hawk
 * @LastEditTime: 2021-08-23 13:55:08
 */
import { http } from '../utils/http'

// 获取白膜list
export const getTitlesetList = (): any => {
  return Promise.resolve({
    "code": 1,
    "msg": "",
    "time": "1758714740",
    "data": [
        {
            "id": 4,
            "name": "深圳南山区大街道",
            "url": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/titleset\/sz_ns2\/tileset.json",
            "offset_x": 0,
            "offset_y": 0,
            "offset_z": 0,
            "onswitch": 1,
            "flytoswitch": 1,
            "color": "rgba(255, 255, 255, 1)",
            "effectswitch": 1,
            "height": 260,
            "effect_color": "#df16f1",
            "createtime": 1626347087,
            "updatetime": 1673942311
        }
    ]
})
}

// 获取一条白膜
export const getOneTitleset = (id: string): any => {
  return http.request('get', '/titleset/getOneTitleset?id=' + id)
}
