export default function() {
  this.get('https://auth2test.imtapps.com/api/user/details/', () => {
    // eslint-disable-next-line max-len
    return '{"status": "OK", "agency": {"agency_name": "", "agency_code": "", "agency_id": ""}, "user": {"username": "wes.stclair", "is_superuser": false, "first_name": "Wes", "last_name": "St. Clair", "is_staff": false, "company": 1, "agency": "", "is_active": true, "email": "wes.stclair@imtapps.com"}}';
   });

  this.get('https://configtest.imtapps.com/api/company/1/', () => {
    // eslint-disable-next-line max-len
    return '{"company_id":1,"clean_website":"http://www.Used-in-Emin-integration-tests.gov","al3_machine_address":"IBM515IM20050001  ","company_logo_url":"","primary_email":"matt.morrison@imtapps.com","primary_contact_name":"Matt","address1":"","address2":"","city":"","state":"","zip_code":"","zip_plus":"","postal_code":"","country":"","mips_id":"","company_name":"Matts Test","abbreviated_name":" ","time_zone":"America/Chicago","website":"http://www.Used-in-Emin-integration-tests.gov","reinsurer_company_id":"","send_dec":false,"naic_code":"MAT","primary_phone":"","primary_fax":"","advisory_org":1,"creation_time":"2015-06-25T09:01:37","last_update_time":"2016-10-04T11:34:07.010723","release_channel":"latest","imt_liability":false,"is_active":true,"password_expiration":null,"address":"","geolocation":"","apps_path":"","logo":"","api_key":"57e9e62f8f514725ac4b94585761b17c"}';
  });
   this.namespace = 'api';

  this.get('http://localhost.imtapps.com/api/people');
  this.get('http://localhost.imtapps.com/api/people/:id');
  this.delete('http://localhost.imtapps.com/api/people/:id');
  this.patch('http://localhost.imtapps.com/api/people/:id');
  this.post('http://localhost.imtapps.com/api/people');

  this.get('http://localhost.imtapps.com/api/jobs');
  this.delete('http://localhost.imtapps.com/api/jobs/:id');
  this.post('http://localhost.imtapps.com/api/jobs');
  this.get('http://localhost.imtapps.com/api/jobs/:id');
  this.patch('http://localhost.imtapps.com/api/jobs/:id');

  this.get('http://localhost.imtapps.com/api/recruiters');
  this.post('http://localhost.imtapps.com/api/recruiters');
  this.patch('http://localhost.imtapps.com/api/recruiters/:id');
  this.get('http://localhost.imtapps.com/api/recruiters/:id');
  this.delete('http://localhost.imtapps.com/api/recruiters/:id');
}
