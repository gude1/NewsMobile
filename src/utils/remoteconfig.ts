import remoteConfig from '@react-native-firebase/remote-config';
import crashlytics from '@react-native-firebase/crashlytics';

export const setupRemoteConfigDefaults = async () => {
  try {
    await remoteConfig().setDefaults({
      awesome_new_feature: 'disabled',
    });
    const fetchedRemotely = await remoteConfig().fetchAndActivate();

    if (fetchedRemotely) {
      console.log('New configs were retrieved from the backend and activated.');
    } else {
      console.log(
        'No new configs were fetched from the backend, and the local configs were already activated',
      );
    }
  } catch (error) {
    crashlytics().recordError(new Error(JSON.stringify(error)));
  }
};
