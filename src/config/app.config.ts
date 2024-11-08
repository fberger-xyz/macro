import { AppThemes, IconIds } from '@/enums'

export const APP_METADATA = {
    SITE_AUTHOR: 'fberger',
    SITE_NAME: 'alpha | fberger',
    SITE_DESCRIPTION: 'Alpha w/o market noise',
    SITE_URL: 'https://alpha.fberger.xyz',
    SOCIALS: {
        X: 'fberger_xyz',
        TELEGRAM: 'fberger_xyz',
        LINKEDIN: 'francis-berger-a2404094',
    },
}

export const APP_THEMES: Partial<Record<AppThemes, { index: number; iconId: IconIds }>> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}

export const RESSOURCES: {
    index: number
    name: string
    toMonitor: string[]
    proxies: {
        index: number
        author: string
        name: string
        socials: [
            {
                index: number
                icon: IconIds
                href: string
            },
        ]
        toMonitor: string[]
    }[]
}[] = [
    {
        index: 0,
        name: 'TradFi',
        toMonitor: [],
        proxies: [
            {
                index: 0,
                author: 'TradingView',
                name: 'Economic Calendar',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://www.tradingview.com/economic-calendar/',
                    },
                ],
                toMonitor: ['High importance USA events'],
            },
            {
                index: 1,
                author: 'Fintool',
                name: 'AI Equity Research',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://fintool.com/',
                    },
                ],
                toMonitor: ['Key companies earnings'],
            },
            {
                index: 2,
                author: 'Farside',
                name: 'ETF Flows',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://farside.co.uk/btc/',
                    },
                ],
                toMonitor: ['Trends'],
            },
        ],
    },
    {
        index: 1,
        name: 'CeFi',
        toMonitor: [],
        proxies: [
            {
                index: 0,
                author: 'Coinalyze',
                name: 'Futures: OI + Funding + Liquidations',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://coinalyze.net/',
                    },
                ],
                toMonitor: ['Trends'],
            },
            {
                index: 1,
                author: 'glassnode',
                name: 'Tether Supply',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://studio.glassnode.com/metrics?a=USDT&category=Supply&m=supply.Current',
                    },
                ],
                toMonitor: ['Markets liquidity'],
            },
            {
                index: 2,
                author: 'Binance',
                name: 'Announcements',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://www.binance.com/en/support/announcement/new-cryptocurrency-listing?c=48&navId=48',
                    },
                ],
                toMonitor: ['New listings'],
            },
        ],
    },
    {
        index: 2,
        toMonitor: [],
        name: 'DeFi',
        proxies: [
            {
                index: 0,
                author: 'Ethereum Roadmap',
                name: 'Future upgrades',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://ethroadmap.com/',
                    },
                ],
                toMonitor: ['Impacts on UX and issuance'],
            },
            {
                index: 1,
                author: 'Hyperliquid',
                name: 'Funding Comparison',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://app.hyperliquid.xyz/fundingComparison',
                    },
                ],
                toMonitor: ['Onchain leverage'],
            },
            {
                index: 2,
                author: 'Aave',
                name: 'Lending Markets APY',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://app.aave.com/markets/',
                    },
                ],
                toMonitor: ['Onchain leverage'],
            },
            {
                index: 3,
                author: 'DeFi France',
                name: 'Community',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.TELEGRAM,
                        href: 'https://t.me/defifrance',
                    },
                ],
                toMonitor: [],
            },
            {
                index: 4,
                author: 'DeFiLlama',
                name: 'Token Unlocks',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://defillama.com/unlocks',
                    },
                ],
                toMonitor: ['VCs timing'],
            },
        ],
    },
    {
        index: 3,
        name: 'KOLs / Analysts',
        toMonitor: [],
        proxies: [
            {
                index: 0,
                author: 'Arthur Hayes',
                name: 'Predictions',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.MEDIUM,
                        href: 'https://cryptohayes.medium.com/',
                    },
                ],
                toMonitor: ['Views on market'],
            },
            {
                index: 1,
                author: 'High Stakes Capital',
                name: 'Bets',
                socials: [
                    {
                        index: 1,
                        icon: IconIds.X,
                        href: 'https://x.com/HighStakesCap',
                    },
                ],
                toMonitor: ['Views on market'],
            },
            {
                index: 2,
                author: 'Coin SU',
                name: 'Insights',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.X,
                        href: 'https://x.com/L4UR3N7',
                    },
                ],
                toMonitor: ['Views on macro (called $/¥ carry trade unwind)'],
            },
            {
                index: 3,
                author: 'TokenBrice',
                name: 'Insights',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://tokenbrice.xyz/',
                    },
                ],
                toMonitor: [],
            },
        ],
    },
    {
        index: 4,
        name: 'Sentiments',
        toMonitor: ['Monitor key companies earnings like those of $NVDA'],
        proxies: [
            {
                index: 0,
                author: 'Polymarket',
                name: 'Crypto related polls',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://polymarket.com/markets/crypto',
                    },
                ],
                toMonitor: [],
            },
            {
                index: 1,
                author: '',
                name: 'Coinbase AppStore Position',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.TELEGRAM,
                        href: 'https://t.me/coinbaseappstore',
                    },
                ],
                toMonitor: [],
            },
            {
                index: 2,
                author: 'Google Trends',
                name: 'Bitcoin search',
                socials: [
                    {
                        index: 0,
                        icon: IconIds.WEBSITE,
                        href: 'https://trends.google.com/trends/explore?date=today%203-m&q=bitcoin&hl=en',
                    },
                ],
                toMonitor: [],
            },
        ],
    },
]
