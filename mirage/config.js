export default function() {
 this.namespace ='/api'

  let people = [{
        type: 'people',
        id: 1,
        attributes: {
          "first-name": 'Nick',
          "last-name": 'Fire',
          address: '1213 North E st.'
        }
        },{
          type: 'people',
          id: 2,
          attributes: {
           "first-name": 'Anna',
            "last-name": 'cold',
            address: 'Doesnt matter'
        }
      }]
  // this.get('/people', function(db, request){
  //   if(request.queryParams.first_name !== undefined) {
  //     let filteredPeople = people.filter(function(i) {
  //       return i.attributes.first_name.toLowerCase().indexOf(request.queryParams.first_name.toLowerCase()) !== -1;
  //       });
  //     return {data: filteredPeople};
  //   } else {
  //     return {data: people};
  //   }
  // });

  this.get('/people/:id');
  this.get('people/')
  this.patch('people/:id');
}
