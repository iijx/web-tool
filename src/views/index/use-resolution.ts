export default function useResolution() {

// 分辨率
const ResolutionMapEnum = [
    {
      rate: "16:9",
      children: [
        { width: 2550, height: 1440, label: '1920x1080' },
        { width: 1920, height: 1080, label: '1920x1080' },
        { width: 1280, height: 720, label: '1280x720' },
        { width: 640, height: 360, label: '640x360' },
        { width: 320, height: 180, label: '320x180' },
      ]
    },
    {
      // 比例
      rate: "9:16",
      children: [
        { width: 1440, height: 2550, label: '1080x1920' },
        { width: 1080, height: 1920, label: '1080x1920' },
        { width: 720, height: 1280, label: '720x1280' },
        { width: 360, height: 640, label: '360x640' },
        { width: 180, height: 320, label: '180x320' },
      ]
    }
  ]
  
  
  const resolution = reactive({
    rate: '',
    width: 1,
    height: 1,
    label: ''
  })


const reteEnum = computed(() => ResolutionMapEnum.map(item => item.rate));
const resolutionEnum = computed(() => {
  const rate = resolution.rate;
  if (rate) {
    return ResolutionMapEnum.find(item => item.rate === rate)?.children || [];
  }
  return [];
});
watch(() => resolution.rate, () => {
  resolution.width = 1;
  resolution.height = 1;
  resolution.label = '';
})
watch(() => resolution.label, () => {
    const width = resolution.label.split('x')[0];
    const height = resolution.label.split('x')[1];
    resolution.width = Number(width);
    resolution.height = Number(height);
})

  return {
    reteEnum,
    resolutionEnum,
    resolution,
  }

}