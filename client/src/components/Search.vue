<template>
    <section class="search">
            <h1 class="text-align: left;">Find Player Stats</h1>
            <v-form @submit.prevent="onSubmit" class="search-form">
                 <v-col class="d-flex" cols="12" md="12"  sm="12">
                    <v-select
                    :items="platforms"
                    label="Gaming Platform"
                    outlined
                    class="search-form"
                    v-model="platform"
                    v-validate="'required'"
                    name="platform"
                    ></v-select>
                    <span>{{ errors.first('platform') }}</span>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                <v-text-field
                    label="Gamertag"
                    placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc"
                    outlined
                    v-model="gamertag"
                    v-validate="'required'"
                    name="gamertag"
                ></v-text-field>
                 <span>{{ errors.first('gamertag') }}</span>
                </v-col>
                <v-col>
                    <v-btn  color="deep-purple accent-4" @click="onSubmit"><span style="color: #fff;">Submit</span></v-btn>
                </v-col>
            </v-form>
    </section>  
</template>
<script>
import { Validator } from 'vee-validate';
const dict = {
    custom: {
        platform: {
            required: 'Please select a platform',
            excluded: 'Please select a platform'
        },
        gamertag: {
            required: 'Please enter your gamertag'
        }
    }
}
Validator.localize('en', dict);
export default {
    data(){
        return {
            platform: '',
            gamertag: '',
            platforms: [
             {text: 'Playstation', value: 'psn'},
             {text: 'XBox', value: 'xbl'},
             {text: 'Origin', value: 'origin'},
            ]
        }
    },
    methods: {
        onSubmit(){
            this.$validator.validateAll().then((result) => {
                    if (!result) {
                       return;
                    }
                    this.searchGamerTag();
           });
            
        },
        searchGamerTag(){
            this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
        }
    }
}
</script>
<style>
    .search{
        width: 35%;
        background-color: rgba(255, 255, 255 , 0.9);
        border: 6px solid #6200ea;
        margin: 0 auto;
        position: absolute;
        top: 43%;
        left: 33%;
    }

    .search-form{
        display: block;
        width: 100%;
        padding: 1em;
    }
</style>