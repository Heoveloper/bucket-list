import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {
    const _onPress = () => console.log('이거 누르면 완료항목 전체삭제');

    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#101010',
            }}
            onPress={_onPress}
        >
            <Text style={{color: '#cfcfcf', fontSize: 50, letterSpacing: 5,}}>완료항목 전체삭제</Text>
        </TouchableOpacity>
    )
}

export default EventButton;