var User = require('../controllers/users.js')
var Bid = require('../controllers/bids.js')

module.exports = function() {
  app.post('/login', User.login)
  app.post('/newbid_p', Bid.bidPencil)
  app.post('/newbid_c', Bid.bidComputer)
  app.post('/newbid_t', Bid.bidTix)

  app.get('/delete', Bid.deleteAll)
  app.get('/toptix', Bid.topTix)
  app.get('/topcomp', Bid.topComp)
  app.get('/toppencil', Bid.topPencil)
  app.get('/pencil', Bid.loadPencils)
  app.get('/computer', Bid.loadComputers)
  app.get('/tix', Bid.loadTix)
}
