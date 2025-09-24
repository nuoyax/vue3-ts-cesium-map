<template>
  <div class="Cesium3DIndex" id="cesiumContainer"></div>

  <div class="panel">
    <div class="leftPanel">
      <div class="panel-box">
        <!-- 左上卡片示例 -->
        <div class="card" style="text-align: left">
          <h3>设备列表</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>设备ID</th>
                <th>设备名称</th>
                <th>位置</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>海口人民广场-AR实景监控</td>
                <td>海南省海口市龙华区人民广场</td>
              </tr>
              <tr>
                <td>002</td>
                <td>三亚湾海滩</td>
                <td>海南省三亚市天涯区三亚湾海滩</td>
              </tr>
              <tr>
                <td>003</td>
                <td>琼海博鳌亚洲论坛会址</td>
                <td>海南省琼海市博鳌镇博鳌亚洲论坛会址</td>
              </tr>
              <tr>
                <td>004</td>
                <td>海口豪庭北苑二区</td>
                <td>海南省海口市琼山区海口豪庭北苑二区</td>
              </tr>
              <tr>
                <td>005</td>
                <td>三亚凤凰国际机场-航站楼监控</td>
                <td>海南省三亚市吉阳区凤凰路</td>
              </tr>
              <tr>
                <td>006</td>
                <td>海口火车东站-出入口监控</td>
                <td>海南省海口市琼山区海口火车东站</td>
              </tr>
              <tr>
                <td>007</td>
                <td>五指山云顶广场-监控</td>
                <td>海南省五指山市南圣路云顶广场</td>
              </tr>
              <tr>
                <td>008</td>
                <td>文昌航天城-监控设备</td>
                <td>海南省文昌市文航路航天城核心区</td>
              </tr>
              <tr>
                <td>009</td>
                <td>儋州东坡公园-监控</td>
                <td>海南省儋州市东坡路东坡公园</td>
              </tr>
              <tr>
                <td>010</td>
                <td>万宁日月湾景区-监控</td>
                <td>海南省万宁市日月湾旅游区入口</td>
              </tr>
              <tr>
                <td>011</td>
                <td>东方市人民广场-监控</td>
                <td>海南省东方市滨海大道人民广场</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel-box">
        <div class="card" style="text-align: left">
          <h3>设备信息</h3>
          <p>设备名称: 中国人民解放军总医院海南医院摄像头</p>
          <p>设备位置：海南省三亚市海棠区江林路80号</p>
          <p>设备状态：正常</p>
          <img style="width: 100%" src="/1.jpg" />
        </div>
      </div>
    </div>

    <div class="rightPanel">
      <!-- 右上表格卡片 -->
      <div class="panel-box">
        <div class="card">
          <h3>报警列表</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>报警信息</th>
                <th>等级</th>
                <th>处理状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>监控摄像头离线</td>
                <td>高</td>
                <td>未处理</td>
              </tr>
              <tr>
                <td>温度传感器异常</td>
                <td>中</td>
                <td>处理中</td>
              </tr>
              <tr>
                <td>门禁未关闭</td>
                <td>高</td>
                <td>未处理</td>
              </tr>
              <tr>
                <td>烟雾报警触发</td>
                <td>高</td>
                <td>已处理</td>
              </tr>
              <tr>
                <td>水浸传感器警报</td>
                <td>中</td>
                <td>未处理</td>
              </tr>
              <tr>
                <td>电力异常波动</td>
                <td>低</td>
                <td>处理中</td>
              </tr>
              <tr>
                <td>红外探测器误报</td>
                <td>低</td>
                <td>已处理</td>
              </tr>
              <tr>
                <td>烟雾传感器脏污</td>
                <td>中</td>
                <td>未处理</td>
              </tr>
              <tr>
                <td>门禁刷卡异常</td>
                <td>高</td>
                <td>处理中</td>
              </tr>
              <tr>
                <td>电力断路器警报</td>
                <td>高</td>
                <td>未处理</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 右下ECharts卡片 -->
      <div class="panel-box">
        <div class="card charts">
          <div id="pieChart" class="chart"></div>
          <div id="lineChart" class="chart"></div>
          <div id="pieChart2" class="chart"></div>
          <div id="lineChart2" class="chart"></div>
        </div>
      </div>
    </div>
  </div>

  <ShowLngLat ref="ShowLngLatRef" />
  <ButtonTools ref="ButtonToolsRef" />
</template>

<script lang="ts">
/* eslint-disable no-debugger */
import { GController } from "@/utils/ctrlCesium/Controller";
import {
  getBaseMapConfig,
  getBaseMapImageryList,
} from "@/utils/getFormatData/BaseMap";
import ShowLngLat from "@/components/ShowLngLat.vue"; // @ is an alias to /src
import ButtonTools from "@/components/ButtonTools.vue";
import Titleset from "@/utils/ctrlCesium/Titleset";
import Manager from "@/utils/ctrlCesium/effects/Manager";
import Primitive from "@/utils/ctrlCesium/model/Primitive";
import RoadNetwork from "@/utils/ctrlCesium/lines/RoadNetwork";
import { defineComponent, onBeforeMount, nextTick, ref, onMounted } from "vue";
declare const Cesium: any;

