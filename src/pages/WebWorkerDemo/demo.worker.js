/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
export default () => {
    self.onmessage = async (message) => {
        const nbr = message.data;
        let sum = [];
        for (let index = 0; index < 1000000; index++) {
            sum[`element${index}`] = {
                age: index*index
            }
        }
        postMessage(sum);
    };
};