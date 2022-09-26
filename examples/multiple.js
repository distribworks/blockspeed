import eth from 'k6/x/ethereum';
import exec from 'k6/execution';
import wallet from 'k6/x/ethereum/wallet';

export const options = {
  stages: [
    { duration: '30s', target: 150 },
    { duration: '5s', target: 75 },
    { duration: '10s', target: 0 },
  ],
};

// You can use an existing premined account
const root_address = "0x85da99c8a7c2c95964c8efd687e95e632fc533d6"
const url = "http://localhost:10002"

export function setup() {
  const client = new eth.Client({ url: url });
  var accounts = [];
  var nonce = client.getNonce(root_address);

  // fund the VUs accounts
  for (let i = 0; i < exec.instance.vusInitialized; i++) {
    var tacc = wallet.generateKey();
    accounts[i] = {
      private_key: tacc.private_key,
      address: tacc.address,
    };

    // fund each account with 5 ETH
    var tx = {
      to: tacc.address,
      value: Number(5 * 1e18),
      gas_price: client.gasPrice(),
      nonce: nonce,
    };

    console.log(JSON.stringify(tx));
    var txh = client.sendRawTransaction(tx)
    client.waitForTransactionReceipt(txh).then((receipt) => {
      console.log(`account funded => ${receipt.block_hash}`);  
    });

    nonce++;
  }

  return {accounts: accounts};
}

var nonce = 0;

// VU client
export default function (data) {
  const client = new eth.Client({
    url: url,
    privateKey: data.accounts[exec.vu.idInInstance - 1].private_key
  });

  console.log(`nonce => ${nonce}`);
  
  const tx = {
    to: "0xDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF",
    value: Number(0.0001 * 1e18),
    gas_price: client.gasPrice(),
    nonce: nonce,
  };

  const txh = client.sendRawTransaction(tx);
  console.log("tx hash => " + txh);
  nonce++;

  client.waitForTransactionReceipt(txh).then((receipt) => {
    console.log("tx block hash => " + receipt.block_hash);
  });
}
