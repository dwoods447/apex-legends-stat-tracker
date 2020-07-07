import Vue from 'vue';
import Vuex from 'vuex';
import Api from './Services/Api'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
       
        single:{
            platform: null,
            gamertag: null,

            results: {
                player_one: {},
            }
        },
        duo:{
            player_one: {
              platform: null,
              gamertag: null,
            },
            player_two: {
                platform: null,
                gamertag: null,
            },
            results: {
                player_one: {},
                player_two: {},
            }
        },
        trio:{
            player_one: {
              platform: null,
              gamertag: null,
            },
            player_two: {
                platform: null,
                gamertag: null,  
            },
            player_three: {
                platform: null,
                gamertag: null,  
            },

            results: {
                player_one: {},
                player_two: {},
                player_three: {}
            }
        },

        hasErrors: false,
        isLoading: false,
        message: "Sorry we were unable to find that gamertag on that platform. Please be sure to take case-sensitvity into consideration."

    },
    mutations: {
        setPlatformForSingleMutation(state, platform){
            state.single.platform = '';
            state.single.platform = platform;
        },
        setPlatformForDuoPlayerOneMutation(state, platform){
            state.duo.player_one.platform = '';
            state.duo.player_one.platform = platform;
        },
        setPlatformForDuoPlayerTwoMutation(state, platform){
            state.duo.player_two.platform = '';
            state.duo.player_two.platform = platform;
        },
        setPlatformForTrioPlayerOneMutation(state, platform){
            state.trio.player_one.platform = '';
            state.trio.player_one.platform = platform;
        },
        setPlatformForTrioPlayerTwoMutation(state, platform){
            state.trio.player_two.platform = '';
            state.trio.player_two.platform = platform;
        },
        setPlatformForTrioPlayerThreeMutation(state, platform){
            state.trio.player_three.platform = '';
            state.trio.player_three.platform = platform;
        },


        setGamertagForSingleMutation(state, gamertag){
            state.single.gamertag = '';
            state.single.gamertag = gamertag;
        },
        setGamertagForDuoPlayerOneMutation(state, gamertag){
            state.duo.player_one.gamertag = '';
            state.duo.player_one.gamertag = gamertag;
        },
        setGamertagForDuoPlayerTwoMutation(state, gamertag){
            state.duo.player_two.gamertag = '';
            state.duo.player_two.gamertag = gamertag;
        },
        setGamertagForTrioPlayerOneMutation(state, gamertag){
            state.trio.player_one.gamertag = '';
            state.trio.player_one.gamertag = gamertag;
        },
        setGamertagForTrioPlayerTwoMutation(state, gamertag){
            state.trio.player_two.gamertag = '';
            state.trio.player_two.gamertag = gamertag;
        },
        setGamertagForTrioPlayerThreeMutation(state, gamertag){
            state.trio.player_three.gamertag = '';
            state.trio.player_three.gamertag = gamertag;
        },
        setPlayerOneSoloSearchResultsMutation(state, results){
            state.single.results.player_one = {};
            state.single.results.player_one = results;
        },
        setPlayerOneDuoSearchResultsMutation(state, results){
            state.duo.results.player_one = {};
            state.duo.results.player_one = results;
        },
        setPlayerTwoDuoSearchResultsMutation(state, results){
            state.duo.results.player_two = {};
            state.duo.results.player_two = results;
        },
        setPlayerOneTrioSearchResultsMutation(state, results){
            state.trio.results.player_one = {};
            state.trio.results.player_one = results;
        },
        setPlayerTwoTrioSearchResultsMutation(state, results){
            state.trio.results.player_two = {};
            state.trio.results.player_two = results;
        },
        setPlayerThreeTrioSearchResultsMutation(state, results){
            state.trio.results.player_three = {};
            state.trio.results.player_three = results;
        },

        clearResultsMutation(state){
            state.single.results.player_one = {};
            state.duo.results.player_one = {};
            state.duo.results.player_two = {};
            state.trio.results.player_one = {};
            state.trio.results.player_two = {};
            state.trio.results.player_three = {};
        },

        setLoadingStatusMutation(state){
           state.isLoading = !state.isLoading;
        },
        setErrorStatusMutation(state){
            state.hasErrors = !state.hasErrors;
        },
        setClearErrorStatusMutation(state){
            state.hasErrors = false;
        },
        
    },
    actions: {
        setLoadingStatusAction({commit}){
            commit('setLoadingStatusMutation');
        },
        setErrorStatusAction({commit}){
            commit('setErrorStatusMutation');
        },
        setClearErrorStatusAction({commit}){
            commit('setClearErrorStatusMutation');
        },
        clearResultsAction({commit}){
            commit('clearResultsMutation');
        },
        setPlatformForSingleAction({commit}, platform){
            commit('setPlatformForSingleMutation', platform);
        },
        setPlatformForDuoPlayerOneAction({commit}, platform){
            commit('setPlatformForDuoPlayerOneMutation', platform);
        },
        setPlatformForDuoPlayerTwoAction({commit}, platform){
            commit('setPlatformForDuoPlayerTwoMutation', platform);
        },
        setPlatformForTrioPlayerOneAction({commit}, platform){
            commit('setPlatformForTrioPlayerOneMutation', platform);
        },
        setPlatformForTrioPlayerTwoAction({commit}, platform){
            commit('setPlatformForTrioPlayerTwoMutation', platform);
        },
        setPlatformForTrioPlayerThreeAction({commit}, platform){
            commit('setPlatformForTrioPlayerThreeMutation', platform);
        },


        setGamertagForSingleAction({commit}, gamertag){
            commit('setGamertagForSingleMutation', gamertag);
        },
        setGamertagForDuoPlayerOneAction({commit}, gamertag){
            commit('setGamertagForDuoPlayerOneMutation', gamertag);
        },
        setGamertagForDuoPlayerTwoAction({commit}, gamertag){
            commit('setGamertagForDuoPlayerTwoMutation', gamertag);
        },
        setGamertagForTrioPlayerOneAction({commit}, gamertag){
            commit('setGamertagForTrioPlayerOneMutation', gamertag);
        },
        setGamertagForTrioPlayerTwoAction({commit}, gamertag){
            commit('setGamertagForTrioPlayerTwoMutation', gamertag);
        },
        setGamertagForTrioPlayerThreeAction({commit}, gamertag){
            commit('setGamertagForTrioPlayerThreeMutation', gamertag);
        },
        async submitSoloSearchAction(context){
            context.dispatch('setClearErrorStatusAction');
            context.dispatch('clearResultsAction');
            const formData = {
                playerOneGamertag: context.state.single.gamertag, 
                playerOnePlatform: context.state.single.platform, 
                
            }
            context.dispatch('setLoadingStatusAction');
            const resultsResp = (await Api.post('/api/v1/profile/solo-search/', formData)).data;
            console.log(`Solo results: ${JSON.stringify(resultsResp, null, 2)}`);
            if(resultsResp.status === 404){
                context.dispatch('setLoadingStatusAction');
                context.dispatch('setErrorStatusAction')
                return 'Error fetching data'
            }
            context.commit('setPlayerOneSoloSearchResultsMutation', resultsResp.playerOneData);
            context.dispatch('setLoadingStatusAction');
            return resultsResp;

        },
        async submitDuoSearchAction(context){
            context.dispatch('setClearErrorStatusAction');
            context.dispatch('clearResultsAction');
            const formData = {
                playerOnePlatform: context.state.duo.player_one.platform, 
                playerTwoPlatform: context.state.duo.player_two.platform, 
                playerOneGamertag: context.state.duo.player_one.gamertag,  
                playerTwoGamertag: context.state.duo.player_two.gamertag,
            }
            context.dispatch('setLoadingStatusAction');
            const resultsResp = (await Api.post('/api/v1/profile/duo-search/', formData)).data;
            if(resultsResp.status === 404){
                context.dispatch('setLoadingStatusAction');
                context.dispatch('setErrorStatusAction');
                return 'Error fetching data'
            }

            context.commit('setPlayerOneDuoSearchResultsMutation', resultsResp.playerOneData);
            context.commit('setPlayerTwoDuoSearchResultsMutation', resultsResp.playerTwoData);
            context.dispatch('setLoadingStatusAction');
            return resultsResp;
        },

        async submitTrioSearchAction(context){
            context.dispatch('setClearErrorStatusAction');
            context.dispatch('clearResultsAction');
            const formData = {
                playerOnePlatform: context.state.trio.player_one.platform,
                playerOneGamertag: context.state.trio.player_one.gamertag,  
                playerTwoPlatform: context.state.trio.player_two.platform, 
                playerTwoGamertag: context.state.trio.player_two.gamertag,
                playerThreePlatform: context.state.trio.player_three.platform,  
                playerThreeGamertag: context.state.trio.player_three.gamertag,
            }
            context.dispatch('setLoadingStatusAction');
            const resultsResp = (await Api.post('/api/v1/profile/trio-search/', formData)).data;
            if(resultsResp.status === 404){
                context.dispatch('setLoadingStatusAction');
                context.dispatch('setErrorStatusAction');
                return 'Error fetching data'
            }

            context.commit('setPlayerOneTrioSearchResultsMutation', resultsResp.playerOneData);
            context.commit('setPlayerTwoTrioSearchResultsMutation', resultsResp.playerTwoData);
            context.commit('setPlayerThreeTrioSearchResultsMutation', resultsResp.playerThreeData);
            context.dispatch('setLoadingStatusAction');
            return resultsResp;
        }
    },
    getters: {
        getLoadingStatus(state){
            return state.isLoading;
        },
        getErrorStatus(state){
            return state.hasErrors;
        },
        getMessage(state){
            return state.message;
        },
        getPlayerOneSingleInfo(state){
            return state.single;
        },
        getPlayerOneDuoInfo(state){
            return state.duo.player_one;
        },
        getPlayerTwoDuoInfo(state){
            return state.duo.player_two;
        },
        getPlayerOneTrioInfo(state){
            return state.trio.player_one;
        },
        getPlayerTwoTrioInfo(state){
            return state.trio.player_two;
        },
        getPlayerThreeTrioInfo(state){
            return state.trio.player_three;
        },
        getSoloPlayerOneSearchResults(state){
            if(state.single.results.player_one !== {}){
                return state.single.results.player_one.data;
            }else {
                return {}
            }
        },
        getDuosPlayerOneSearchResults(state){
            if(state.duo.results.player_one !== {}){
                return state.duo.results.player_one.data;
            }
        },
        getDuosPlayerTwoSearchResults(state){
            if(state.duo.results.player_two !== {}){
                return state.duo.results.player_two.data;
            }else {
                return {}
            }
        },

        getTrioPlayerOneSearchResults(state){
            if(state.trio.results.player_one !== {}){
                return state.trio.results.player_one.data;
            }else {
                return {}
            }
        },
        getTrioPlayerTwoSearchResults(state){
            if(state.trio.results.player_two !== {}){
                return state.trio.results.player_two.data;
            }else {
                return {}
            }
        },
        getTrioPlayerThreeSearchResults(state){
            if(state.trio.results.player_three !== {}){
                return state.trio.results.player_three.data;
            }else {
                return {}
            }
        },

    }
})



export default store;