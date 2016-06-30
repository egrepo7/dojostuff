myApp.factory('bidFactory', function($http){
  var factory = {}

  factory.pencilIndex = function(callback){
    console.log('@ bidFactory.pencilIndex')
    $http.get('/pencil').success(function(data){
      callback(data)
    })
  }
  factory.topPencil = function(callback){
    console.log('@ bidFactory.topPencil')
    $http.get('/toppencil').success(function(data){
      callback(data)
    })
  }
  factory.computerIndex = function(callback){
    console.log('@ bidFactory.computerIndex')
    $http.get('/computer').success(function(data){
      callback(data)
    })
  }
  factory.topComp = function(callback){
    console.log('@ bidFactory.topComp')
    $http.get('/topcomp').success(function(data){
      callback(data)
    })
  }
  factory.tixIndex = function(callback){
    console.log('@ bidFactory.tixIndex')
    $http.get('/tix').success(function(data){
      callback(data)
    })
  }
  factory.topTix = function(callback){
    console.log('@ bidFactory.topTix')
    $http.get('/toptix').success(function(data){
      callback(data)
    })
  }

  factory.pencilBid = function(data, callback){
    console.log('sending pencil bid', data)
    $http.post('/newbid_p', data).success(function(output){
      callback()
    })
  }
  factory.computerBid = function(data, callback){
    console.log('sending computer bid', data)
    $http.post('/newbid_c', data).success(function(output){
      callback()
    })
  }
  factory.tixBid = function(data, callback){
    console.log('sending tickets bid', data)
    $http.post('/newbid_t', data).success(function(output){
      callback()
    })
  }
  factory.deleteBids = function(callback){
    $http.get('/delete').success(function(output){
      callback()
    })
  }

  return factory;
})
