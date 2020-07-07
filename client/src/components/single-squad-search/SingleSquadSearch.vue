<template>
    <div>
        <div>
                <div class="flexcontainer" style="margin: 5% 0;"> 
                <div class="text-center" v-if="resultsLoading">
                    <v-progress-circular
                    :size="50"
                    color="primary"
                    indeterminate
                    ></v-progress-circular>
                </div>
                <div v-if="someThingWentWrong" class="error-message">
                    <h1>{{message}}</h1>
                </div>     
                <SingleSquadResults v-if="getSoloPlayerOneSearchResults"/>
                </div>
                <div class="flexcontainer">
                    <div class="flex-item">
                            Squad Member 1:
                            <GamerTagInput teamMember="1" teamMembers="1"/>
                            <PlatformSelection teamMember="1" teamMembers="1"/>
                    </div>
                </div>
                <div class="flexcontainer">
                    <v-btn dark color="deep-purple accent-4" @click="submitSoloSquadSearch"> Submit </v-btn>
                    <v-btn dark color="deep-purple accent-4" style="margin-left: 10px;" @click="clearResults"> Clear </v-btn>
                    <v-btn dark color="deep-purple accent-4" style="margin-left: 10px;" @click="clearResults"><router-link dark color="deep-purple accent-4" to="/" style="text-decoration: none; color: #fff;">Home</router-link></v-btn>
                </div>
            </div>
    </div>
</template>

<script>
import GamerTagInput from '../gamertag-input/GamerTagInput'
import PlatformSelection from '../platform-selection/PlatformSelectionComponent'
import SingleSquadResults from '../results/single/SingleResults'
    export default {
        components:{
            GamerTagInput, 
            PlatformSelection,
            SingleSquadResults
        },
        data(){
            return {

            }
        },
        methods: {
            submitSoloSquadSearch(){
                  if(
                  this.$store.getters.getPlayerOneSingleInfo.gamertag 
                  && this.$store.getters.getPlayerOneSingleInfo.platform 
                ){
                   this.$store.dispatch('submitSoloSearchAction');     
                }
            },
            clearResults(){
                this.$store.dispatch('clearResultsAction');
            }
        },
        computed:{
            getSoloPlayerOneSearchResults(){
                return this.$store.getters.getSoloPlayerOneSearchResults;
            },
            resultsLoading(){
              return this.$store.getters.getLoadingStatus;
            },

            someThingWentWrong(){
              return this.$store.getters.getErrorStatus;
            },

            message(){
              return this.$store.getters.getMessage;
            }
        }
    }
</script>

<style  scoped>
.flexcontainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.flex-item{
    width: 600px;
    height: 300px;
    margin: 20px;
}
</style>