import { Alert } from 'react-native';

/**
 * Display alert in case of error.
 *
 * @param {string} text Text to display
 * @param {string} error The error details
 * @param {function} onRetry Callback in case of retry
 */
export function alertOfErrorWithRetry(text, error, onRetry) {
  Alert.alert(
      'Error',
      text + ': ' + error,
      [
        {
          text: 'Retry',
          onPress: () => onRetry(),
        },
        { text: 'Close' },
      ],
  );
}
