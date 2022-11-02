<script setup lang="ts">
import useResolution from './use-resolution';
import html2canvas from 'html2canvas';

const form = reactive({
  background: '#00BAAD',
  isRead: false,
  textA: 'console 使用提速',
  textB: '',
  textC: ''
})
const { reteEnum, resolutionEnum, resolution } = useResolution();

const style = computed(() => ({
  width: '100%',
  height: 'auto',
  background: form.background,
  aspectRatio: resolution.width/resolution.height,
}));

function downloadCanvas(canvas: HTMLCanvasElement) {
    let link = document.createElement("a");
    link.download = "image_name.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
const downloadBtn = () => {
  const node = document.getElementById('canvas-dom1') as HTMLElement;
  html2canvas(node).then((canvas) => {
    downloadCanvas(canvas);
  })
}
</script>

<template>
  <a-card title="抖音封面" style="height: 100vh">
    <a-card title="样式1">
      <a-row class="grid-demo" :gutter="24">
        <a-col :span="12">
          <section class="canvas-dom" id="canvas-dom1" :style="style">
            <div class="textA ">{{form.textA}}</div>
            <div class="textB">{{form.textB}}</div>
            <div class="textC">{{form.textC}}</div>
          </section>
            
          
        </a-col>
        <a-col :span="12">
          <a-form :model="form">
            <a-form-item field="name" label="尺寸">
              <a-select v-model="resolution.rate" placeholder="Please select ...">
                <a-option v-for="item of reteEnum" :item="item">{{ item }}</a-option>
              </a-select>
              <span style="margin: 0 8px;">-</span>
              <a-select v-model="resolution.label" placeholder="Please select ...">
                <a-option v-for="item of resolutionEnum" :item="item.label">{{ item.label }}</a-option>
              </a-select>
            </a-form-item>
            <a-form-item field="name" label="背景颜色">
              <a-input v-model="form.background" placeholder="please enter your username..." />
            </a-form-item>
            <a-form-item field="post" label="文字1">
              <a-input v-model="form.textA" placeholder="please enter your post..." />
            </a-form-item>
            <a-form-item field="post" label="文字2">
              <a-input v-model="form.textB" placeholder="please enter your post..." />
            </a-form-item>
            <a-form-item field="post" label="时间">
              <a-input v-model="form.textC" placeholder="please enter your post..." />
            </a-form-item>
          </a-form>
          <a-button type="primary" long @click="downloadBtn">下载图片</a-button>
        </a-col>
      </a-row>
    </a-card>
  </a-card>

  <div>123r</div>


</template>

<style scoped lang="less">
.canvas-dom {
  position: relative;
  .textA {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    // -webkit-text-stroke: 2px #000;
    text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;

  }
  .textB {
    position: absolute;
    bottom: 30%;
    left:50%;
    transform: translate(-50%, 0%);
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textC {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 20%;
    background: rgba(0, 0, 0, .5);
    border-radius: 6px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
  }
}
</style>
