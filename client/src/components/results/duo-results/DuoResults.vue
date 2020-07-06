<template>
    <div>
        Results:
        <div class="flex-cotainer">
           <div  class="profile-box" v-if="getDuosPlayerOneSearchResults !== undefined || getDuosPlayerOneSearchResults !== {}">
               Squad Member: 1
            <h1 class="gamertag"  v-if="getDuosPlayerTwoSearchResults">
                <!-- <img :src="getDuosPlayerOneSearchResults.platformInfo.avatarUrl" :alt="getDuosPlayerOneSearchResults.metadata.activeLegendName" class="platform-avatar"> -->
                 {{getDuosPlayerOneSearchResults.platformInfo.platformUserId}}
            </h1>
            <div class="grid">
                <div>
                     <img :src="getDuosPlayerOneSearchResults|imageFilter" alt="">
                </div>
                <div>
                    <ul class="stats-list">
                        <li>
                            <h4>Selected Legend</h4>
                            <p>{{getDuosPlayerOneSearchResults.metadata.activeLegendName}}</p>
                        </li>
                         <li v-if="getDuosPlayerOneSearchResults.segments[0].stats.season2Wins">
                              <h4>Season 2 Wins </h4>
                            <p>{{getDuosPlayerOneSearchResults.segments[0].stats.season2Wins.displayValue}}</p>
                            <span>({{ getDuosPlayerOneSearchResults.segments[0].stats.season2Wins.percentile }}%)</span>
                        </li>
                        <li v-if="getDuosPlayerOneSearchResults.segments[0].stats.kills">
                            <h4>Lifetime Kills</h4>
                            <p>
                                {{getDuosPlayerOneSearchResults.segments[0].stats.kills.displayValue}}
                                <span>({{getDuosPlayerOneSearchResults.segments[0].stats.kills.percentile}}%)</span>
                            </p>
                            </li>
                            <li v-if="getDuosPlayerOneSearchResults.segments[0].stats.damage">
                            <h4>Damage Done</h4>
                            <p>
                                {{getDuosPlayerOneSearchResults.segments[0].stats.damage.displayValue}}
                                <span>({{getDuosPlayerOneSearchResults.segments[0].stats.damage.percentile}}%)</span>
                            </p>
                        </li>
                    </ul>
                </div>   
            </div>
            </div><!--  end of profile -->

        <div  class="profile-box" v-if="getDuosPlayerTwoSearchResults !== undefined || getDuosPlayerTwoSearchResults !== {}">
            Squad Member:  2
            <h1 class="gamertag" v-if="getDuosPlayerTwoSearchResults">

                <!-- <img :src="getDuosPlayerTwoSearchResults.platformInfo.avatarUrl" :alt="getDuosPlayerTwoSearchResults.metadata.activeLegendName" class="platform-avatar"> -->
                 {{getDuosPlayerTwoSearchResults.platformInfo.platformUserId}}
            </h1>
            <div class="grid"  v-if="getDuosPlayerTwoSearchResults">
                <div>
                     <img :src="getDuosPlayerTwoSearchResults|imageFilter" alt="">
                </div>
                <div>
                    <ul class="stats-list">
                        <li v-if="getDuosPlayerTwoSearchResults.segments[0].stats.season2Wins">
                            <h4>Selected Legend</h4>
                            <p>{{getDuosPlayerTwoSearchResults.metadata.activeLegendName}}</p>
                        </li>
                         <li v-if="getDuosPlayerTwoSearchResults.segments[0].stats.season2Wins">
                              <h4>Season 2 Wins </h4>
                            <p>{{getDuosPlayerTwoSearchResults.segments[0].stats.season2Wins.displayValue}}</p>
                            <span>({{ getDuosPlayerTwoSearchResults.segments[0].stats.season2Wins.percentile }}%)</span>
                        </li>
                        <li v-if="getDuosPlayerTwoSearchResults.segments[0].stats.kills">
                            <h4>Lifetime Kills</h4>
                            <p>
                                {{getDuosPlayerTwoSearchResults.segments[0].stats.kills.displayValue}}
                                <span>({{getDuosPlayerTwoSearchResults.segments[0].stats.kills.percentile}}%)</span>
                            </p>
                            </li>
                            <li v-if="getDuosPlayerTwoSearchResults.segments[0].stats.damage">
                            <h4>Damage Done</h4>
                            <p>
                                {{getDuosPlayerTwoSearchResults.segments[0].stats.damage.displayValue}}
                                <span>({{getDuosPlayerTwoSearchResults.segments[0].stats.damage.percentile}}%)</span>
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
            getDuosPlayerOneSearchResults(){
               //alert('Player 1: ' + JSON.stringify(this.$store.getters.getDuosPlayerOneSearchResults, null, 2))
                return this.$store.getters.getDuosPlayerOneSearchResults;
            },
            getDuosPlayerTwoSearchResults(){
                 //alert('Player 2: ' + this.$store.getters.getDuosPlayerTwoSearchResults, null, 2);
                return this.$store.getters.getDuosPlayerTwoSearchResults;
            },
        },
        filters: {
          imageFilter(src){
            alert(`Image filter: ${JSON.stringify(src)}`);
            if(src !== undefined){
              return `${src.segments[1].metadata.imageUrl}`;
            }else {
              return "http://via.placeholder.com/400x300"
            }
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