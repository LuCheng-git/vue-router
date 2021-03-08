const myPlugin = store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
        // Called after every mutation
        // Mutation comes in the format `{ type, payload }`
        console.log(mutation);
        console.log(state)

    })
}

export default myPlugin