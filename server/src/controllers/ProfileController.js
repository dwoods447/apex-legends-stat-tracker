


const config = require('../config/config');
const fetch  = require('node-fetch');
module.exports = {
    async getSoloSearchResults(req, res, next){
        try {
            const headers = {
                'TRN-Api-Key': config.trackerApiKey
            }
    
            const { playerOnePlatform, playerOneGamertag} = req.body;
            const playerOneResp = await fetch(`${config.trackerApiURL}/profile/${playerOnePlatform}/${playerOneGamertag}`, {
                headers
            });
            const playerOneData  = await playerOneResp.json();
        
    
            if(playerOneData.errors && playerOneData.errors.length > 0){
                //user not found
                res.status(404).json('Error fetching profile: not found');
            } else {
                // user found send response 
                res.status(200).json({playerOneData: playerOneData});
            }
        } catch(err){
            console.log(err);
            res.status(500).json({message: 'Server error'});
        }
    },
    async getDuoSearchResults(req, res, next){
        try {
            const headers = {
                'TRN-Api-Key': config.trackerApiKey
            }
    
            const { playerOnePlatform, playerOneGamertag,  playerTwoPlatform, playerTwoGamertag} = req.body;
            console.log(`Rec'vd on server ${JSON.stringify(playerOnePlatform, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerOneGamertag, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerTwoPlatform, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerTwoGamertag, null, 2)}`);
            const playerOneResp = await fetch(`${config.trackerApiURL}/profile/${playerOnePlatform}/${playerOneGamertag}`, {
                headers
            });
    
            const playerTwoResp = await fetch(`${config.trackerApiURL}/profile/${playerTwoPlatform}/${playerTwoGamertag}`, {
                headers
            });
            
            const playerOneData  = await playerOneResp.json();
            const playerTwoData  = await playerTwoResp.json();
    
            if(playerOneData.errors && playerOneData.errors.length > 0 || playerTwoData.errors && playerTwoData.errors.length > 0){
                //user not found
                res.status(404).json('Error fetching profile: not found');
            } else {
                // user found send response 
                res.status(200).json({playerOneData: playerOneData, playerTwoData: playerTwoData});
            }
        } catch(err){
            console.log(err);
            res.status(500).json({message: 'Server error'});
        }
    },

    async getTrioSearchResults(req, res, next){
        try {
            const headers = {
                'TRN-Api-Key': config.trackerApiKey
            }
    
            const { playerOnePlatform, playerOneGamertag,  playerTwoPlatform, playerTwoGamertag, playerThreePlatform, playerThreeGamertag } = req.body;
            console.log(`Rec'vd on server ${JSON.stringify(playerOnePlatform, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerOneGamertag, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerTwoPlatform, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerTwoGamertag, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerThreePlatform, null, 2)}`);
            console.log(`Rec'vd on server ${JSON.stringify(playerThreeGamertag, null, 2)}`);
            const playerOneResp = await fetch(`${config.trackerApiURL}/profile/${playerOnePlatform}/${playerOneGamertag}`, {
                headers
            });
    
            const playerTwoResp = await fetch(`${config.trackerApiURL}/profile/${playerTwoPlatform}/${playerTwoGamertag}`, {
                headers
            });

            const playerThreeResp = await fetch(`${config.trackerApiURL}/profile/${playerThreePlatform}/${playerThreeGamertag}`, {
                headers
            });
            
            const playerOneData  = await playerOneResp.json();
            const playerTwoData  = await playerTwoResp.json();
            const playerThreeData  = await playerThreeResp.json();
    
            if(playerOneData.errors && playerOneData.errors.length > 0 || playerTwoData.errors && playerTwoData.errors.length > 0 || playerThreeData.errors && playerThreeData.errors.length > 0){
                //user not found
                res.status(404).json('Error fetching profile: not found');
            } else {
                // user found send response 
                res.status(200).json({playerOneData: playerOneData, playerTwoData: playerTwoData, playerThreeData: playerThreeData});
            }
        } catch(err){
            console.log(err);
            res.status(500).json({message: 'Server error'});
        }
    }

}