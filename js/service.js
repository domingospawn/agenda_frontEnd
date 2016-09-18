app.service('backEnd', function($resource){
  this.getContacts = function(){
    return $resource('http://agenda.be/api/contacts');
  };

  this.getPage = function(link){
    return $resource(link);
  };
});
