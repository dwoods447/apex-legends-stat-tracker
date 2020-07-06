<template>
    <div>
            <div class="logo">
             <div :class="{'wraith': isWraith, 
             'bangalore': isBangalore, 
             'gibralter': isGibralter, 
             'octane': isOctane, 
             'caustic': isCaustic, 
             'revenant': isRevenant, 
             'loba': isLoba,
             'lifeline': isLifeLine}
             ">
                 <!-- <search-form></search-form> -->
                <div class="flex-container">
                    <div class="flex-item flex-button-link flex-container">
                        <!-- <h1>Single Legend Stats</h1> -->
                        <router-link to="/solo-search" class="btn-link">Single Legend Stats</router-link>
                    </div>
                    <div class="flex-item flex-button-link flex-container">
                        <!-- <h1>Duo Squad Legend Stats Comparison</h1> -->
                        <router-link to="/duosquad-search" class="btn-link">Duo Squad Legend Stats Comparison</router-link>
                    </div>
                    <div class="flex-item flex-button-link flex-container">
                        <!-- <h1>Trio Squad Legend Stats Comparison</h1> -->
                         <router-link to="/triosquad-search" class="btn-link">Trio Squad Legend Stats Comparison</router-link>
                    </div>
                </div>
             </div>
            </div>
    </div>
