<template>
    <div class="container column items-center justify-center textstyle">
        <div class="text-h3 q-pa-md">
            Pilares da SAD
        </div>
        <div class="text-body1 q-pa-xs">
            Os pilares são as estruturas que constituem a organização da nossa FC e cada Officer trabalha para que cada pilar funcione corretamente.
        </div>
        <div class="pillars-list q-pa-md">
            <div class="list row q-pa-md" >
                <pillars-list v-on:thisPillar="that" />
            </div>
        </div>
        <div class="q-pa-md q-px-md">
            <Pillar :pillar="pillarData" />
        </div>
    </div>
</template>

<script>
import Pillar from 'src/components/pillars/Pillar.vue'
import PillarsList from 'src/components/pillars/PillarsList.vue'
export default {
  components: { Pillar, PillarsList },
    data () {
        return {
            pillarData: null
        }
    },
    methods: {
        that(data) {
            this.pillarData = data
        }
    }
}
</script>


<style lang="scss" scoped>

.textstyle {
    font-family: 'Baloo Tammudu 2', cursive;
}

</style>