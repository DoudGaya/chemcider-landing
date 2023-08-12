export default {
  name: 'applicants',
  type: 'document',
  title: 'Applicants',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name'
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number'
    }
  ]
}