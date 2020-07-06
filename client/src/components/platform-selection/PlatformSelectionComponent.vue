<template>
    <div>
        

         <v-radio-group v-model="chosenPlatform" column @change="setPlatformInVuex">
         <v-radio  
            v-for="platform in platforms" 
            :label="platform.text"
            :key="platform.id"  :value="platform.value"
            >
            </v-radio>
         </v-radio-group>
    </div>
</template>

<script>
    export default {
        props:{
            teamMembers: {
                type: String,
                required: true,
            },
            teamMember:{
                 type: String,
                 required: true,
            }
        },
        data(){
            return {
                platforms: [
                {id:'platstation-01', text: 'Playstation', value: 'psn'},
                {id:'xbox-02', text: 'XBox', value: 'xbl'},
                {id:'origin-03', text: 'Origin', value: 'origin'},
              ],
              chosenPlatform: '',
            }
        },

        methods: {
            setPlatformInVuex(){
                //console.log(`Setting Platform:${this.chosenPlatform} for currentTeamMember ${this.teamMember}  and for number of players ${this.teamsMembers}`)
                 if(this.teamMember === '1' && this.teamMembers === '1'){
                     this.$store.dispatch('setPlatformForSingleAction', this.chosenPlatform);
                 }
                 if(this.teamMember === '1' && this.teamMembers === '2'){
                     this.$store.dispatch('setPlatformForDuoPlayerOneAction', this.chosenPlatform);
                 }
                 if(this.teamMember === '2' && this.teamMembers === '2'){
                     this.$store.dispatch('setPlatformForDuoPlayerTwoAction', this.chosenPlatform);
                 }
                 if(this.teamMember === '1' && this.teamMembers === '3'){
                     this.$store.dispatch('setPlatformForTrioPlayerOneAction', this.chosenPlatform);
                 }
                 if(this.teamMember === '2' && this.teamMembers === '3'){
                     this.$store.dispatch('setPlatformForTrioPlayerTwoAction', this.chosenPlatform);
                 }
                 if(this.teamMember === '3' && this.teamMembers === '3'){
                     this.$store.dispatch('setPlatformForTrioPlayerThreeAction', this.chosenPlatform);
                 }
                 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>