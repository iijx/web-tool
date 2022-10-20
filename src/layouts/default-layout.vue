<template>
    <div class="layout">
        <a-layout>
            <a-layout-sider :style="{width: collapsed ? '56px' : '180px'}">
                <CMenu :collapsed="collapsed" @toggle="toggleCollapse"/>
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <br />
    </div>
</template>

<script setup lang="ts">
import CMenu from "../components/menu.vue";

const collapsed = ref(false);
const toggleCollapse =  () => { collapsed.value = !collapsed.value; }

</script>

<style scoped>
.layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
/* .layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer),
.layout :deep(.arco-layout-sider-children),
.layout :deep(.arco-layout-content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--color-white);
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
}


.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer) {
    height: 64px;
} */
</style>
  