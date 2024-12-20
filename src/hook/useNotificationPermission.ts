import React from 'react';
import messaging from '@react-native-firebase/messaging';
import { AppState, Platform, PermissionsAndroid } from 'react-native';

export type NotifiPermiStatus = 'granted' | 'denied' | 'not-determined';
export type NotifiPermReqResult = 'granted' | 'denied' | 'not-determined';

interface NotifiPermiState {
    hasPermission: boolean;
    requestPermission: () => Promise<boolean>;
}

function usePermission(get: () => Promise<NotifiPermiStatus>, request: () => Promise<NotifiPermReqResult>): NotifiPermiState {
    const hasPermissionRef = React.useRef(false);
    const appStateRef = React.useRef(AppState.currentState);

    const requestPermission = React.useCallback(async () => {
        const result = await request();
        const hasPermissionNow = result === 'granted';
        hasPermissionRef.current = hasPermissionNow;
        return hasPermissionNow;
    }, [request]);

    React.useEffect(() => {
        const listener = AppState.addEventListener('change', async (nextAppState) => {
            if (nextAppState === 'active' && appStateRef.current !== 'active') {
                const status = await get();
                const hasPermissionNow = status === 'granted';
                hasPermissionRef.current = hasPermissionNow;
            }
            appStateRef.current = nextAppState;
        });
        return () => listener.remove();
    }, [get]);

    return React.useMemo(() => ({
        hasPermission: hasPermissionRef.current,
        requestPermission,
    }), [requestPermission]);
}

async function getNotifiPermiStatus(): Promise<NotifiPermiStatus> {
    try {
        const authStatus = await messaging().hasPermission();
        return authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL
            ? 'granted' : 'denied';
    } catch (error) {
        console.log('Error checking notification permission status:', error);
        return 'not-determined';
    }
}

async function requestNotificationPermission(): Promise<NotifiPermReqResult> {
    try {
        if (Platform.OS === 'android') {
            if (Platform.Version >= 33) {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
                return granted === PermissionsAndroid.RESULTS.GRANTED ? 'granted' : 'denied';
            } else {
                const authStatus = await messaging().requestPermission();
                return authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL
                    ? 'granted' : 'denied';
            }
        } else {
            const authStatus = await messaging().requestPermission();
            return authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL
                ? 'granted' : 'denied';
        }
    } catch (error) {
        console.log('Error requesting notification permission:', error);
        return 'denied';
    }
}

export function useNotificationPermission(): NotifiPermiState {
    return usePermission(getNotifiPermiStatus, requestNotificationPermission);
}

export function useFCMToken(hasPermission: boolean): string {
    const tokenRef = React.useRef<string | null>(null);
    // Fetch the token only once when permission is granted, or when the token is refreshed.
    React.useEffect(() => {
        if (hasPermission) {
            async function fetchToken() {
                try {
                    // Fetch the token once on the first render when permission is granted
                    const token = await messaging().getToken();
                    tokenRef.current = token;
                    console.log("FCM Token:", token);
                } catch (error) {
                    console.log("Error getting FCM token:", error);
                }
            }
            fetchToken();

            // Listen for token refreshes
            const unsubscribe = messaging().onTokenRefresh((newToken) => {
                if (tokenRef.current !== newToken) {
                    tokenRef.current = newToken;
                    console.log("FCM Token refreshed:", newToken);
                }
            });

            return () => unsubscribe();
        }
        return () => { };
    }, [hasPermission]);

    return tokenRef.current || '';
};