<script setup lang="ts">
  function handleBack() {
    alert('back')
  }
  const options = [
    {
      label: '催更',
      key: '1'
    },
    {
      label: '催更',
      key: '2'
    },
    {
      label: '催更',
      key: '3'
    }
  ]
</script>

<template>
  <PageWrapper title="Emmmmm " subtitle="让你的听觉更懂视觉" @back="handleBack">
    <template #pageHeaderContent>
      <n-grid :cols="5">
        <n-gi>
          <n-statistic label="正片" value="125 集" />
        </n-gi>
        <n-gi>
          <n-statistic label="嘉宾" value="22 位" />
        </n-gi>
        <n-gi>
          <n-statistic label="道歉" value="36 次" />
        </n-gi>
        <n-gi>
          <n-statistic label="话题" value="83 个" />
        </n-gi>
        <n-gi>
          <n-statistic label="参考链接" value="2,346 个" />
        </n-gi>
      </n-grid>
    </template>
    <template #title>
      <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">Anyway.FM</a>
    </template>
    <template #avatar>
      <n-avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
    </template>
    <template #extra>
      <n-space>
        <n-button>催更</n-button>
        <n-dropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px"> ··· </n-button>
        </n-dropdown>
      </n-space>
    </template>
    <template #footer> 截止到 2021 年 4 月 3 日 </template>
    <div>
      Page Content11
      <hr />
      <n-grid :cols="5">
        <n-gi>
          <n-statistic label="正片" value="125 集" />
        </n-gi>
        <n-gi>
          <n-statistic label="嘉宾" value="22 位" />
        </n-gi>
        <n-gi>
          <n-statistic label="道歉" value="36 次" />
        </n-gi>
        <n-gi>
          <n-statistic label="话题" value="83 个" />
        </n-gi>
        <n-gi>
          <n-statistic label="参考链接" value="2,346 个" />
        </n-gi>
      </n-grid>
    </div>
  </PageWrapper>
</template>

<style scoped lang="less"></style>
