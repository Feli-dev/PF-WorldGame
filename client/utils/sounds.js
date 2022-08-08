import { Audio } from 'expo-av';

export async function touchSound(soundOn) {
    console.log('Loading Sound');
    if(soundOn === true){
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/touch.mp3')
        );

        console.log('Playing Sound');
        await sound.playAsync();
    }
}

export async function backSound(soundOn) {
    console.log('Loading Sound');
    console.log(soundOn);
    if(soundOn === true){
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/back.mp3')
        );
        console.log('Playing Sound');
        await sound.playAsync();
    }
}

export async function winSound(){
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/ganar.mp3')
        );
        await sound.playAsync();
}

export async function looseSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/perder.mp3')
        );
        await sound.playAsync();
}

export async function playSound(dispatch,setStat, stat) {
    console.log(stat);
    if(stat?.soundObj === null){
        console.log('Loading Sound');
        const sound = new Audio.Sound();
        const status = await sound.loadAsync(
            require('../assets/sounds/a.mp3'),
            { shouldPlay: true }
            );
            console.log('Playing Sound');
            await sound.playAsync();
            console.log(status)
        dispatch(setStat({...stat, playbackObj: sound, soundObj: status}));
    }else if(stat?.soundObj.isLoaded && stat.soundObj.isPlaying){
        let status = await stat.playbackObj.setStatusAsync({ shouldPlay: false })
        dispatch(setStat({...stat, soundObj: status}))
    } else if(stat?.soundObj.isLoaded && stat.soundObj.isPlaying === false){{
        let status = await stat.playbackObj.setStatusAsync({ shouldPlay: true })
        dispatch(setStat({...stat, soundObj: status}))
    }

    }
}
