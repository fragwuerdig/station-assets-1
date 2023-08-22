module.exports = {
  chainID: 'rebel-2',
  lcd: 'https://lcd.hexxagon.dev',
  gasAdjustment: 5,
  gasPrices: {
    uluna: 28.325,
    usdr: 0.52469,
    uusd: 0.75,
    ukrw: 850.0,
    umnt: 2142.855,
    ueur: 0.625,
    ucny: 4.9,
    ujpy: 81.85,
    ugbp: 0.55,
    uinr: 54.4,
    ucad: 0.95,
    uchf: 0.7,
    uaud: 0.95,
    usgd: 1.0,
    uthb: 23.1,
    usek: 6.25,
    unok: 6.25,
    udkk: 4.5,
    uidr: 10900.0,
    uphp: 38.0,
    uhkd: 5.85,
    umyr: 3.0,
    utwd: 20.0,
  },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra Classic',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  isClassic: true,
  alliance: false,
  burnAddress: 'terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu',
  explorer: {
    address: 'https://finder.hexxagon.dev/testnet/address/{}',
    tx: 'https://finder.hexxagon.dev/testnet/tx/{}',
    validator: 'https://finder.hexxagon.dev/testnet/validator/{}',
    block: 'https://finder.hexxagon.dev/testnet/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNC',
      name: 'Luna Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/LunaClassic.svg',
      decimals: 6,
    },
    {
      token: 'uusd',
      symbol: 'USTC',
      name: 'TerraUSD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraUSDClassic.svg',
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
