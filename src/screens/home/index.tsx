import React from 'react';
import { ImageProps } from 'react-native';
import { StyledComponent } from 'nativewind';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';

const HeartIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name='heart' />
);

const HomeScreen = () => {
  return (
    <StyledComponent component={Layout} className='flex-1 items-center justify-center'>
      <StyledComponent component={Text} className='text-center' category='h1'>
        Welcome to UI Kitten 😻
      </StyledComponent>
      <StyledComponent component={Text} className='text-center' category='s1'>
        Start with editing App.tsx to configure your App
      </StyledComponent>
      <StyledComponent component={Text} className='text-center' appearance='hint'>
        For example, try changing theme to Dark by using eva.dark
      </StyledComponent>
      <StyledComponent component={Button} className='my-5' accessoryLeft={HeartIcon}>
        LIKE
      </StyledComponent>
    </StyledComponent>
  );
};

export default HomeScreen;
