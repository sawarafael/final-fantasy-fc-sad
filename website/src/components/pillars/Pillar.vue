<template>
    <div class="q-py-xl row container justify-start items-start">
        <q-card
        class="cardinfo"
        >
            <q-img 
            :src="pillar.img"
            style="height=100%;width=auto"
            />
            <q-card-section>
                <div class="text-white text-h5 text-center">
                    Pilar - {{ pillar.title }} - <i>{{ pillar.name }}</i> 
                </div>
                <div class="text-white text-h4 text-center">
                    {{ pillar.txt1 }}
                </div>
                <div class="text-white text-h4 text-center">
                    {{ pillar.txt2 }}
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    name: 'Pillar',
    props: ['pillar']
}
</script>

<style scoped>

.cardinfo {
    height: auto;
    width: 1250px;
}

</style>