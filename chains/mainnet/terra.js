module.exports = {
  chainID: 'columbus-5',
  lcd: 'https://terra-classic-lcd.publicnode.com',
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
  icon: process.env.CF_PAGES_URL + '/img/chains/TerraClassic.svg',
  explorer: {
    address: 'https://finder.terrarebels.net/classic/address/{}',
    tx: 'https://finder.terrarebels.net/classic/tx/{}',
    validator: 'https://finder.terrarebels.net/classic/validator/{}',
    block: 'https://finder.terrarebels.net/classic/block/{}',
  },
  tokens: [
    {
      token: 'uaud',
      symbol: 'AUTC',
      name: 'TerraAUD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraAUDClassic.svg',
      decimals: 6,
    },
    {
      token: 'ucad',
      symbol: 'CATC',
      name: 'TerraCAD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraCADClassic.svg',
      decimals: 6,
    },
    {
      token: 'uchf',
      symbol: 'CHTC',
      name: 'TerraCHF Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraCHFClassic.svg',
      decimals: 6,
    },
    {
      token: 'ucny',
      symbol: 'CNTC',
      name: 'TerraCNY Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraCNYClassic.svg',
      decimals: 6,
    },
    {
      token: 'udkk',
      symbol: 'DKTC',
      name: 'TerraDKK Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraDKKClassic.svg',
      decimals: 6,
    },
    {
      token: 'ueur',
      symbol: 'EUTC',
      name: 'TerraEUR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraEURClassic.svg',
      decimals: 6,
    },
    {
      token: 'ugbp',
      symbol: 'GPTC',
      name: 'TerraGBP Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraGBPClassic.svg',
      decimals: 6,
    },
    {
      token: 'uhkd',
      symbol: 'HKTC',
      name: 'TerraHKD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraHKDClassic.svg',
      decimals: 6,
    },
    {
      token: 'uidr',
      symbol: 'IDTC',
      name: 'TerraIDR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraIDRClassic.svg',
      decimals: 6,
    },
    {
      token: 'uinr',
      symbol: 'INTC',
      name: 'TerraINR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraINRClassic.svg',
      decimals: 6,
    },
    {
      token: 'ujpy',
      symbol: 'JPTC',
      name: 'TerraJPY Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraJPYClassic.svg',
      decimals: 6,
    },
    {
      token: 'ukrw',
      symbol: 'KRTC',
      name: 'TerraKRW Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraKRWClassic.svg',
      decimals: 6,
    },
    {
      token: 'uluna',
      symbol: 'LUNC',
      name: 'Luna Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/LunaClassic.svg',
      decimals: 6,
    },
    {
      token: 'umnt',
      symbol: 'UMNTC',
      name: 'TerraMNT Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraMNTClassic.svg',
      decimals: 6,
    },
    {
      token: 'umyr',
      symbol: 'MYTC',
      name: 'TerraMYR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraMYRClassic.svg',
      decimals: 6,
    },
    {
      token: 'unok',
      symbol: 'NOTC',
      name: 'TerraNOK Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraNOKClassic.svg',
      decimals: 6,
    },
    {
      token: 'uphp',
      symbol: 'PHTC',
      name: 'TerraPHP Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraPHPClassic.svg',
      decimals: 6,
    },
    {
      token: 'usdr',
      symbol: 'SDRC',
      name: 'TerraSDR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraSDRClassic.svg',
      decimals: 6,
    },
    {
      token: 'usek',
      symbol: 'SETC',
      name: 'TerraSEK Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraSEKClassic.svg',
      decimals: 6,
    },
    {
      token: 'usgd',
      symbol: 'SGTC',
      name: 'TerraSGD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraSGDClassic.svg',
      decimals: 6,
    },
    {
      token: 'uthb',
      symbol: 'THTC',
      name: 'TerraTHB Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraTHBClassic.svg',
      decimals: 6,
    },
    {
      token: 'utwd',
      symbol: 'TWTC',
      name: 'TerraTWD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraTWDClassic.svg',
      decimals: 6,
    },
    {
      token: 'uusd',
      symbol: 'USTC',
      name: 'TerraUSD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraUSDClassic.svg',
      decimals: 6,
    },
  ],
}
