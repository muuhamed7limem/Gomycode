// Task 1

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
        console.log(value);
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);


// Task 2

async function awaitCall() {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: "API Response Data" });
            }, 2000); // Simulates a 2-second API response
        });
    };

    const data = await fetchData();
    console.log(data);
}

awaitCall();


// Task 3 

async function awaitCallWithErrorHandling() {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success or failure
                Math.random() > 0.5 ? resolve({ data: "API Response Data" }) : reject(new Error("API Error"));
            }, 2000);
        });
    };

    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    }
}

awaitCallWithErrorHandling();
