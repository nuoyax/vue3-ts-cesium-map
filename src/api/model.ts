/*
 * @Description:
 * @Version: 1.668
 * @Autor: Hawk
 * @Date: 2021-11-10 14:19:34
 * @LastEditors: Hawk
 * @LastEditTime: 2021-11-10 14:19:34
 */
import { http } from "../utils/http";
export const getPrimitivesList = (): any => {
  return Promise.resolve({
    code: 1,
    msg: "",
    time: "1758679175",
    data: [
      {
        id: 3,
        name: "深证南山区部分区块城市精细化模型",
        url: "https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/model/2099city/scene.gltf",
        showswitch: 1,
        color: "rgba(255, 255, 255, 1)",
        colorModelist: "HIGHLIGHT",
        duration: 20,
        rotateSpeed: 0,
        latRotation: 1.54,
        positionLon: 113.9462890625,
        positionLat: 22.5458984375,
        height: 0,
        scale: 0.0128,
        minimumPixelSize: 20,
        createtime: 1636448214,
        updatetime: 1673940825,
      },
      {
        id: 4,
        name: "旋转锥子",
        url: "https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/model/pyramid.glb",
        showswitch: 1,
        color: "rgba(59, 237, 207, 0.45)",
        colorModelist: "REPLACE",
        duration: 19,
        rotateSpeed: 6,
        latRotation: 3.76,
        positionLon: 113.93321990966797,
        positionLat: 22.517576217651367,
        height: 420,
        scale: 200,
        minimumPixelSize: 20,
        createtime: 1636531685,
        updatetime: 1673940815,
      },
      {
        id: 4,
        name: "旋转锥子",
        url: "https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/model/pyramid.glb",
        showswitch: 1,
        color: "rgba(234, 39, 59, 1)",
        colorModelist: "REPLACE",
        duration: 19,
        rotateSpeed: 6,
        latRotation: 3.76,
        positionLon: 113.92321990966797,
        positionLat: 22.507576217651367,
        height: 420,
        scale: 200,
        minimumPixelSize: 20,
        createtime: 1636531685,
        updatetime: 1673940815,
      },
      {
        id: 4,
        name: "旋转锥子",
        url: "https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/model/pyramid.glb",
        showswitch: 1,
        color: "rgba(234, 39, 59, 1)",
        colorModelist: "REPLACE",
        duration: 19,
        rotateSpeed: 6,
        latRotation: 3.76,
        positionLon: 113.92322490966797,
        positionLat: 22.517276217651367,
        height: 420,
        scale: 200,
        minimumPixelSize: 20,
        createtime: 1636531685,
        updatetime: 1673940815,
      },
    ],
  });
};
