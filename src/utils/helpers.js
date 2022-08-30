import GetLocation from 'react-native-get-location';
import DeviceInfo from 'react-native-device-info';


export const geoLocation =async ()=>{
    return  await GetLocation.getCurrentPosition({ enableHighAccuracy: true,  timeout: 15000,})
}

export const getDeviceInfo = ()=>{
    const data={
        brand:DeviceInfo.getBrand(),
        model:DeviceInfo.getModel(),
        systemVersion:DeviceInfo.getSystemVersion(),
        version:DeviceInfo.getVersion(),
      
    }
    return data
}
