<script setup lang="ts">
const toggleTheme = (dark: boolean) => {
  if (dark) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
}

onMounted(() => {
  toggleTheme(false);

})
</script>

<template>
  <a-config-provider>
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
