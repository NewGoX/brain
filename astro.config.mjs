// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://newgox.vercel.app',
    integrations: [
        starlight({
            title: 'Web3入门到精通知识库',
            // 注意：这里已经彻底删除了引发报错的 social 配置
            sidebar: [
                {
                    label: '🚀 开始使用',
                    items: [
                        { label: '示例指南', slug: 'guides/example' },
                    ],
                },
                {
                    label: '海外银行开户教程',
                    items: [
                        {
                            label: '众安银行',
                            autogenerate: { directory: 'web3_pay/zabank' },
                        },
                        {
                            label: '新加坡华侨银行OCBC',
                            autogenerate: { directory: 'web3_pay/OCBC' },
                        },
                    ],
                },
                {
                    label: '海外手机号申请教程',
                    items: [
                        {
                            label: 'giffgaff',
                            autogenerate: { directory: 'web3_esim/giffgaff' },
                        },
                        {
                            label: 'vodafone',
                            autogenerate: { directory: 'web3_esim/vodafone' },
                        },
                    ],
                },
                {
                    label: 'web3交易所注册教程',
                    items: [
                        {
                            label: 'binance',
                            autogenerate: { directory: 'web3_exchange/binance' },
                        },
                        {
                            label: 'backpack',
                            autogenerate: { directory: 'web3_exchange/backpack' },
                        },
                    ],
                },
                {
                    label: 'Web3出入金教程',
                    items: [
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_onoff/on' },
                        },
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_onoff/off' },
                        },
                    ],
                },
                {
                    label: 'Web3钱包使用教程',
                    items: [
                        {
                            label: 'metamask钱包',
                            autogenerate: { directory: 'web3_walletuse/metamask' },
                        },
                        {
                            label: 'ledger钱包',
                            autogenerate: { directory: 'web3_walletuse/ledger' },
                        },
                        {
                            label: 'trezor钱包',
                            autogenerate: { directory: 'web3_walletuse/trezor' },
                        },
                        {
                            label: '比特币多签钱包',
                            autogenerate: { directory: 'web3_walletuse/sparrow' },
                        },
                        {
                            label: '以太坊多签钱包',
                            autogenerate: { directory: 'web3_walletuse/safe' },
                        },
                    ],
                },
                {
                    label: 'Web3项目分析',
                    items: [
                        {
                            label: 'jupiter',
                            autogenerate: { directory: 'web3_project/jupiter' },
                        },
                        {
                            label: 'hyperliquid',
                            autogenerate: { directory: 'web3_project/hyperliquid' },
                        },
                        {
                            label: 'aave',
                            autogenerate: { directory: 'web3_project/aave' },
                        },
                        {
                            label: 'uniswap',
                            autogenerate: { directory: 'web3_project/uniswap' },
                        },
                        {
                            label: 'circle',
                            autogenerate: { directory: 'web3_project/circle' },
                        },
                        {
                            label: 'pump',
                            autogenerate: { directory: 'web3_project/pump' },
                        },
                        {
                            label: 'ondo',
                            autogenerate: { directory: 'web3_project/ondo' },
                        },
                        {
                            label: 'pendle',
                            autogenerate: { directory: 'web3_project/pendle' },
                        },
                    ],
                },
                {
                    label: 'Web3链上必备工具',
                    items: [
                        {
                            label: '入门必备工具',
                            autogenerate: { directory: 'web3_tools/base' },
                        },
                        {
                            label: '进阶工具',
                            autogenerate: { directory: 'web3_tools/pro' },
                        },
                    ],
                },
                {
                    label: 'Web3链上实操教程',
                    items: [
                        {
                            label: 'airdrop',
                            autogenerate: { directory: 'web3_practice/airdrop' },
                        },
                        {
                            label: 'ido',
                            autogenerate: { directory: 'web3_parctice/ido' },
                        },
                    ],
                },
                {
                    label: 'Web3交易',
                    items: [
                        {
                            label: '交易系统搭建',
                            autogenerate: { directory: 'web3_trade/system' },
                        },
                        {
                            label: '待添加',
                            autogenerate: { directory: 'web3_trade/waitlist' },
                        },
                    ],
                },
                {
                    label: '持续更新中',
                    items: [
                        {
                            label: '待更新1',
                            autogenerate: { directory: 'web3_waiting/01' },
                        },
                        {
                            label: '待更新02',
                            autogenerate: { directory: 'web3_waiting/02' },
                        },
                    ],
                },                
                {
                    label: '📚 参考资料',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});