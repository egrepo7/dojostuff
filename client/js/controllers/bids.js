myApp.controller('bidsController', function(userFactory, bidFactory, $location, $window){
  var self = this

  var highestPencil = 0
  var highestComp = 0
  var highestTix = 0

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
    }else{
      $location.url('/')
    }
  }
  checkSession()

  bidFactory.pencilIndex(function(data){
    console.log('loading pencil bids', data)
    self.pencils = data
    if(!self.pencils[self.pencils.length-1]){
      return
    }else{
      self.highestPencil = self.pencils[self.pencils.length-1].bid
    }
  })

  bidFactory.computerIndex(function(data){
    console.log('loading computer bids', data)
    self.computers = data
    if(!self.computers[self.computers.length-1]){
      return
    }else{
      self.highestComp = self.computers[self.computers.length-1].bid
    }
  })

  bidFactory.tixIndex(function(data){
    console.log('loading ticket bids', data)
    self.tickets = data
    if(!self.tickets[self.tickets.length-1]){
      return
    }else{
      self.highestTix = self.tickets[self.tickets.length-1].bid
    }
  })

  self.pencilBid = function(){
    if(self.newBidPencil.bid < 0){
      return
    }
    if(self.newBidPencil.bid <= self.highestPencil){
      self.bidnotgreater = true
      return;
    }
    self.newBidPencil.product = 'Pencil'
    self.newBidPencil._user = self.user.id
    console.log(self.newBidPencil)
    bidFactory.pencilBid(self.newBidPencil, function(){
      console.log('sending pencil bid to server', self.newBidPencil)
      bidFactory.pencilIndex(function(data){
        console.log('loading product bids', data)
        self.pencils = data
        self.highestPencil = self.pencils[self.pencils.length-1].bid
        self.bidnotgreater = false
        console.log(self.highestPencil)
      })
    })
  }
  self.computerBid = function(){
    if(self.newBidComp.bid < 0){
      return
    }
    if(self.newBidComp.bid <= self.highestComp){
      self.bidnotgreater = true
      return;
    }
    self.newBidComp.product = 'Computer'
    self.newBidComp._user = self.user.id
    bidFactory.computerBid(self.newBidComp, function(){
      console.log('sending computer bid to server', self.newBidComp)
      bidFactory.computerIndex(function(data){
        console.log('loading computer bids', data)
        self.computers = data
        self.highestComp = self.computers[self.computers.length-1].bid
        self.bidnotgreater = false

      })
    })
  }
  self.tixBid = function(){
    if(self.newBidTix.bid < 0){
      return
    }
    if(self.newBidTix.bid <= self.highestTix){
      self.bidnotgreater = true
      return;
    }
    self.newBidTix.product = 'Tickets'
    self.newBidTix._user = self.user.id
    bidFactory.tixBid(self.newBidTix, function(){
      console.log('sending tickets bid to server', self.newBidTix)
      bidFactory.tixIndex(function(data){
        console.log('loading ticket bids', data)
        self.tickets = data
        self.highestTix = self.tickets[self.tickets.length-1].bid
        self.bidnotgreater = false
      })
    })
  }
  self.endBids = function(){
    if(!self.pencils[0]){
      alert('nope')
    }
    // if(!self.computers[0]){
    //   alert('nope')
    // }
    // if(!self.tickets[0]){
    //   alert('nope')
    // }
    else{
      $location.url('/results')
    }
  }
  self.logout = function(){
    console.log('logging out')
    userFactory.logout
    $location.url('/')
  }

})
