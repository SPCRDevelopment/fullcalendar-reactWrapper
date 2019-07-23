export default class FullcalendarObjectMapper{
    getSettings (properties) {
        let newSettings = {
            plugins: [],
        };
        for (const key in properties) {
            if (properties.hasOwnProperty(key)) {
                newSettings[key] = properties[key];
            }
        }
        return newSettings;
    }
}
