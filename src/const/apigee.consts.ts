//let env = process.env.REACT_APP_ENV || 'development'; //CHANGE REACT_APP_ENV TO PRODUCTION WHEN USING PRODUCTION


let development_apigee_const = {
  token_endpoint: 'https://apis-dev.intel.com/v1/auth/token',
  //secret: process.env.REACT_APP_APIGEE_DEV_SECRET,
  secret:  import.meta.env.VITE_APP_APIGEE_DEV_SECRET,
//   proxy: {
//     protocol: 'http',
//     host: 'proxy-dmz.intel.com',
//     port: 912,
//   },
};

let production_apigee_const = {
  token_endpoint: 'https://apis-dev.intel.com/v1/auth/token',
  //secret: process.env.REACT_APP_APIGEE_DEV_SECRET,
  secret:  import.meta.env.VITE_APP_APIGEE_DEV_SECRET,
//   proxy: {
//     protocol: 'http',
//     host: 'proxy-dmz.intel.com',
//     port: 912,
//   },
};

let apigee_constants = development_apigee_const;

export default apigee_constants;