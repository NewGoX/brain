// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://newgox.vercel.app',
    integrations: [
        starlight({
            title: 'NewGoX 知识库',
            // 注意：这里已经彻底删除了引发报错的 social 配置
            sidebar: [
                {
                    label: '🚀 开始使用',
                    items: [
                        { label: '示例指南', slug: 'guides/example' },
                    ],
                },
                {
                    label: '🛡️ Web3安全篇',
                    autogenerate: { directory: 'beidaoleixing' }, 
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: 'web3_project', // 侧边栏一级目录显示的名称
                    autogenerate: { directory: 'jupiter' }, // 自动扫描该文件夹下的子目录
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
                        },
                    ],
                },
                {
                    label: '💰 Web3出入金',
                    items: [
                        {
                            label: '出金',
                            autogenerate: { directory: 'web3_churujin/chujin' },
                        },
                        {
                            label: '入金',
                            autogenerate: { directory: 'web3_churujin/rujin' },
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