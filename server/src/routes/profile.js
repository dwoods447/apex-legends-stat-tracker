const express = require('express');
const router = express.Router();
const fetch  = require('node-fetch');
const config = require('../config/config');
const ProfileController = require('../controllers/ProfileController')

router.get('/:platform/:gamertag', async(req, res, next)=>{
    try {
        const headers = {
            'TRN-Api-Key': config.trackerApiKey
        }

        const {platform, gamertag } = req.params;
        const resp = await fetch(`${config.trackerApiURL}/profile/${platform}/${gamertag}`, {
            headers
        });

        
        const data  = await resp.json();

        if(data.errors && data.errors.length > 0){
            //user not found
            res.status(404).json({status: 404});
        } else {
            // user found send response 
            res.status(200).json({data: data, status: 200});
        }
    } catch(err){
        console.log(err);
        res.status(500).json({message: 'Server error', status: 500});
    }
});
router.post('/solo-search', ProfileController.getSoloSearchResults);
router.post('/duo-search', ProfileController.getDuoSearchResults);
router.post('/trio-search', ProfileController.getTrioSearchResults);

module.exports = router;