myApp.controller('bidsController', function(userFactory, bidFactory, $location, $window){
  var self = this

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
    }else{
      $location.url('/')
    }
  }
  checkSession()

  bidFactory.pencilIndex(function(data){
    console.log('loading product bids', data)
    self.pencils = data
  })
  bidFactory.computerIndex(function(data){
    console.log('loading computer bids', data)
    self.computers = data
  })
  bidFactory.tixIndex(function(data){
    console.log('loading ticket bids', data)
    self.tickets = data
  })

  self.pencilBid = function(){
    self.newBidPencil.product = 'Pencil'
    self.newBidPencil._user = self.user.id
    console.log(self.newBidPencil)
    bidFactory.pencilBid(self.newBidPencil, function(){
      console.log('sending pencil bid to server', self.newBidPencil)
      bidFactory.pencilIndex(function(data){
        console.log('loading product bids', data)
        self.pencils = data
      })
    })
  }
  self.computerBid = function(){
    self.newBidComp.product = 'Computer'
    self.newBidComp._user = self.user.id
    bidFactory.computerBid(self.newBidComp, function(){
      console.log('sending computer bid to server', self.newBidComp)
      bidFactory.computerIndex(function(data){
        console.log('loading computer bids', data)
        self.computers = data
      })
    })
  }
  self.tixBid = function(){
    self.newBidTix.product = 'Tickets'
    self.newBidTix._user = self.user.id
    bidFactory.tixBid(self.newBidTix, function(){
      console.log('sending tickets bid to server', self.newBidTix)
      bidFactory.tixIndex(function(data){
        console.log('loading ticket bids', data)
        self.tickets = data
      })
    })
  }
  self.endBids = function(){
    // if(!self.pencils OR !self.computers OR !self.tickets){
    //   $window.alert('Cannot end the bid. All products must be bid on.')
    //   $location.url('/bids')
    // }
    // else{
      $location.url('/results')
    // }
  }
  self.logout = function(){
    console.log('logging out')
    userFactory.logout
    $location.url('/')
  }

})
