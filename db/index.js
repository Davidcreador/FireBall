import * as firebase from 'firebase';

import config from '../config/config';

const firebaseApp = firebase.initializeApp(config.firebase);

export default firebaseApp;
