<template>
    <div>
        Results:
        <div class="flex-cotainer">
           <div  class="profile-box" v-if="getTrioPlayerOneSearchResults !== undefined || getTrioPlayerOneSearchResults !== {}">
               Squad Member: 1
            <h1 class="gamertag">
                <!-- <img :src=" getTrioPlayerOneSearchResults.platformInfo.avatarUrl" :alt=" getTrioPlayerOneSearchResults.metadata.activeLegendName" class="platform-avatar"> -->
                 {{ getTrioPlayerOneSearchResults.platformInfo.platformUserId}}
            </h1>
            <div class="grid">
                <div>
                     <img :src=" getTrioPlayerOneSearchResults.segments[1].metadata.imageUrl" alt="">
                </div>
                <div>
                    <ul class="stats-list">
                        <li>
                            <h4>Selected Legend</h4>
                            <p>{{ getTrioPlayerOneSearchResults.metadata.activeLegendName}}</p>
                        </li>
                         <li v-if=" getTrioPlayerOneSearchResults.segments[0].stats.season2Wins">
                              <h4>Season 2 Wins </h4>
                            <p>{{ getTrioPlayerOneSearchResults.segments[0].stats.season2Wins.displayValue}}</p>
                            <span>({{  getTrioPlayerOneSearchResults.segments[0].stats.season2Wins.percentile }}%)</span>
                        </li>
                        <li v-if=" getTrioPlayerOneSearchResults.segments[0].stats.kills">
                            <h4>Lifetime Kills</h4>
                            <p>
                                {{ getTrioPlayerOneSearchResults.segments[0].stats.kills.displayValue}}
                                <span>({{ getTrioPlayerOneSearchResults.segments[0].stats.kills.percentile}}%)</span>
                            </p>
                            </li>
                            <li v-if=" getTrioPlayerOneSearchResults.segments[0].stats.damage">
                            <h4>Damage Done</h4>
                            <p>
                                {{ getTrioPlayerOneSearchResults.segments[0].stats.damage.displayValue}}
                                <span>({{ getTrioPlayerOneSearchResults.segments[0].stats.damage.percentile}}%)</span>
                            </p>
                        </li>
                    </ul>
                </div>   
            </div>
            </div><!--  end of profile -->

        <div  class="profile-box" v-if="getTrioPlayerTwoSearchResults !== undefined || getTrioPlayerTwoSearchResults !== {}">
            Squad Member:  2
            <h1 class="gamertag">
               
                 {{getTrioPlayerTwoSearchResults.platformInfo.platformUserId}}
            </h1>
            <div class="grid">
                <div>
                     <img :src="getTrioPlayerTwoSearchResults.segments[1].metadata.imageUrl" alt="">
                </div>
                <div>
                    <ul class="stats-list">
                        <li>
                            <h4>Selected Legend</h4>
                            <p>{{getTrioPlayerTwoSearchResults.metadata.activeLegendName}}</p>
                        </li>
                         <li v-if="getTrioPlayerTwoSearchResults.segments[0].stats.season2Wins">
                              <h4>Season 2 Wins </h4>
                            <p>{{getTrioPlayerTwoSearchResults.segments[0].stats.season2Wins.displayValue}}</p>
                            <span>({{ getTrioPlayerTwoSearchResults.segments[0].stats.season2Wins.percentile }}%)</span>
                        </li>
                        <li v-if="getTrioPlayerTwoSearchResults.segments[0].stats.kills">
                            <h4>Lifetime Kills</h4>
                            <p>
                                {{getTrioPlayerTwoSearchResults.segments[0].stats.kills.displayValue}}
                                <span>({{getTrioPlayerTwoSearchResults.segments[0].stats.kills.percentile}}%)</span>
                            </p>
                            </li>
                            <li v-if="getTrioPlayerTwoSearchResults.segments[0].stats.damage">
                            <h4>Damage Done</h4>
                            <p>
                                {{getTrioPlayerTwoSearchResults.segments[0].stats.damage.displayValue}}
                                <span>({{getTrioPlayerTwoSearchResults.segments[0].stats.damage.percentile}}%)</span>
                            </p>
                        </li>
                    </ul>
                </div>   
            </div>
            </div><!--  end of profile -->


            
        <div  class="profile-box" v-if="getTrioPlayerThreeSearchResults !== undefined || getTrioPlayerThreeSearchResults !== {}">
            Squad Member:  3
            <h1 class="gamertag">
               
                 {{getTrioPlayerThreeSearchResults.platformInfo.platformUserId}}
            </h1>
            <div class="grid">
                <div>
                     <img :src="getTrioPlayerThreeSearchResults.segments[1].metadata.imageUrl" alt="">
                </div>
                <div>
                    <ul class="stats-list">
                        <li>
                            <h4>Selected Legend</h4>
                            <p>{{getTrioPlayerThreeSearchResults.metadata.activeLegendName}}</p>
                        </li>
                         <li v-if="getTrioPlayerThreeSearchResults.segments[0].stats.season2Wins">
                              <h4>Season 2 Wins </h4>
                            <p>{{getTrioPlayerThreeSearchResults.segments[0].stats.season2Wins.displayValue}}</p>
                            <span>({{ getTrioPlayerThreeSearchResults.segments[0].stats.season2Wins.percentile }}%)</span>
                        </li>
                        <li v-if="getTrioPlayerThreeSearchResults.segments[0].stats.kills">
                            <h4>Lifetime Kills</h4>
                            <p>
                                {{getTrioPlayerThreeSearchResults.segments[0].stats.kills.displayValue}}
                                <span>({{getTrioPlayerThreeSearchResults.segments[0].stats.kills.percentile}}%)</span>
                            </p>
                            </li>
                            <li v-if="getTrioPlayerThreeSearchResults.segments[0].stats.damage">
                            <h4>Damage Done</h4>
                            <p>
                                {{getTrioPlayerThreeSearchResults.segments[0].stats.damage.displayValue}}
                                <span>({{getTrioPlayerThreeSearchResults.segments[0].stats.damage.percentile}}%)</span>
                            </p>
                        </li>
                    </ul>
                </div>   
            </div>
            </div><!--  end of profile -->




        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                profileData: false,
            }
        },

        computed:{
            getTrioPlayerOneSearchResults(){
               // alert('Player 1: ' + JSON.stringify(this.$store.getters.getTrioPlayerOneSearchResults, null, 2))
                return this.$store.getters. getTrioPlayerOneSearchResults;
            },
            getTrioPlayerTwoSearchResults(){
                 //alert('Player 2: ' + this.$store.getters.getTrioPlayerTwoSearchResults, null, 2);
                return this.$store.getters.getTrioPlayerTwoSearchResults;
            },
             getTrioPlayerThreeSearchResults(){
                 //alert('Player 2: ' + this.$store.getters.getTrioPlayerThreeSearchResults, null, 2);
                return this.$store.getters.getTrioPlayerThreeSearchResults;
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

<style scoped>
 .logo{
        height: 100vh;
        background-color: #000;
        /*background-image: url('../assets/apex-logo.png');*/
        background-repeat: no-repeat;
        background-size: 72%;
        background-position: 50% 30%;
}
.flex-cotainer{
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
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
  margin-top: 2rem;
  border: 2px solid #6200ea;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: 3px solid #6200ea;
  color: #6200ea;
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