import { Audio } from 'expo-av';

export async function touchSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/touch.mp3')
    );

    console.log('Playing Sound');
    await sound.playAsync();
}

export async function backSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/back.mp3')
    );

    console.log('Playing Sound');
    await sound.playAsync();
}