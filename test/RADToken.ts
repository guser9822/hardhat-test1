import {ethers} from "hardhat";
import {expect} from "chai";

describe("Radioactive Token contract", function () {
    let RADToken: any;
    let HHRADToken: any;
    let owner: any;
    let addr1: any;
    let addr2: any;
    let addrs: any;

    beforeEach(async () => {
        // Get the ContractFactory and Signers here.
        RADToken = await ethers.getContractFactory("RADToken");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        HHRADToken = await RADToken.deploy(1000000000);
    })

    describe("Token information match", async () => {
        it("Should match basic token information", async () => {
            expect(await HHRADToken.name()).to.equal("Radioactive");
            expect(await HHRADToken.symbol()).to.equal("RDT");
            expect(await HHRADToken.totalSupply()).to.equal(1000000000);
        })
    })
})