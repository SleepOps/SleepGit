<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar> -->
          {{ $t('appName') }}
        </q-toolbar-title>

        <q-input
          ref="myFileInput"
          style="display:none"
          v-model="file"
          type="file"
          label="Standard"
        >
        </q-input>
        <q-btn
          round
          style="background:#7c6282;color:#c2c5ed"
          icon="add"
          label=""
          @click="openRepoFromDir"
        ></q-btn>
        <q-tabs align="center">
          <q-route-tab to="/" :label="$t('recentProjects')" />
          <q-route-tab to="/page2" :label="$t('globalSettings')" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // el: '#q-app',
  data() {
    return {
      file: ''
    };
  },
  methods: {
    openRepoFromDir() {
      this.$refs.myFileInput.$el.click();
    }
  }
};
</script>

<style lang="scss">
.openDirBtn {
  color: #7c6282;
}
</style>