declare const echarts: any; // ✅ 全局 ECharts
export default defineComponent({
  name: "Cesium3DIndex",
  components: { ShowLngLat, ButtonTools },
  setup() {
    let viewer = null;
    const ShowLngLatRef = ref();
    const ButtonToolsRef = ref();

    const initMap = (BaseMapConfig: any, MapImageryList: any) => {
      viewer = GController.init(BaseMapConfig, MapImageryList);
      window.Gviewer = viewer; // 全局控制台 调试viewer
      // 显示经纬度绑定事件
      ShowLngLatRef.value.initCesiumHandler(viewer);
      // 飞到配置的坐标
      ButtonToolsRef.value.flyTo();

      // 🔹【新增】设置初始视角位置
      // setTimeout(() => {
      //   viewer.camera.setView({
      //     destination: Cesium.Cartesian3.fromDegrees(
      //       113.9524, // 经度
      //       22.5392, // 纬度
      //       12000 // 高度（米）
      //     ),
      //     orientation: {
      //       heading: Cesium.Math.toRadians(0.0), // 朝向角
      //       pitch: Cesium.Math.toRadians(-45.0), // 俯仰角
      //       roll: 0.0,
      //     },
      //   });
      // }, 1000);

      // 处理 白膜
      const GTitleset = new Titleset(viewer);
      GTitleset.init();

      // 模型List
      const GPrimitive = new Primitive(viewer);
      GPrimitive.init();

      // 处理 配置好的点效果列表
      const GManager = new Manager(viewer);
      GManager.init();

      // 公路效果
      const GRoadNetwork = new RoadNetwork(viewer, "road");
      GRoadNetwork.init();
    };

    const initCharts = () => {
      if (!echarts) {
        console.error("全局 echarts 未定义，请检查是否引入 ECharts 脚本");
        return;
      }

      const commonTextStyle = {
        fontSize: 10,
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      };

      // 通用初始化函数
      const createChart = (containerId: string, option: any) => {
        const chart = echarts.init(document.getElementById(containerId)!);
        chart.setOption(option);
        return chart;
      };

      // 饼图通用配置函数
      const pieOption = (title: string, data: any[]) => ({
        title: { text: title, left: "center", textStyle: commonTextStyle },
        tooltip: { trigger: "item", textStyle: commonTextStyle },
        legend: { show: false },
        series: [
          {
            type: "pie",
            radius: "60%",

            label: { show: false },
            data,
          },
        ],
      });

      // 折线图通用配置函数
      const lineOption = (title: string, xData: any[], yData: any[]) => ({
        title: { text: title, left: "center", textStyle: commonTextStyle },
        tooltip: { textStyle: commonTextStyle },
        xAxis: { type: "category", data: xData, axisLabel: commonTextStyle },
        yAxis: { type: "value", axisLabel: commonTextStyle },
        legend: { show: false },
        series: [
          {
            data: yData,
            type: "line",
            smooth: true,
          },
        ],
      });

      // 初始化图表
      const pie = createChart(
        "pieChart",
        pieOption("", [
          { value: 40, name: "A" },
          { value: 25, name: "B" },
          { value: 35, name: "C" },
        ])
      );

      const pie2 = createChart(
        "pieChart2",
        pieOption("", [
          { value: 40, name: "A" },
          { value: 25, name: "B" },
          { value: 35, name: "C" },
        ])
      );

      const line = createChart(
        "lineChart",
        lineOption(
          "",
          ["1月", "2月", "3月", "4月", "5月"],
          [120, 132, 101, 134, 90]
        )
      );
      const line2 = createChart(
        "lineChart2",
        lineOption(
          "",
          ["1月", "2月", "3月", "4月", "5月"],
          [120, 132, 101, 134, 90]
        )
      );

      window.addEventListener("resize", () => {
        pie.resize();
        pie2.resize();
        line.resize();
        line2.resize();
      });
    };

    onBeforeMount(() => {
      nextTick(async () => {
        const BaseMapConfig: any = await getBaseMapConfig();
        const MapImageryList: any = await getBaseMapImageryList();
        initMap(BaseMapConfig, MapImageryList);
      });
    });

    onMounted(() => {
      nextTick(() => {
        initCharts();
      });
    });
    return {
      ShowLngLatRef,
      ButtonToolsRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.Cesium3DIndex {
  height: 100%;
}

.panel {
  pointer-events: none; // 让 panel 不拦截鼠标
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 33;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.leftPanel,
.rightPanel {
  pointer-events: auto;
  color: white;
  width: 25%;
  height: 100vh;
  // background: rgba(#5e0ad4, 0.5);

  .panel-box {
    width: 100%;
    height: 50%;
    padding: 10px;
    box-sizing: border-box;

    .card {
      pointer-events: auto; // ✅ 开启点击
      cursor: pointer; // 鼠标悬停显示手型（可选）
      font-size: 10px;
      background: rgba(2, 2, 31, 0.5);
      border-radius: 10px;
      padding: 10px;
      padding-top: 2px;
      height: 100%;
      overflow: auto;
    }
  }

  .panel-box:first-child {
    // background: rgba(#0c18b9, 0.3);
  }
  .panel-box:last-child {
    // background: rgba(#1b379c, 0.3);
  }
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8px; // ✅ 缩小字体
  th,
  td {
    border: 1px solid #ddd;
    padding: 4px;
    text-align: center;

    white-space: nowrap; // 内容不换行
    overflow: hidden; // 超出隐藏
    text-overflow: ellipsis; // 超出显示...
    max-width: 150px; // 可根据需要调整列宽
  }
  th {
  }
}

.charts {
  display: flex;
  flex-wrap: wrap; // ✅ 允许换行
  gap: 10px;
  .chart {
    flex: 1 1 45%; // ✅ 宽度至少 45%，可以自适应换行
  }
}
</style>
