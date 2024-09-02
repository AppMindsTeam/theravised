import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
  Time,
} from 'react-native-gifted-chat';
import {Galleryicon, MicroPhoneicon, SendIcon} from '../../../assets/svg';
import {colors, fonts} from '../../utilities/theme';
import {ChatHeader} from '../../../component';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamsList, 'ChatDetails'>;

const ChatDetails: React.FC<Props> = ({navigation}) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <ChatHeader onPress={() => navigation.goBack()} />
      <GiftedChat
        inverted={messages?.length == 0 ? false : true}
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        showUserAvatar={false}
        showAvatarForEveryMessage={false}
        placeholder="Type a message ...."
        renderAvatarOnTop={false}
        messagesContainerStyle={
          messages?.length == 0 && {transform: [{scaleY: -1}]}
        }
        textInputProps={{
          color: colors.black,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                left: styles.leftTextStyle,
                right: styles.rightTextStyle,
              }}
              wrapperStyle={{
                right: styles.rightWrapperStyle,
                left: styles.leftWrapperStyle,
              }}
            />
          );
        }}
        renderSend={props => (
          <TouchableOpacity>
            <Send
              {...props}
              disabled={!props.text}
              containerStyle={styles.containerStyle}>
              <TouchableOpacity
                onPress={() => {
                  const trimmedText = props.text?.trim() ?? '';
                  if (props.onSend) {
                    props.onSend({text: trimmedText}, true);
                  }
                }}
                hitSlop={4}
                style={styles.sendIcon}>
                <SendIcon />
              </TouchableOpacity>
            </Send>
          </TouchableOpacity>
        )}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            containerStyle={styles.inputToolbarContainer}
            primaryStyle={[]}
            renderAccessory={() => (
              <View style={styles.inputIcons}>
                <TouchableOpacity
                  hitSlop={styles.hitSlopButton}
                  style={styles.attachmentIcon}>
                  <MicroPhoneicon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Galleryicon />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        renderTime={props => (
          <Time
            {...props}
            timeTextStyle={{
              left: styles.timeLeftTextStyle,
              right: styles.timeRightTextStyle,
            }}
          />
        )}
      />
    </View>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  leftTextStyle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.MontserratMedium,
  },
  rightTextStyle: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.MontserratMedium,
  },
  rightWrapperStyle: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    marginBottom: 22,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  leftWrapperStyle: {
    backgroundColor: colors.gray[300],
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    marginBottom: 32,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginLeft: -45,
  },

  timeLeftTextStyle: {
    color: colors.gray[50],
    textAlign: 'left',
    position: 'absolute',
    top: 14,
    left: -18,
  },
  timeRightTextStyle: {
    color: colors.gray[50],
    textAlign: 'right',
    position: 'absolute',
    top: 14,
    right: -18,
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputToolbarContainer: {
    backgroundColor: colors.gray[300],
    alignItems: 'center',
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E8E6EA',
    borderTopColor: '#E8E6EA',
    borderRadius: 16,
    width: '84%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    bottom: 10,
  },
  inputIcons: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    position: 'absolute',
    right: 32,
  },
  attachmentIcon: {
    right: 32,
  },
  sendIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 120,
    bottom: 2,
    left: 6,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 46,
    height: 46,
  },
  hitSlopButton: {
    left: 16,
    right: 16,
    bottom: 16,
    top: 16,
  },
});
