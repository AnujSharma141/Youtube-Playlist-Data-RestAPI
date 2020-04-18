const express = require('express')
const superagent = require('superagent')
const app = express()

port = 3001
  class snip{
    constructor(title,vid){
      this.title = title;
      this.vId = vid;
    }
  }  
  app.get('/api', (req, res) => {
    let bigData = []
    const vidData = async (vId) => {
      const response = await superagent
        .get('https://www.googleapis.com/youtube/v3/playlistItems')
        .query({playlistId: vId})
        .query({maxResults:10})
        .query({key: 'Youtube Data API key here'})
        .query({part: 'snippet'}); 
        bigData.length = 0
        let data = await JSON.parse(response.text)
        items = await data.items.map(item =>{
        let dat = new snip(item.snippet.title, item.snippet.resourceId.videoId)
        bigData.push(dat)
        })
        res.send(bigData)
      }
      vidData(key) //Insert playlist key as parameters 
  })
  
app.listen(port , () => console.log('listening on ' + port))
  
