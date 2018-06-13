export default function() {
 this.namespace ='/api'


  this.get('/people/:id');
  this.get('people/')
  this.patch('people/:id');
}
