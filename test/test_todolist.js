const SimpleContract = artifacts.require("TodoList");

contract("TodoList", async accounts => {
    it("should deploy", async () => {
        const instance = await SimpleContract.deployed();
        assert(instance.address !== '');
    });
});
    