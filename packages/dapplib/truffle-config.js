require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note sad purse grace neck fresh gauge'; 
let testAccounts = [
"0xdd5b6dffb61ff9a69f1242ca49d33ac436ce37c06ebb92b3726d092ce5571a1a",
"0x8d936477a06cfb7974fd5db7dd87729882c9a946a39d38c822ca1f197cb0a789",
"0x184b2035048cf84740b65d912ce432ae91cf08a2dd2a173e3aa13d02afedb17e",
"0x44bf6f302acfd3dd0bcbf7e3b7872e9926373ea60fe8322ecc3d277249d3b3e7",
"0xb2ffe08cbe8f2f6e1baffdabb95f3d3ac47d37c6bac1075231f1cb970188cf32",
"0xf803a15e786ae9c35c3eb535df3d5f4274f287795fe7f3f87e4cf71111d3ed0b",
"0x0270c1b3d984d078403da901b1d57cee6185b11077592e7262325764c64f3df8",
"0x845d8d5ad69002515610eb75ecf4fc82b42d6d817390b812b4546fc1e98ada10",
"0x16999374cb3558a9ba685c465204d9dda81550ef2f960351803bdf220de98136",
"0x812569aaaf293c4fff7f010758a00d5270a2e8bcebf92d48f7b9fde802402017"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
