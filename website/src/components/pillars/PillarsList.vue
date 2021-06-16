<template>
    <div class="row container items-center justify-center q-px-md">        
        <q-list class="row text-center" 
        dense
        dark
        >
            <q-item
            clickable
            v-ripple
            dense
            v-for="pillar in pillars"
            :key="pillar.id"
            @click="sendInfo(pillar)"
            class="item"
            >
            <span class="line"></span>
            <q-item-section class="boxPillar text-h5">
                <q-img
                v-bind:src="pillar.img"
                class="avatars"
                />    
                {{ pillar.title }}            
            </q-item-section>
            </q-item>            
        </q-list>
    </div>
</template>

<script>
export default {
    name: 'PillarList',
    data () {
        return {
            pillars : [
                {
                    name: 'Anri F. Bloomheart',
                    title: 'Endgame',
                    txt1: '火',
                    txt2: 'Pilar que auxiliará nos combates mais acirrados e díficeis que existem.',
                    img: require('./../../assets/anri1.png')
                },
                {
                    name: 'Cathrine F. Piercer',
                    title: 'Mentoria',
                    txt1: '先生',
                    txt2: 'Pilar que ajuda a todo momento aos seus membros.',
                    img: require('./../../assets/cath1.png')
                },
                {
                    name: 'Evy Charlotte',
                    title: 'Farm',
                    txt1: '水',
                    txt2: 'Pilar que organiza os ganhos para cada um.',
                    img: require('./../../assets/evy1.png')
                }
            ],
        }
    },
    methods: {
        sendInfo(pillar) {
            this.$emit('thisPillar', pillar)       
        }
    }
}
</script>

<style lang="scss" scoped>

.avatars{
    height: 550px;
    width: 250px;
    position: center;
    background-position: center;
    -webkit-border-radius: 0px 20px 0px 20px;
    -moz-border-radius: 0px 20px 0px 20px;
    border-radius: 0px 20px 0px 20px;
    border-left: 7px solid #E00211;    
}

.boxPillar {
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 30px;    
}

.item {
    background-color: transparent;
    background-image: none;
    background-repeat: no-repeat;
}

</style>
