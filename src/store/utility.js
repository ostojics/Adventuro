export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const deepClone = (object) => JSON.parse(JSON.stringify(object));