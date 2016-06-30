var Bid = mongoose.model('Bid')
var User = mongoose.model('User')

module.exports = (function(){
  return{
    loadPencils: function(req, res){
      Bid.find({ product: 'Pencil' }).populate('_user').exec(function(err, data){
        if(err){
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
    topPencil: function(req, res){
      Bid.findOne({ product: 'Pencil' }).populate('_user').sort('-bid').exec(function(err, bid){
        if(err){
          res.json(err)
        }else{
          res.json(bid)
        }
      })
    },
    loadComputers: function(req, res){
      Bid.find({ product: 'Computer' }).populate('_user').exec(function(err, data){
        if(err){
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
    topComp: function(req, res){
      Bid.findOne({ product: 'Computer' }).populate('_user').sort('-bid').exec(function(err, bid){
        if(err){
          res.json(err)
        }else{
          res.json(bid)
        }
      })
    },
    loadTix: function(req, res){
      Bid.find({ product: 'Tickets' }).populate('_user').exec(function(err, data){
        if(err){
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
    topTix: function(req, res){
      Bid.findOne({ product: 'Tickets' }).populate('_user').sort('-bid').exec(function(err, bid){
        if(err){
          res.json(err)
        }else{
          res.json(bid)
        }
      })
    },
    bidPencil: function(req, res){
      console.log(req.body)
      var newPencil = new Bid(req.body)
      newPencil.save(function(err){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    },
    bidComputer: function(req, res){
      console.log(req.body)
      var newComp = new Bid(req.body)
      newComp.save(function(err){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    },
    bidTix: function(req, res){
      console.log(req.body)
      var newTix = new Bid(req.body)
      newTix.save(function(err){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    },
    deleteAll: function(req, res){
      Bid.remove({}, function(err){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    }
  }
})()
