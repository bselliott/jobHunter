export default function() {
 this.namespace ='/api'

  this.get('/people', function() {
     return{
      data:[{
        id: 1,
        type: 'people',
        attributes: {
          "first-name": 'Nick',
          "last-name": 'Fire',
          address: '1213 North E st.'
        }
        },{
          id: 2,
          type: 'people',
          attributes: {
           "first-name": 'Anna',
            "last-name": 'cold',
            address: 'Doesnt matter'
        }
      }]
    };
  });
}
