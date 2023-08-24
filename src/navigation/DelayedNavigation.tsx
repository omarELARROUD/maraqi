import React, { useEffect, useRef } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const DelayedNavigation: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFocused) {
      timeoutRef.current = setTimeout(() => {
        navigation.navigate('Language' as never);
      }, 3000);
    } else {
      clearTimeout(timeoutRef.current!);
    }

    return () => {
      clearTimeout(timeoutRef.current!);
    };
  }, [navigation, isFocused]);

  return null;
};

export default DelayedNavigation;