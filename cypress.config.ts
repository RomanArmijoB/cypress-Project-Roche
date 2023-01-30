export default {
  viewportHeight : 1000,
  viewportWith : 10, 
  video: false, 
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx, ts, tsx}',
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples']    
  },
};
