<template>
    <div>
        <div> 
        <div class="flexcontainer" style="margin: 5% 0;"> 
         <TrioSquadResults v-if="getTrioPlayerOneSearchResults && getTrioPlayerTwoSearchResults && getTrioPlayerThreeSearchResults"/>
        </div>
        <div class="flexcontainer">
            <div class="flex-item">
                    Squad Member 1:
                    <GamerTagInput teamMember="1" teamMembers="3"/>
                    <PlatformSelection teamMember="1" teamMembers="3"/>
            </div>
            <div class="flex-item">
                    Squad Member 2:
                      <GamerTagInput teamMember="2" teamMembers="3"/>
                      <PlatformSelection teamMember="2" teamMembers="3"/>
            </div>
             <div class="flex-item">
                    Squad Member 3:
                      <GamerTagInput teamMember="3" teamMembers="3"/>
                      <PlatformSelection teamMember="3" teamMembers="3"/>
            </div>
        </div>
         <div class="flexcontainer">
            <v-btn dark color="deep-purple accent-4" @click="submitTrioSquadSearch"> Submit </v-btn>
            <v-btn dark color="deep-purple accent-4" style="margin-left: 10px;" @click="clearResults"> Clear </v-btn>
             <v-btn dark color="deep-purple accent-4" style="margin-left: 10px;" @click="clearResults"><router-link dark color="deep-purple accent-4" to="/" style="text-decoration: none; color: #fff; margin-top 0;">Home</router-link></v-btn>
        </div>
    </div>
    </div>
</template>

<script>
import GamerTagInput from '../gamertag-input/GamerTagInput'
import PlatformSelection from '../platform-selection/PlatformSelectionComponent'
import TrioSquadResults from '../results/trio-results/TrioResults'  
    export default {
         components: {
            GamerTagInput, 
            PlatformSelection,
            TrioSquadResults
         },
        data(){
            return {
                
            }
        },
        methods: {
          submitTrioSquadSearch(){
              if(
                  this.$store.getters.getPlayerOneTrioInfo.gamertag 
                && this.$store.getters.getPlayerOneTrioInfo.platform    
                && this.$store.getters.getPlayerTwoTrioInfo.gamertag 
                && this.$store.getters.getPlayerTwoTrioInfo.platform
                && this.$store.getters.getPlayerThreeTrioInfo.platform
                && this.$store.getters.getPlayerThreeTrioInfo.gamertag 
                ){
                   this.$store.dispatch('submitTrioSearchAction');     
                }
          },
          clearResults(){
                this.$store.dispatch('clearResultsAction');
          }
        },

         computed:{
            getTrioPlayerOneSearchResults(){
                return this.$store.getters.getTrioPlayerOneSearchResults;
            },
            getTrioPlayerTwoSearchResults(){
                return this.$store.getters.getTrioPlayerTwoSearchResults;
            },
             getTrioPlayerThreeSearchResults(){
                return this.$store.getters.getTrioPlayerThreeSearchResults;
            },
        }
    }
</script>

<style scoped>
 .logo{
        height: 100vh;
        background-color: #000;
        /*background-image: url('../assets/apex-logo.png');*/
        background-repeat: no-repeat;
        background-size: 72%;
        background-position: 50% 30%;
}
.flexcontainer{
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

.flex-item{
    width: 600px;
    margin: 20px;
}
.profile-box{
  width: 700px;
  height: 600px;
  background-color: #fff;
  padding: 1em;
  margin: 1em;
}
.text-center{
    width: 50%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 25%;

}
.v-progress-circular {
  margin: 1rem;
}
.container {
  background: rgba(255, 255, 255, 0.7);
  border: 6px solid #6200ea;
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  position: relative;
  top: 50%;
  left: 50%;

}
.error-message{
  background: rgba(255, 255, 255, 0.7);
  padding: 1em;
  height: 400px;
}
h1.gamertag {
  font-size: 2rem;
  background: rgba(0, 0, 0, 1);
  padding: 0.3rem 0.5rem;
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  color: #fff;
}
a {
  display: inline-block;
  /*margin-top: 2rem;*/
  padding: 0.5rem 0.8rem;
}

.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.stats-list{
    list-style-type: none;
}

.stats-list li {
  background: rgba(0, 0, 0, 1);
  padding: 1rem;
  margin-bottom: 0.7rem;
  color: #fff;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #fff;
}
@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
  .error-message{
    border: 3px solid #6200ea;
    color: #fff;
  }
}
</style>