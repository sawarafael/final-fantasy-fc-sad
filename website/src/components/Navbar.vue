<template>
    <div class="container column items-center justify-center q-pt-xl">
        <div class="text-h3">
            FFXIV
        </div>
        <div class="text-h5">
            SAD - FC
        </div>
        <q-separator spaced="25px"/>
        <q-tabs
        v-model="tabs"
        vertical
        class="text-h5 text-white"
        >   
            <q-route-tab name="top" to="/"> Início </q-route-tab>
            <q-separator spaced="15px" color="transparent" />
            <q-route-tab name="news" to="/news"> Notícias </q-route-tab>
            <q-separator spaced="15px" color="transparent" />
            <q-route-tab name="pillar" to="/pillars"> Pilares </q-route-tab>
            <q-separator spaced="15px" color="transparent" />
            <q-route-tab name="rp" to="/RP"> Background-RP </q-route-tab>
            <q-separator spaced="15px" color="transparent" />
            <q-route-tab name="alliances" to="/alliances"> Alianças </q-route-tab>
        </q-tabs>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            tabs: 'top'
        }
    }
}
</script>

<style scoped>

.txt {
    font-size: 150px;
}

q-route-tab {
    font-size: 250px;
}

</style>