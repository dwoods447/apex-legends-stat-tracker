<template>
    <div>
              <v-text-field
                    label="Gamertag"
                    placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc"
                    outlined
                    v-model="gamertag"
                    v-validate="'required'"
                    name="gamertag"
                    @change="setGamertagInVuex"
                ></v-text-field>
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
              gamertag: '',
            }
        },
        methods: {
            setGamertagInVuex(){
                //alert('Inputing...' + this.teamMember + ' ' + this.teamMembers);
                 if(this.teamMember === '1' && this.teamMembers === '1'){
                     this.$store.dispatch('setGamertagForSingleAction', this.gamertag);
                 }
                 if(this.teamMember === '1' && this.teamMembers === '2'){
                     this.$store.dispatch('setGamertagForDuoPlayerOneAction', this.gamertag);
                 }
                 if(this.teamMember === '2' && this.teamMembers === '2'){
                     this.$store.dispatch('setGamertagForDuoPlayerTwoAction', this.gamertag);
                 }
                 if(this.teamMember === '1' && this.teamMembers === '3'){
                     this.$store.dispatch('setGamertagForTrioPlayerOneAction', this.gamertag);
                 }
                 if(this.teamMember === '2' && this.teamMembers === '3'){
                     this.$store.dispatch('setGamertagForTrioPlayerTwoAction', this.gamertag);
                 }
                 if(this.teamMember === '3' && this.teamMembers === '3'){
                     this.$store.dispatch('setGamertagForTrioPlayerThreeAction', this.gamertag);
                 }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>