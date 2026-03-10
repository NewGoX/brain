// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'NewGoX 知识库', // 这里改成了你的项目名
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/NewGoX/brain' }
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
                    // 注意：请确保你的文件夹名确实是 web3_churujin
                    autogenerate: { directory: 'web3_churujin' }, 
                },
                {
                    label: '📚 参考资料',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});