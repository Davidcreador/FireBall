const ReactNative = require('react-native');
const { StyleSheet } = ReactNative;

const constants = {
  primary: '#c74661',
  secondary: '#8bbcbc',
  ternary: '#8f7798',
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  listview: {
    flex: 1
  },
  loading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    textAlign: 'center'
  },
  li: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    alignItems: 'center'
  },
  liText: {
    flex: 0.7,
    color: '#333',
    fontSize: 14
  },
  buttonFav: {
    flex: 0.3,
    backgroundColor: constants.primary,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchButton: {
    backgroundColor: constants.primary,
    width: 150,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFavText: {
    color: 'white'
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: constants.ternary,
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22
  },
  center: {
    textAlign: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
});

module.exports = styles;
module.exports.constants = constants;
