import eth from 'k6/x/ethereum';
import wallet from 'k6/x/ethereum/wallet';

// Prepare the client and fund the VU account
const root_address = "0x85da99c8a7c2c95964c8efd687e95e632fc533d6"
const url = "http://localhost:8541"
const rclient = eth.newClient({
    url: url,
});
var nonce = rclient.getNonce(root_address);
const tacc = wallet.generateKey();
console.log("new account created => " + tacc.address)
const tx = {
    to: tacc.address,
    value: utils.parseEther("5"),
    gas_price: rclient.gasPrice(),
    nonce: nonce,
}
const txh = rclient.sendRawTransaction(tx);
rclient.waitForTransactionReceipt(txh);

// Declare the VU client
const client = eth.newClient({
    url: url,
    private_key: tacc.private_key
});
nonce = rclient.getNonce(tacc.address);

export default function () {
  console.log("working with address => " + tacc.address);
  const gas = client.gasPrice();
  console.log(`gas => ${gas}`);

  const bal = client.getBalance(tacc.address, client.blockNumber());
  console.log(`bal => ${bal}`);
  
  const tx = {
    to: "0xDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF",
    value: utils.parseEther("0.001"),
    gas_price: gas,
    nonce: nonce,
  };
  
  const txh = client.sendRawTransaction(tx)
  console.log("tx hash => " + txh);
  nonce = nonce + 1;
}
