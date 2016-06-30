myApp.controller('resultsController', function(bidFactory, userFactory, $location){
  var self = this

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
    }else{
      $location.url('/')
    }
  }
  checkSession()

  bidFactory.topPencil(function(data){
    console.log('loading highest pencil bid', data)
    self.pencil = data
  })
  bidFactory.topComp(function(data){
    console.log('loading highest computer bid', data)
    self.comp = data
  })
  bidFactory.topTix(function(data){
    console.log('loading highest ticket bid', data)
    self.tix = data
  })
  self.logout = function(){
    console.log('logging out')
    userFactory.logout
    $location.url('/')
  }
  self.startover = function(){
    console.log('starting over')
    bidFactory.deleteBids(function(){
        $location.url('/bids')
    })
  }
})
