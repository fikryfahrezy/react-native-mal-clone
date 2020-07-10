import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Modal,
} from 'react-native';
// https://oblador.github.io/react-native-vector-icons/
import IconFa from 'react-native-vector-icons/FontAwesome';
import { login, clearError } from '../../actions/authActions';
import Logo from '../../../assets/logo.png';

const DEVICE = Dimensions.get('screen');

// https://stackoverflow.com/questions/50018039/react-native-getting-name-of-textinput-in-onchange
const TextInputComponent = ({ user, value, onChangeText, name, ...props }) => {
  return (
    <TextInput
      value={value[name]}
      onChangeText={(value) => onChangeText(name, value)}
      {...props}
      secureTextEntry={name === 'password' && true}
    />
  );
};

const Auth = (props) => {
  const [user, setUser] = useState({
    identifier: '',
    password: '',
  });
  const [modalVisible, setModalVisible] = useState({
    condition: false,
    name: '',
  });
  const [err, setErr] = useState(false);

  const { identifier, password } = user;
  const { condition, name } = modalVisible;
  const {
    login,
    auth,
    clearError,
    navigation: { replace },
  } = props;

  const onChangeValue = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const makeModalVisible = (name) => {
    setModalVisible({ ...modalVisible, condition: true, name });
  };

  const makeModalInvisible = () => {
    setModalVisible({ ...modalVisible, condition: false, name: '' });
  };

  const onSubmit = () => {
    if (identifier === '' || password === '') {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    } else {
      login({ identifier, password });
    }
  };

  useEffect(() => {
    setUser({
      identifier: '',
      password: '',
    });

    if (auth.error.length > 0) {
      setErr(true);
      setTimeout(() => {
        clearError();
        setErr(false);
      }, 3000);
    }

    if (auth.user) {
      replace('Home');
    }
  }, [auth.error, auth.user]);

  return (
    <View style={styles.container}>
      {/* https://reactnative.dev/docs/0.53/modal */}
      <StatusBar style="inverted" />
      <Image source={Logo} style={styles.headerImage} />
      <Text style={styles.signInText}>Sign In</Text>
      <View style={styles.errorField}>
        {err && <Text style={styles.errorText}>Invalid Credentials</Text>}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email / Username</Text>
        <TouchableOpacity onPress={() => makeModalVisible('identifier')}>
          <TextInput
            value={identifier}
            name="identifier"
            onChangeText={onChangeValue}
            placeholder="id"
            placeholderTextColor="#919191"
            style={styles.formInput}
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Password</Text>
        <TouchableOpacity onPress={() => makeModalVisible('password')}>
          <TextInput
            value={password}
            name="password"
            placeholder="123"
            placeholderTextColor="#919191"
            secureTextEntry={true}
            style={styles.formInput}
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onSubmit}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.registerOption}>
        <Text style={styles.registerMessage}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: '#F08BBD' }}>Register</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={condition}>
        <View style={styles.footerModal}>
          <TextInputComponent
            value={user}
            name={name}
            placeholder="Type here..."
            onChangeText={onChangeValue}
            onSubmitEditing={() => makeModalInvisible()}
            style={styles.modalInput}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => makeModalInvisible()}
          >
            {user[name] === '' ? (
              <IconFa name="close" color="#C92117" size={35} />
            ) : (
              <IconFa name="check" color="#18BC28" size={35} />
            )}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
  },
  headerImage: {
    resizeMode: 'contain',
    width: DEVICE.width * 0.6,
    height: DEVICE.height * 0.2,
    marginVertical: DEVICE.height * 0.03,
  },
  errorField: {
    height: DEVICE.height * 0.02,
    marginBottom: DEVICE.height * 0.02,
  },
  errorText: {
    color: '#FF007E',
  },
  signInText: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 25,
    color: '#FFFFFF',
    marginTop: DEVICE.height * 0.02,
    marginBottom: DEVICE.height * 0.04,
  },
  formGroup: {
    width: DEVICE.width * 0.7,
    marginVertical: DEVICE.height * 0.025,
  },
  formLabel: {
    fontSize: 14,
    lineHeight: 15,
    color: '#FFFFFF',
    marginLeft: DEVICE.width * 0.03,
    marginBottom: DEVICE.width * 0.03,
  },
  formInput: {
    backgroundColor: '#42394D',
    borderRadius: 25,
    color: '#919191',
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#F08BBD',
    borderRadius: 50,
    padding: 5,
    marginTop: 20,
    width: DEVICE.width * 0.4,
    height: DEVICE.height * 0.055,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  registerOption: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: DEVICE.width * 0.15,
  },
  registerMessage: {
    fontSize: 14,
    lineHeight: 15,
    color: '#FFFFFF',
  },
  footerModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: DEVICE.width,
  },
  modalInput: {
    marginBottom: 5,
    marginLeft: 10,
    width: DEVICE.width * 0.85,
  },
  confirmButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginEnd: 3,
    marginBottom: 5,
  },
});

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, clearError })(Auth);
