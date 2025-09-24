/*
 * @Description:
 * @Version: 1.668
 * @Autor: Hawk
 * @Date: 2021-08-23 13:54:51
 * @LastEditors: Hawk
 * @LastEditTime: 2021-09-28 15:58:20
 */
import { http } from "../utils/http";
export const getPointsEffectList = (): any => {
  return Promise.resolve({
    code: 1,
    msg: "",
    time: "1758677419",
    data: [
      {
        id: 13,
        effect_type: "CircleDiffusion",
        lon: 113.94443512,
        lat: 22.523283005,
        height: 0,
        onswitch: 1,
        color: "rgba(247, 235, 8, 1)",
        radius: 1400,
        duration: 9500,
        ext: '{"waveCount":3,"step":-0.01,"height":500,"edgeCount":5 }',
        createtime: 1629702358,
        updatetime: 1636531409,
      },
      {
        id: 14,
        effect_type: "Scanline",
        lon: 113.922744751,
        lat: 22.536218643,
        height: 0,
        onswitch: 1,
        color: "rgba(206, 19, 116, 0.91)",
        radius: 1200,
        duration: 6500,
        ext: '{"waveCount":3,"step":-0.01,"height":500,"edgeCount":5 }',
        createtime: 1629702548,
        updatetime: 1629977652,
      },
      {
        id: 15,
        effect_type: "CircleWave",
        lon: 113.939323425,
        lat: 22.511972427,
        height: 0,
        onswitch: 1,
        color: "rgba(31, 168, 227, 0.59)",
        radius: 400,
        duration: 4500,
        ext: '{"waveCount":4,"step":-0.01,"height":500,"edgeCount":5 }',
        createtime: 1629702655,
        updatetime: 1629977608,
      },
      {
        id: 16,
        effect_type: "HexagonSpread",
        lon: 113.91519165,
        lat: 22.513103485,
        height: 0,
        onswitch: 1,
        color: "rgba(255, 0, 183, 1)",
        radius: 800,
        duration: 3000,
        ext: '{"waveCount":3,"step":-0.01,"height":360,"edgeCount":0 }',
        createtime: 1629702824,
        updatetime: 1629977887,
      },
      {
        id: 17,
        effect_type: "CircleScan",
        lon: 113.928703308,
        lat: 22.505599976,
        height: 0,
        onswitch: 1,
        color: "rgba(187, 0, 255, 1)",
        radius: 1000,
        duration: 3000,
        ext: '{"waveCount":3,"step":-0.01,"height":500,"edgeCount":5 }',
        createtime: 1629702906,
        updatetime: 1632819276,
      },
      {
        id: 18,
        effect_type: "HexagonSpread",
        lon: 113.934036255,
        lat: 22.552270889,
        height: 0,
        onswitch: 1,
        color: "rgba(0, 153, 191, 1)",
        radius: 1000,
        duration: 7500,
        ext: '{"waveCount":3,"step":-0.01,"height":500,"edgeCount":5 }',
        createtime: 1629703112,
        updatetime: 1636528352,
      },
    ],
  });
};

export const getLinesEffectList = (): any => {
  return Promise.resolve({
    "code": 1,
    "msg": "",
    "time": "1758714740",
    "data": [
        {
            "id": 1,
            "type": "FlyLines",
            "width": 2,
            "geojsonfile": "",
            "effectimage": "",
            "setup_param": "{\"color\":\"#A932B4\",\"height\":3000,\"speed\":6,\"percent\":0.1,\"gradient\":0.1,\"random\":300,\"startPoint_lng\":113.8918,\"startPoint_lat\":22.4818,\"endPoint_ing\":113.96858,\"endPoint_lat\":22.5692}",
            "showswitch": 1,
            "createtime": 1632365596,
            "updatetime": 1632817818
        },
        {
            "id": 3,
            "type": "RoadPic",
            "width": 1.7,
            "geojsonfile": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/geojson\/nanshan-road1.geojson",
            "effectimage": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/pic\/spriteline1.png",
            "setup_param": "{\"time\":3600}",
            "showswitch": 1,
            "createtime": 1632812901,
            "updatetime": 1673940794
        },
        {
            "id": 4,
            "type": "RoadPic",
            "width": 2,
            "geojsonfile": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/geojson\/nanshan-road2.geojson",
            "effectimage": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/pic\/spriteline2.png",
            "setup_param": "{\"time\":3000}",
            "showswitch": 1,
            "createtime": 1632815020,
            "updatetime": 1673940785
        },
        {
            "id": 5,
            "type": "RoadPic",
            "width": 1.6,
            "geojsonfile": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/geojson\/nanshan-road3.geojson",
            "effectimage": "https:\/\/jdvop.oss-cn-qingdao.aliyuncs.com\/mapv-data\/pic\/spriteline3.png",
            "setup_param": "{\"time\":600}",
            "showswitch": 1,
            "createtime": 1632815053,
            "updatetime": 1673940775
        }
    ]
})
};
