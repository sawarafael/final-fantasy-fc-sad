<template>
  <q-layout class="body" view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white q-px-md">
      <q-toolbar style="height: 30px" >
        <q-btn dense flat round @click="left = !left" icon="double_arrow"/>
        <q-separator />        
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" :width="250">
      <navbar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Navbar from 'src/components/Navbar.vue'
export default {
  components: { Navbar },
  data () {
    return {
      left: false
    }
  }
}
</script>

