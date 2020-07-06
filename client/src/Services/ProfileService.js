import Api from './Api';

export default {
    requestGamerTag(platform, gamertag){
        return Api.get(`/api/v1/profile/${platform}/${gamertag}`);
    }
}