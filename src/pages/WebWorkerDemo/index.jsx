import { useEffect } from "react";
import Worker from "./demo.worker";
import WorkerBuilder from "./worker-builder";

const instance = new WorkerBuilder(Worker);
const WebWorkerDemo = () => {
    const expFn = () => {
        let sum = [];
        for (let index = 0; index < 1000000; index++) {
            sum[`element${index}`] = {
                age: index*index
            }
        }
        console.log('Sum', sum);
    }

    useEffect(() => {
        console.log('WebWorker Demo useEffect');
        instance.onmessage = (message) => {
            if (message) {
                console.log('Web Worker Demo message', message.data);
            }
        };

    }, []);

    return (
        <div>
            <h3>Web Worker Demo</h3>
            <button onClick={() => { expFn(); instance.postMessage(5);  }}>
                Send Message
            </button>
        </div>
    )
};

export default WebWorkerDemo;