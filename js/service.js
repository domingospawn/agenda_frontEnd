app.service('backEnd', function($resource){
  this.getContacts = function(){
    return $resource(be+'/contacts');
  };

  this.getPage = function(link){
    return $resource(link);
  };
});