</template>
<script>
//import Search from './Search';
export default {
    components: {
        // 'search-form': Search
    },
    mounted(){
        this.setBackgroundImg();
    },
    data(){
        return {
            isWraith: false, 
            isBangalore: false,
            isGibralter: false,
            isPathfinder: false,
            isBloodHound: false,
            isOctane: false,
            isCaustic: false,
            isRevenant: false,
            isLoba: false,
            isLifeLine: false,
        }
    },

    methods:{
         setBackgroundImg(){
             let backgrounds = [
                 {type: 'isWraith'}, 
                 {type: 'isBangalore'}, 
                 {type: 'isGibralter'}, 
                 {type: 'isOctane'},
                 {type: 'isCaustic'},
                 {type: 'isRevenant'},
                 {type: 'isLoba'},
                 {type: 'isLifeLine'},
            ];
            let backgroundLenth = backgrounds.length - 1;
            let selectedIndex = this.getRandomArbitrary(0, backgroundLenth);
            if (selectedIndex == 0) {
                this.isWraith = !this.isWraith;
                this.isBangalore  = false;
                this.isGibralter = false;
                this.isOctane = false;
                this.isCaustic = false;
                this.isRevenant = false;
                this.isLoba = false;
                this.isLifeLine = false;    
            }
             if (selectedIndex == 1) {
               this.isBangalore  = !this.isBangalore;
                this.isWraith =   false;
                this.isGibralter = false;
                this.isOctane = false;
                this.isCaustic = false;
                this.isRevenant = false;
                this.isLoba = false;
                this.isLifeLine = false;    
            }
             if (selectedIndex == 2) {
                this.isGibralter = !this.isGibralter;
                this.isBangalore  = false;
                this.isWraith =  false;
                this.isOctane = false;
                this.isCaustic = false;
                this.isRevenant = false;
                this.isLoba = false;
                this.isLifeLine = false;    
            }
             if (selectedIndex == 3) {
                this.isOctane = !this.isOctane;
                this.isBangalore  = false;
                this.isGibralter = false;
                this.isPathfinder = false;
                this.isBloodHound = false;
                this.isWraith =  false;
                this.isCaustic = false;
                this.isRevenant = false;
                this.isLoba = false;
                this.isLifeLine = false;    
            }
             if (selectedIndex == 4) {
               this.isCaustic = !this.isCaustic;  
                this.isOctane = false;
                this.isBangalore  = false;
                this.isGibralter = false;
                this.isPathfinder = false;
                this.isBloodHound = false;
                this.isWraith =  false;
                this.isRevenant = false;
                this.isLoba = false;
                this.isLifeLine = false;    
            }

            if (selectedIndex == 5) {
                this.isRevenant = !this.isRevenant;
                this.isCaustic = false;  
                this.isOctane = false;
                this.isBangalore  = false;
                this.isGibralter = false;
                this.isPathfinder = false;
                this.isBloodHound = false;
                this.isWraith =  false;
                this.isLoba = false;
                this.isLifeLine = false;    
            }
            if(selectedIndex == 6){
              this.isLoba = !this.isLoba; 
               this.isCaustic = false;  
                this.isOctane = false;
                this.isBangalore  = false;
                this.isGibralter = false;
                this.isPathfinder = false;
                this.isBloodHound = false;
                this.isWraith =  false; 
                this.isLifeLine = false;    
            }
            if(selectedIndex == 7){
                this.isLifeLine = !this.isLifeLine; 
                this.isCaustic = false;  
                this.isOctane = false;
                this.isBangalore  = false;
                this.isGibralter = false;
                this.isPathfinder = false;
                this.isBloodHound = false;
                this.isWraith =  false; 
                this.isLoba = false;    
            }
           
         },

        getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
         
    }

   
}
</script>
<style>
    .container{
            max-width: 100% !important;
    }
    .logo{
        background-color: #000;
        background-image: url('../assets/apex-logo.png');
        background-repeat: no-repeat;
        background-size: 72%;
        background-position: 50% 30%;
    }
    .wraith{
        height: 100vh;
        background-image: url('../assets/wraith-2.png'); 
        background-repeat: no-repeat; 
        background-size: 18%; 
        background-position: 50% 10%;
    }
     .bangalore{
        height: 100vh;
        background-image: url('../assets/bangalore.png'); 
        background-repeat: no-repeat; 
        background-size: 20%; 
        background-position: 50% 50%;
    }
     .pathfinder{
        height: 100vh;
        background-image: url('../assets/Apex-Legends-Pathfinder-Quicksilver-Skin-Transparent.png'); 
        background-repeat: no-repeat; 
        background-size: 28%; 
        background-position: 50% 50%;
    }.gibralter{
        height: 100vh;
        background-image: url('../assets/apex-legends-gibraltar-character-art-01-ps4-us-25feb19.png'); 
        background-repeat: no-repeat; 
        background-size: 30.2%; 
        background-position: 50% 50%;
    }
     .bloodhound{
        height: 100vh;
        background-image: url('../assets/428-4280160_bloodhound-apex-legends-bloodhound-wallpaper-hd-hd-png.png'); 
        background-repeat: no-repeat; 
        background-size: 18%; 
        background-position: 50% 10%;
    }
     .octane{
        height: 100vh;
        background-image: url('../assets/158-1589869_apex-legends-octane.png'); 
        background-repeat: no-repeat; 
        background-size: 28%; 
        background-position: 50% 50%;
    }

    .caustic{
        height: 100vh;
        background-image: url('../assets/caustic.png'); 
        background-repeat: no-repeat; 
        background-size: 24.4%; 
        background-position: 50% 50%;
    }

    .revenant{
        height: 100vh;
        background-image: url('../assets/revenant.png'); 
        background-repeat: no-repeat; 
        background-size: 26.4%; 
        background-position: 50% 50%;
    }

    .loba{
        height: 100vh;
        background-image: url('../assets/loba.png'); 
        background-repeat: no-repeat; 
        background-size: 24.4%; 
        background-position: 50% 50%;
    }

    .lifeline{
        height: 100vh;
        background-image: url('../assets/lifeline.png'); 
        background-repeat: no-repeat; 
        background-size: 26.4%; 
        background-position: 50% 50%;
    }


    .flex-container{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .flex-button-link{
       color: #fff;
       /*background-color: blue;*/
       width: 600px;
       height: 65px; 
       margin: 5px;
       text-align: center;
       vertical-align: -webkit-baseline-middle;
    }

    .flex-button-link h1{
        text-align: center;
    }

    .btn-link{
        width: 450px;
        height: 60px;
        color: #fff;
        font-weight: 800;
        background-color: #6200EA;
        display: block;
        padding: 1em;
        font-family: Milo, sans-serif;
        text-decoration: none;
        border: 2px solid #fff;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;   
    }

    .btn-link:after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #fff;
        transition: all .35s;
    }

    .btn-link:hover{
        color: #6200EA;
        font-weight: 700;
        background: #fff;
        transition: all .35s;  
    }
    
</style>