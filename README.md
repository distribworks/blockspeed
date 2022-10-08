<p align="center">
<img width="400" src="docs/images/blockspeed-logo.png" alt="BlockSpeed" title="BlockSpeed" />
</p>

# BlockSpeed

Blockchain performance testing platform based on [k6](https://k6.io/)

Blockspeed is a k6 distro including blockchain performance testing libraries, packaged in one binary and ready to use to conduct blockchain performance testing, stress testing and smoke testing on different blockchain clients.

Blockspeed takes a different approach than most other blockchain performance tools out there, it leverages the full power and capabilities of k6 and offering full flexibility to design your perfect test scenarios.

Other tools will provide you with different modes of testing, simple transactions, contract deployment, etc. Blockspeed instead is a thin layer on the Ethereum RPC API, written in Go for maximum performance, but allows you to design your test scenarios in Javascript offering a familiar environment for Web3 development teams.

Using k6 as core you get the most powerful stress testing tool features and speed, plus all the reporting and flexibility capabilities included in k6, this makes this tool stay ahead of any other blockchain performance testing toolkit out there.

Currently only Ethereum based clients are supported, but support for other protocols are being developed.

![](demo.gif)
## Getting started

### Install `blockspeed`

You can download the appropriate package for your OS in the [releases](https://github.com/distribworks/blockspeed/releases) section.

### Run

1. Open Ganache or any other blockchain client and copy the private key and one account address
2. Replace the corresponsing values in `examples/simple.js`
3. Run `bs6 run simple.js -i 100`

For more information on different scenarios setup, refer to the official [k6 documentation](https://github.com/grafana/k6/tree/master#running-k6).

Check the examples in the [examples folder](https://github.com/distribworks/xk6-ethereum/tree/main/examples).

Logo by DALL-E
