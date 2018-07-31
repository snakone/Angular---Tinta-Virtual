// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* FireBase Configuration, Paste from FireBase Console */
  firebase: {
  apiKey: "AIzaSyAV_GcyVIC-6_wLyoG_E9ERg46liruFGko",
  authDomain: "angular-crud-abd07.firebaseapp.com",
  databaseURL: "https://angular-crud-abd07.firebaseio.com",
  projectId: "angular-crud-abd07",
  storageBucket: "angular-crud-abd07.appspot.com",
  messagingSenderId: "301570772226"
}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
