import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {images} from '../../assets/images';
import {FC, ReactNode, useState} from 'react';
import {colors, fonts} from '../../screens/utilities/theme';

interface Props extends TextInputProps {
  containerStyle?: ViewStyle;
  icon?: ReactNode;
  isPassword?: boolean;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  rightIcon?: ImageSourcePropType;
  inputStyles?: TextStyle;
  errorMessage?: string | false;
}

const FormInput: FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  containerStyle,
  icon,
  isPassword,
  secureTextEntry,
  onLeftIconPress,
  onRightIconPress,
  rightIcon,
  inputStyles,
  onBlur,
  keyboardType,
  editable,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={containerStyle}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: value ? colors.primary : colors.gray[100],
            marginTop: 20,
          },
        ]}>
        {icon}
        <TextInput
          style={[
            styles.textInput,
            inputStyles,
            {color: value ? colors.primary : colors.gray[100]},
          ]}
          placeholder={placeholder}
          placeholderTextColor={'#9E9E9E'}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          onBlur={() => {
            setIsFocused(false);
            // if (onBlur) onBlur();
          }}
          onFocus={() => setIsFocused(true)}
          keyboardType={keyboardType}
          editable={editable}
        />
        {isPassword ? (
          <TouchableOpacity onPress={onLeftIconPress}>
            <Image
              source={secureTextEntry ? images.hideicon : images.unhideicon}
              style={[
                styles.leftIconContainer,
                {tintColor: value ? colors.gray[50] : '#9E9E9E'},
              ]}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onRightIconPress}>
            {rightIcon ? (
              <Image
                source={rightIcon}
                style={[
                  styles.leftIconContainer,
                  {tintColor: value ? '#FF0000' : '#9E9E9E'},
                ]}
              />
            ) : null}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  leftIconContainer: {
    width: 20,
    height: 20,
  },
  textInput: {
    fontSize: 15,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    paddingLeft: 10,
    flex: 1,
  },
  errorText: {
    color: colors.red2,
    marginTop: 3,
    fontSize: 12,
    fontFamily: fonts.MontserratMedium,
  },
});

export default FormInput;
