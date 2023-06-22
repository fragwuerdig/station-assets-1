module.exports = {
  chainID: 'rebel-2',
  lcd: 'https://lcd.terrarebels.dev',
  gasAdjustment: 3.5,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra Classic',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  alliance: false,
  explorer: {
    address: 'https://finder.terrarebels.dev/testnet/address/{}',
    tx: 'https://finder.terrarebels.dev/testnet/tx/{}',
    validator: 'https://finder.terrarebels.dev/testnet/validator/{}',
    block: 'https://finder.terrarebels.dev/testnet/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    },
    {
      token: 'factory/terra1zdpgj8am5nqqvht927k3etljyl6a52kwqup0je/utest766e',
      symbol: 'ALL',
      name: 'Alliance Test',
      icon: process.env.CF_PAGES_URL + '/img/chains/Atreides.png',
      decimals: 6,
    },
  ],
}
