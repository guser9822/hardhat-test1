import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {ethers} from "ethers";
import TokenABI from "./contracts/Token.sol/Token.json";

function App() {

    let TokenContract: any;

    const initContract = async (): Promise<void> => {
        // If you don't specify a //url//, Ethers connects to the default
        // (i.e. ``http:/\/localhost:8545``)
        const provider = new ethers.providers.JsonRpcProvider();
        const firstSigner = provider.getSigner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
        let balance: any = await provider.getBalance("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
        balance = ethers.utils.formatEther(balance);
        // The Contract object
        TokenContract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", TokenABI.abi, provider);
        console.log(balance, TokenContract);
    }
    initContract();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
