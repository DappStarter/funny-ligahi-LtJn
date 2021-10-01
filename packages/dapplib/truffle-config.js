require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy cruise outside code hard light army genius'; 
let testAccounts = [
"0x8b7354988d360610cc5b441d44fe02efdaf15c7a6fe69ba672bc66871ad1ebbb",
"0xe1248a683f69c23c83b5138b66a5ee0f3302d5e502f303da3d1c95d6381efcdb",
"0x1f6d741c77facc16c3df847d9d463a25ca6b8a2962e795b617ae6e258b058c08",
"0x32a530639defa032f48e3af10b9947602901723dc78cc7aae43016d54a361488",
"0x8afecb723ad3767c9ebce70de4b7d07e03ed1ebf62fa74180d1af5ac9fb9096b",
"0x36057b2f3ec3039e059d275e2f667b83a1ce411de9853d87a21f2d7e36b24d61",
"0xdf3f97c3905524b1894d477e956f235d35b70788d00835bf795fcbdc438a0fbc",
"0xeeb78bb12509c4d2e38aee0197daab362583abb221563a7279eec8dd571cd8e2",
"0x47047ddc4b5337358b993052d35f241845f697d2fda5e51f26a8c3cf37194fa3",
"0x1a36308036e0049b5e8f0b803e68a33d0507ca29502b59676acf3cbe1e8f0e40"
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
            version: '^0.8.0'
        }
    }
};

