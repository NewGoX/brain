// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://newgox.vercel.app',
    integrations: [
        starlight({
            title: 'NewGoX 知识库',
            // 确保这里是方括号 [ ]，且里面是 link 属性
            social: [
                { icon: 'github', link: 'https://github.com/NewGoX/brain' }
            ],
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
                    label: '📚 参考资料',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});