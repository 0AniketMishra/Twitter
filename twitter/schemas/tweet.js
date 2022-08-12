export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
      
    },
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
      
    },
    {
      name: 'blocktweet',
      title: 'Block tweet',
      description: 'Admin controls',
      type: 'boolean',
    },
    
    
  ],

  
}
