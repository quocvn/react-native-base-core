import { Button, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StyledComponent } from 'nativewind';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <StyledComponent component={Layout} className='flex-1 items-center justify-center'>
      <StyledComponent
        component={Button}
        className='my-5'
        onPress={() => navigation.navigate('Home' as never)}
      >
        LOGIN
      </StyledComponent>
    </StyledComponent>
  );
};

export default LoginScreen;
