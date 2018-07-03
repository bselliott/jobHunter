export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

   server.createList('people', 10);
   server.createList('job', 10);
   server.createList('recruiter', 10);
}
