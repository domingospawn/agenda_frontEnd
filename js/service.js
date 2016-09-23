app.service('backEnd', function($resource){
  this.getContacts = function(){
    return $resource('http://agenda.be/api/contacts');
  };

  this.getPage = function(link){
    return $resource(link);
  };
});

app.factory("Post", function($resource){
  return $resource("http://agenda.be/api/data", {}, {
    query: { method: 'GET', isArray: false},
    create: { method: 'POST'}
  });
});
